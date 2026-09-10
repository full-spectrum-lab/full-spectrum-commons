import { createRequire } from "node:module";
import crypto from "node:crypto";
import fs from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.dirname(sourceDir);
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  const dependencyRoot = process.env.CODEX_NODE_MODULES;
  if (!dependencyRoot) throw new Error("Install playwright or set CODEX_NODE_MODULES to the bundled node_modules directory.");
  ({ chromium } = require(path.join(dependencyRoot, "playwright")));
}
const statusBytes = fs.readFileSync(path.join(sourceDir, "status-source.json"));
const status = JSON.parse(statusBytes.toString("utf8"));
const statusSha = crypto.createHash("sha256").update(statusBytes).digest("hex").toUpperCase();
const renderedAt = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
}).format(new Date()).replace(" ", "T") + "+08:00";
const metadata = {
  generated_at: renderedAt,
  facts_as_of: status.facts_as_of,
  qpp_baseline_commit: status.qpp_baseline_commit,
  status_source_sha256: statusSha,
  evidence_index: "EVIDENCE.md"
};
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });

for (const [source, captures] of [
  ["fde-agent-lifecycle-infographics.zh-CN.html", [["concept", "fde-agent-lifecycle-governance-zh-v01.png"], ["matrix", "full-spectrum-fde-capability-matrix-zh-v01.png"]]],
  ["fde-agent-lifecycle-infographics.en.html", [["concept-en", "fde-agent-lifecycle-governance-en-v01.png"], ["matrix-en", "full-spectrum-fde-capability-matrix-en-v01.png"]]],
  ["fde-agent-lifecycle-scenario.html", [["scenario-zh", "fde-governed-change-scenario-zh-v01.png"], ["scenario-en", "fde-governed-change-scenario-en-v01.png"]]]
]) {
  await page.goto(pathToFileURL(path.join(sourceDir, source)).href);
  await page.evaluate(meta => {
    for (const el of document.querySelectorAll('[data-meta="rendered-at"]')) el.textContent = meta.generated_at.slice(0, 16).replace("T", " ");
    for (const el of document.querySelectorAll('[data-meta="facts-as-of"]')) el.textContent = meta.facts_as_of;
    for (const el of document.querySelectorAll('[data-meta="baseline-short"]')) el.textContent = meta.status_source_sha256.slice(0, 12);
    for (const el of document.querySelectorAll('[data-meta="baseline-sha"]')) el.textContent = meta.status_source_sha256;
  }, metadata);
  await page.evaluate(() => document.fonts.ready);
  for (const [id, file] of captures) {
    await page.locator(`#${id}`).screenshot({ path: path.join(outputDir, file) });
  }
}

await browser.close();
metadata.outputs = Object.fromEntries(
  fs.readdirSync(outputDir)
    .filter(file => file.endsWith(".png"))
    .sort()
    .map(file => [file, crypto.createHash("sha256").update(fs.readFileSync(path.join(outputDir, file))).digest("hex").toUpperCase()])
);
fs.writeFileSync(path.join(outputDir, "generated-status-metadata.json"), JSON.stringify(metadata, null, 2) + "\n");
