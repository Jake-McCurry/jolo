---
name: Decision survey tracking contract
description: External GTM event mapping and the confirmed delegated-handler approach for migrated surveys.
---

Migrated surveys use the supplied delegated handler as the sole decision-event owner. The external GTM-PKJQNCS contract is decision_submit with decision_type received → GA4 Yes_Received, or rededicated → GA4 Yes_Rededicated. Negative answers navigate without a decision event.

**Why:** The user supplied this contract and confirmed that the Gift of Heaven pilot worked before requesting the Resurrection rollout. The GA4 mapping lives outside this repository.

**How to apply:** Reuse the supplied once-only initializer and preserve its callback, fallback, linker handling, and duplicate guard. Do not add parallel tracking or remove legacy tracking from unmigrated pages. User confirmation of the pilot is not independent verification of every external GA4/Ads tag.

## New-only tracking and direct Follow destinations

Both migrated landing-page surveys must send responses directly to `https://follow.jesusonline.com/xp/` with the matching `received`, `rededicated`, `did-not-pray`, or `believer` path. Only positive answers push the new decision event. Do not restore legacy .org XP links for tracking compatibility.

**Why:** The user explicitly ended temporary dual tracking after JOLO-V counts rebounded: “We only want the new conversion to be firing. and we want user to go to follow xp after making a decision”.

**How to apply:** Keep the single decision handler and duplicate protection. Preserve Resurrection's negative-answer query parameters. Do not alter unmigrated pages or claim external GTM/GA4 receipt was verified by local checks.

## Historical legacy trigger settings

The user supplied verified GTM settings: “JOLO-V Yes Received” and “JOLO-V Yes Rededicated” use LINK_CLICK triggers matching Click URL containing `/xp/yes-i-received-jesus` and `/xp/yes-i-rededicated`, respectively, with Page Hostname containing `jesusonline.org`. Both have `checkValidation=false` and `waitForTags=false`. These tags do not depend on the conversion CSS class or destination-page load.

**Why:** These explain why restoring .org XP anchor URLs re-enabled old events. The former temporary dual-tracking requirement has been superseded.

**How to apply:** Regression-test that the migrated LP anchors no longer match those legacy paths. Preserve normal propagation for cross-domain linker decoration; do not globally disable external tags that other pages may use. Local simulations do not prove actual GA4 or Ads receipt.
