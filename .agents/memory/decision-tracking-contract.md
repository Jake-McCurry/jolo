---
name: Decision survey tracking contract
description: External GTM event mapping and the confirmed delegated-handler approach for migrated surveys.
---

Migrated surveys use the supplied delegated handler as the sole decision-event owner. The external GTM-PKJQNCS contract is decision_submit with decision_type received → GA4 Yes_Received, or rededicated → GA4 Yes_Rededicated. Negative answers navigate without a decision event.

**Why:** The user supplied this contract and confirmed that the Gift of Heaven pilot worked before requesting the Resurrection rollout. The GA4 mapping lives outside this repository.

**How to apply:** Reuse the supplied once-only initializer and preserve its callback, fallback, linker handling, and duplicate guard. Do not add parallel tracking or remove legacy tracking from unmigrated pages. User confirmation of the pilot is not independent verification of every external GA4/Ads tag.
