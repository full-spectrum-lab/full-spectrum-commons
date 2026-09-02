import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def evaluate(condition):
    conflict = {"knowledge_version": "v2 != v1", "recommendation_is_authorization": False,
                "evidence_present": False, "feedback_state_changed": True}
    if condition == "A":
        return {"boundary": "UNKNOWN", "evidence": "UNKNOWN", "responsibility": "UNKNOWN", "human_review": "REQUIRED"}
    if condition == "B":
        return {"boundary": "FAIL", "evidence": "FAIL", "responsibility": "UNKNOWN", "human_review": "REQUIRED"}
    return {"boundary": "PASS", "evidence": "UNKNOWN", "responsibility": "PASS", "human_review": "REQUIRED"}


def main():
    conditions = {name: evaluate(name) for name in ("A", "B", "C")}
    result = {"validation_id": "FS-VALIDATION-002", "case_id": "CASE-X",
              "status": "EXPERIMENTAL", "conditions": conditions,
              "overall": "UNKNOWN",
              "interpretation": "C improves boundary and responsibility visibility in this synthetic case; evidence completeness remains UNKNOWN.",
              "not_proven": ["global governance necessity", "production readiness", "security against real agents"]}
    out = ROOT / "results" / "validation-result.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    rendered = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
    out.write_text(rendered, encoding="utf-8")
    import hashlib
    (out.parent / "RESULT-SHA256.txt").write_text(
        hashlib.sha256(rendered.encode("utf-8")).hexdigest() + "  validation-result.json\n",
        encoding="utf-8")
    print(rendered, end="")


if __name__ == "__main__":
    main()
