#!/usr/bin/env python3
"""Fail when Commons public navigation drifts from the organization manifest."""

from __future__ import annotations

import json
import sys
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MANIFEST_URL = "https://raw.githubusercontent.com/full-spectrum-lab/.github/main/ecosystem/ecosystem-manifest.json"
DOCS = [
    ROOT / "START_HERE.md",
    ROOT / "ECOSYSTEM.md",
    ROOT / "REPO_MAP.md",
    ROOT / "docs" / "four-independent-engineering-tracks.md",
]
REPOSITORIES = {
    "protocol": "full-spectrum-protocol",
    "engine": "full-spectrum-engine",
    "knowledge_governance": "full-spectrum-knowledge-governance",
    "observer": "full-spectrum-observer",
}


def main() -> int:
    errors: list[str] = []
    request = urllib.request.Request(MANIFEST_URL, headers={"User-Agent": "full-spectrum-commons-alignment"})
    with urllib.request.urlopen(request, timeout=20) as response:
        manifest = json.load(response)

    if manifest.get("composition") != "independent_products_optional_composition":
        errors.append("organization manifest no longer declares independent products and optional composition")
    tracks = manifest.get("tracks", {})
    for key, repository in REPOSITORIES.items():
        if key not in tracks:
            errors.append(f"organization manifest is missing track: {key}")
        for path in DOCS:
            text = path.read_text(encoding="utf-8")
            if repository not in text:
                errors.append(f"{path.relative_to(ROOT)} is missing {repository}")

    current_entry = (ROOT / "START_HERE.md").read_text(encoding="utf-8")
    if "Understand the three entries and three components" in current_entry:
        errors.append("START_HERE still promotes the superseded three-component model")
    ecosystem = (ROOT / "ECOSYSTEM.md").read_text(encoding="utf-8")
    if "independently usable" not in ecosystem or "Final real-world action" not in ecosystem:
        errors.append("ECOSYSTEM is missing independence or real-world action boundary")

    if errors:
        for error in errors:
            print(f"[FAIL] {error}")
        return 1
    print("[PASS] Commons navigation aligns with the canonical ecosystem manifest")
    return 0


if __name__ == "__main__":
    sys.exit(main())
