---
name: Security override versioning
description: How to choose workspace override versions when remediating transitive dependency advisories.
---

Pin security overrides to a verified patched release on the dependency's existing compatibility line. Do not infer that the next patch exists, and do not use an open-ended `>=` override when a newer major is available.

**Why:** The registry can skip expected patch numbers, and an open-ended minimum can silently resolve a transitive peer to a new major with stricter runtime requirements.

**How to apply:** Check the registry's published versions and the audit advisory's patched range, select the newest compatible maintained-line release, regenerate the lockfile, and verify the resolved tree.