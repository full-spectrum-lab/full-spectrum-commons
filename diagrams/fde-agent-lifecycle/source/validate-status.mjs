import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(dir, "status-source.json"), "utf8"));
const outputDir = path.dirname(dir);
const sourceSha = crypto.createHash("sha256").update(fs.readFileSync(path.join(dir, "status-source.json"))).digest("hex").toUpperCase();
const allowed = new Set([
  "ENGINE_2_CONTRACT_FROZEN",
  "OFFLINE_PREFLIGHT_PASS",
  "LOCAL_OFFLINE_REVERIFY_PASS",
  "INDEPENDENT_LOCAL_OFFLINE_PASS",
  "PASS_PINNED_LOCAL_OFFLINE",
  "NOT_CONFIRMED",
  "NOT_IMPLEMENTED_NOT_AUTHORIZED",
  "NO"
]);
const refs = new Set(data.evidence.map(item => item.ref));
const errors = [];

if (!/^\d{4}-\d{2}-\d{2}$/.test(data.facts_as_of)) errors.push("facts_as_of must use YYYY-MM-DD");
if (!/^[0-9a-f]{40}$/.test(data.qpp_baseline_commit)) errors.push("qpp_baseline_commit must be a full commit");
for (const status of data.statuses) {
  if (!allowed.has(status.value)) errors.push(`unsupported status value: ${status.value}`);
  if (!status.limitations?.length) errors.push(`missing limitations: ${status.id}`);
  for (const ref of status.evidence_refs || []) if (!refs.has(ref)) errors.push(`unknown evidence ref ${ref}: ${status.id}`);
}
for (const item of data.evidence) {
  if (!/^https:\/\//.test(item.url)) errors.push(`non-HTTPS evidence URL: ${item.ref}`);
  if (item.commit && !/^[0-9a-f]{40}$/.test(item.commit)) errors.push(`evidence commit must be full: ${item.ref}`);
}
const metadataPath = path.join(outputDir, "generated-status-metadata.json");
if (!fs.existsSync(metadataPath)) {
  errors.push("generated-status-metadata.json is missing; run render.mjs");
} else {
  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  if (metadata.status_source_sha256 !== sourceSha) errors.push("status source changed without regenerating outputs");
  for (const [file, expected] of Object.entries(metadata.outputs || {})) {
    const filePath = path.join(outputDir, file);
    if (!fs.existsSync(filePath)) errors.push(`generated output is missing: ${file}`);
    else {
      const actual = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex").toUpperCase();
      if (actual !== expected) errors.push(`generated output hash mismatch: ${file}`);
    }
  }
  if (Object.keys(metadata.outputs || {}).length !== 6) errors.push("metadata must bind exactly six PNG outputs");
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${data.statuses.length} statuses, ${data.evidence.length} evidence references`);
