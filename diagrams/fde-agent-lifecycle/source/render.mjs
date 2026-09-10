import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.dirname(sourceDir);
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/wangjian0926/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });

await page.goto(pathToFileURL(path.join(sourceDir, "fde-agent-lifecycle-infographics.zh-CN.html")).href);
await page.evaluate(() => document.fonts.ready);

for (const [id, file] of [
  ["concept", "fde-agent-lifecycle-governance-zh-v01.png"],
  ["matrix", "full-spectrum-fde-capability-matrix-zh-v01.png"],
]) {
  await page.locator(`#${id}`).screenshot({ path: path.join(outputDir, file) });
}

await browser.close();
