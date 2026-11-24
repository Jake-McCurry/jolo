---
name: Decision survey tracking contract
description: External GTM event mapping and the confirmed delegated-handler approach for migrated surveys.
---

Migrated surveys use the supplied delegated handler as the sole decision-event owner. The external GTM-PKJQNCS contract is decision_submit with decision_type received → GA4 Yes_Received, or rededicated → GA4 Yes_Rededicated. Negative answers navigate without a decision event.

**Why:** The user supplied this contract and confirmed that the Gift of Heaven pilot worked before requesting the Resurrection rollout. The GA4 mapping lives outside this repository.

**How to apply:** Reuse the supplied once-only initializer and preserve its callback, fallback, linker handling, and duplicate guard. Do not add parallel tracking or remove legacy tracking from unmigrated pages. User confirmation of the pilot is not independent verification of every external GA4/Ads tag.

## Temporary legacy compatibility

The user supplied verified GTM settings: “JOLO-V Yes Received” and “JOLO-V Yes Rededicated” use LINK_CLICK triggers matching Click URL containing `/xp/yes-i-received-jesus` and `/xp/yes-i-rededicated`, respectively, with Page Hostname containing `jesusonline.org`. Both have `checkValidation=false` and `waitForTags=false`. These tags do not depend on the conversion CSS class or destination-page load.

**Why:** The user reported the new conversions were not working yet and requested both tracking paths to protect existing ad campaigns while collecting new decision events.

**How to apply:** During this temporary phase, both specified landing-page surveys must use real legacy jesusonline.org XP anchor URLs and send visitors there, while retaining the single decision handler. Do not stop click propagation or navigate on an early decision callback before the original link-click tags get an opportunity to execute. Preserve XP tracking helpers and all external tracking settings. Local simulations do not prove actual GA4 or Ads receipt.
