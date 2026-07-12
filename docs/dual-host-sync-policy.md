# GitHub / Gitee Dual-Host Synchronization Policy

GitHub and Gitee are synchronized by release content, not by commit hash. Different hosting histories, wiki repositories and platform metadata make identical hashes neither necessary nor always possible.

For every synchronized release compare version/tag, tracked file manifest and normalized content, release artifacts and SHA-256 checksums, Schema versions and generated examples, test results, release notes and capability boundaries. Record both host commits, timestamp and intentional platform-only files. Content or artifact mismatch blocks synchronized status; hash mismatch alone does not.

Export each host at the intended revision, exclude declared platform metadata, normalize line endings only for comparison, and compare paths plus SHA-256 digests. Never rewrite history merely to force hash equality.
