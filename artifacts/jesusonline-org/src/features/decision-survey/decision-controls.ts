/**
 * Client initializer adapted from the supplied cpanel-first-survey pilot.
 * Keep tracking and navigation here: do not add parallel React click handlers.
 */
interface DecisionPayload {
  event: "decision_submit";
  decision_type: string;
  eventCallback?: (containerId?: string) => void;
  eventTimeout?: number;
}

interface DecisionWindow extends Window {
  __jolDecisionControlsBound?: boolean;
  dataLayer?: { push: (payload: DecisionPayload) => unknown };
}

interface Selection {
  link: HTMLAnchorElement;
  timer: number | null;
  minimumWait: number | null;
  navigationTask: number | null;
  navigationQueued: boolean;
  navigated: boolean;
  controls: { link: HTMLAnchorElement; disabled: string | null; tabindex: string | null }[];
  statuses: HTMLElement[];
}

export function initializeDecisionControls() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const client = window as DecisionWindow;
  // One delegated listener also covers repeated or dynamically inserted blocks.
  if (client.__jolDecisionControlsBound) return;
  client.__jolDecisionControlsBound = true;

  let activeSelection: Selection | null = null;
  const destinations: Record<string, string> = {
    "did-not-pray": "https://jesusonline.org/xp/no-i-didnt-pray",
    received: "https://jesusonline.org/xp/yes-i-received-jesus",
    rededicated: "https://jesusonline.org/xp/yes-i-rededicated",
    believer: "https://jesusonline.org/xp/no-already-received",
  };

  function answerLink(target: EventTarget | null): HTMLAnchorElement | null {
    let node = target as Node | null;
    if (node && node.nodeType === 3) node = node.parentNode;
    while (node && node !== document) {
      if (node.nodeType === 1) {
        const element = node as HTMLElement;
        if (element.tagName === "A" && element.hasAttribute("data-jol-decision")) {
          let group = node.parentNode;
          while (group && group !== document) {
            if (group.nodeType === 1 && (group as Element).hasAttribute("data-jol-decision-group")) {
              return element as HTMLAnchorElement;
            }
            group = group.parentNode;
          }
          return null;
        }
      }
      node = node.parentNode;
    }
    return null;
  }

  function validDestination(link: HTMLAnchorElement, response: string) {
    // Permit Google's linker query parameters, but never change answer/destination.
    try {
      const url = new URL(link.href, document.baseURI);
      const path = url.pathname.replace(/\/$/, "");
      const expected = new URL(destinations[response]);
      if (url.origin === expected.origin && path === expected.pathname) return url.href;
    } catch { /* Invalid links must not activate the handler. */ }
    return null;
  }

  function restore(selection: Selection | null) {
    if (!selection) return;
    if (selection.timer !== null) window.clearTimeout(selection.timer);
    if (selection.minimumWait !== null) window.clearTimeout(selection.minimumWait);
    if (selection.navigationTask !== null) window.clearTimeout(selection.navigationTask);
    for (const saved of selection.controls) {
      if (saved.disabled === null) saved.link.removeAttribute("aria-disabled");
      else saved.link.setAttribute("aria-disabled", saved.disabled);
      if (saved.tabindex === null) saved.link.removeAttribute("tabindex");
      else saved.link.setAttribute("tabindex", saved.tabindex);
      saved.link.removeAttribute("data-jol-selected");
    }
    for (const status of selection.statuses) status.textContent = "";
  }

  function reset() {
    const old = activeSelection;
    activeSelection = null;
    restore(old);
  }

  function lock(link: HTMLAnchorElement) {
    const selection: Selection = {
      link, timer: null, minimumWait: null, navigationTask: null,
      navigationQueued: false, navigated: false, controls: [], statuses: [],
    };
    activeSelection = selection;
    const controls = document.querySelectorAll<HTMLAnchorElement>("[data-jol-decision-group] a[data-jol-decision]");
    for (const control of controls) {
      selection.controls.push({
        link: control, disabled: control.getAttribute("aria-disabled"),
        tabindex: control.getAttribute("tabindex"),
      });
      control.setAttribute("aria-disabled", "true");
      control.setAttribute("tabindex", "-1");
    }
    link.setAttribute("data-jol-selected", "true");
    const statuses = document.querySelectorAll<HTMLElement>("[data-jol-decision-group] [data-jol-decision-status]");
    for (const status of statuses) {
      selection.statuses.push(status);
      status.textContent = "Continuing…";
    }
    return selection;
  }

  function pushDecision(response: string, callback?: (containerId?: string) => void) {
    client.dataLayer = client.dataLayer || [];
    const payload: DecisionPayload = { event: "decision_submit", decision_type: response };
    if (callback) {
      payload.eventCallback = callback;
      payload.eventTimeout = 1000;
    }
    client.dataLayer.push(payload);
  }

  function activate(event: MouseEvent) {
    const link = answerLink(event.target);
    if (!link || event.defaultPrevented || link.hasAttribute("download")) return;
    if (event.type === "auxclick" ? event.button !== 1 : event.button !== 0) return;
    const response = link.getAttribute("data-jol-decision");
    if (!response || !Object.prototype.hasOwnProperty.call(destinations, response) || !validDestination(link, response)) return;

    if (activeSelection) {
      event.preventDefault();
      return;
    }

    const isDecision = response === "received" || response === "rededicated";
    const target = link.getAttribute("target");
    const nativeNavigation = event.type === "auxclick" || event.ctrlKey || event.metaKey ||
      event.shiftKey || event.altKey || (target && target.toLowerCase() !== "_self");
    if (nativeNavigation) {
      // Preserve new-tab/window behavior. Observe genuine activation only;
      // right-click/context-menu opening has no reliable activation signal.
      if (isDecision) window.setTimeout(() => {
        if (event.defaultPrevented) return;
        try { pushDecision(response); } catch { /* Native navigation is unaffected. */ }
      }, 0);
      return;
    }

    // Negative answers are ordinary links, including when JavaScript is absent.
    if (!isDecision) return;
    event.preventDefault();
    // Do not stop propagation: legacy GTM LINK_CLICK triggers inspect this anchor's
    // href. Their checkValidation=false permits this prevented native navigation.
    const selection = lock(link);
    let decisionProcessed = false;
    function navigate() {
      if (activeSelection !== selection || selection.navigationQueued || selection.navigated) return;
      selection.navigationQueued = true;
      // Let all document click listeners finish, including Google's link decorator.
      selection.navigationTask = window.setTimeout(() => {
        if (activeSelection !== selection || selection.navigated) return;
        selection.navigated = true;
        if (selection.timer !== null) window.clearTimeout(selection.timer);
        const destination = validDestination(selection.link, response!) || destinations[response!];
        try { window.location.assign(destination); }
        catch { reset(); }
      }, 0);
    }

    // A decision callback can run synchronously, before GTM sees the original click.
    // Always give that click and its legacy tags a 1000ms grace period as well.
    selection.minimumWait = window.setTimeout(() => {
      selection.minimumWait = null;
      if (decisionProcessed) navigate();
    }, 1000);
    function decisionComplete() {
      decisionProcessed = true;
      if (selection.minimumWait === null) navigate();
    }

    // Independent of GTM: missing/blocked tracking still navigates at 1200ms.
    selection.timer = window.setTimeout(navigate, 1200);
    try {
      pushDecision(response, (containerId) => {
        if (containerId && containerId !== "GTM-PKJQNCS") return;
        decisionComplete();
      });
    } catch { decisionComplete(); }
  }

  document.addEventListener("click", activate);
  document.addEventListener("auxclick", activate);
  window.addEventListener("pagehide", reset);
  window.addEventListener("pageshow", (event) => {
    // Initial pageshow must not cancel a legitimate early selection.
    if (event.persisted) reset();
  });
}
