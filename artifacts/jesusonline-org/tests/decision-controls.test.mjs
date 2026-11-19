// Run with: node --test artifacts/jesusonline-org/tests/decision-controls.test.mjs
// Isolated DOM/timer fixtures: no browser, network, GTM, or real conversion hits.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const pilot = readFileSync(new URL("../../../attached_assets/cpanel-first-survey_1795121470558.txt", import.meta.url), "utf8");
const source = readFileSync(new URL("../src/features/decision-survey/decision-controls.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const supplied = pilot.match(/<script>([\s\S]*?)<\/script>/)[1];
const responses = ["did-not-pray", "rededicated", "received", "believer"];
const origin = "https://follow.jesusonline.com/xp/";

function fixture(implementation) {
  const listeners = new Map();
  const windowListeners = new Map();
  const timers = new Map();
  const navigations = [];
  const controls = [];
  const statuses = [];
  let now = 0;
  let sequence = 0;
  let onPush;
  let navigationThrows = false;

  class Element {
    constructor(tagName, attrs = {}, parentNode = null) {
      this.nodeType = 1;
      this.tagName = tagName;
      this.attrs = new Map(Object.entries(attrs));
      this.parentNode = parentNode;
      this.textContent = "";
    }
    hasAttribute(name) { return this.attrs.has(name); }
    getAttribute(name) { return this.attrs.get(name) ?? null; }
    setAttribute(name, value) { this.attrs.set(name, String(value)); }
    removeAttribute(name) { this.attrs.delete(name); }
    get href() { return this.getAttribute("href"); }
    set href(value) { this.setAttribute("href", value); }
  }

  const addListener = (map, name, callback) => {
    map.set(name, [...(map.get(name) || []), callback]);
  };
  const document = {
    nodeType: 9,
    baseURI: "https://jesusonline.org/lp/gift-of-heaven-ttn/",
    addEventListener: (name, callback) => addListener(listeners, name, callback),
    querySelectorAll: (selector) => selector.endsWith("a[data-jol-decision]") ? controls : statuses,
  };
  function group() {
    const wrapper = new Element("DIV", { "data-jol-decision-group": "" }, document);
    const links = Object.fromEntries(responses.map((response) => {
      const link = new Element("A", { "data-jol-decision": response, href: origin + response }, wrapper);
      controls.push(link);
      return [response, link];
    }));
    const status = new Element("P", { "data-jol-decision-status": "" }, wrapper);
    statuses.push(status);
    return { wrapper, links, status };
  }
  const first = group();
  const window = {
    dataLayer: { push: (payload) => { events.push(payload); onPush?.(payload); } },
    setTimeout: (fn, delay = 0) => {
      const id = ++sequence;
      timers.set(id, { at: now + delay, fn });
      return id;
    },
    clearTimeout: (id) => timers.delete(id),
    addEventListener: (name, callback) => addListener(windowListeners, name, callback),
    location: { assign: (url) => {
      if (navigationThrows) throw new Error("Blocked in fixture");
      navigations.push(url);
    } },
  };
  const events = [];
  const context = vm.createContext({ window, document, URL, exports: {} });
  function init() {
    if (implementation === "supplied") vm.runInContext(supplied, context);
    else {
      vm.runInContext(compiled, context);
      context.exports.initializeDecisionControls();
    }
  }
  function advance(ms) {
    const until = now + ms;
    let remaining = 100;
    while (remaining--) {
      const next = [...timers].filter(([, t]) => t.at <= until).sort((a, b) => a[1].at - b[1].at || a[0] - b[0])[0];
      if (!next) { now = until; return; }
      now = next[1].at;
      timers.delete(next[0]);
      next[1].fn();
    }
    throw new Error("Timer loop");
  }
  function activate(response, options = {}) {
    const event = {
      target: first.links[response], type: "click", button: 0, defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; }, ...options,
    };
    for (const callback of listeners.get(event.type) || []) callback(event);
    return event;
  }
  function lifecycle(type, persisted = false) {
    for (const callback of windowListeners.get(type) || []) callback({ persisted });
  }
  init();
  return {
    ...first, events, navigations, controls, statuses, window, document, Element, group,
    activate, advance, lifecycle, init, listeners, windowListeners,
    onPush: (callback) => { onPush = callback; },
    failNavigation: () => { navigationThrows = true; },
  };
}

// Every behavioral check runs against both the supplied pilot and the adaptation.
for (const implementation of ["supplied", "adapted"]) {
  const check = (name, fn) => test(`${implementation}: ${name}`, () => fn(fixture(implementation)));

  check("initializes exactly once", (f) => {
    f.init(); f.init();
    assert.equal(f.listeners.get("click").length, 1);
    assert.equal(f.listeners.get("auxclick").length, 1);
    assert.equal(f.windowListeners.get("pagehide").length, 1);
    assert.equal(f.windowListeners.get("pageshow").length, 1);
  });

  for (const response of ["received", "rededicated"]) {
    check(`${response}: one decision, matching callback navigates once`, (f) => {
      assert.equal(f.activate(response).defaultPrevented, true);
      assert.equal(f.events.length, 1);
      assert.equal(f.events[0].event, "decision_submit");
      assert.equal(f.events[0].decision_type, response);
      assert.equal(f.events[0].eventTimeout, 1000);
      assert.equal(f.navigations.length, 0);
      f.events[0].eventCallback("GTM-PKJQNCS");
      f.events[0].eventCallback("GTM-PKJQNCS");
      f.advance(2000);
      assert.deepEqual(f.navigations, [origin + response]);
    });
  }
  for (const response of ["did-not-pray", "believer"]) {
    check(`${response}: ordinary link with no tracking or timers`, (f) => {
      assert.equal(f.activate(response).defaultPrevented, false);
      f.advance(2000);
      assert.equal(f.events.length, 0);
      assert.equal(f.navigations.length, 0); // The browser owns native navigation.
      assert.equal(f.links[response].href, origin + response);
      assert.equal(f.status.textContent, "");
    });
  }
  check("rapid selection blocks duplicates across answers and repeated blocks", (f) => {
    const second = f.group();
    f.activate("received");
    assert.equal(f.activate("rededicated").defaultPrevented, true);
    assert.equal(f.activate("received", { target: second.links.received }).defaultPrevented, true);
    assert.equal(f.activate("believer").defaultPrevented, true);
    assert.equal(f.events.length, 1);
    assert.ok(f.controls.every((link) => link.getAttribute("aria-disabled") === "true"));
    assert.ok(f.statuses.every((status) => status.textContent === "Continuing…"));
    assert.equal(f.links.received.getAttribute("data-jol-selected"), "true");
  });
  check("blocked GTM falls back at 1200ms, not before", (f) => {
    f.activate("received");
    f.advance(1199);
    assert.equal(f.navigations.length, 0);
    f.advance(1);
    assert.deepEqual(f.navigations, [origin + "received"]);
  });
  check("wrong container cannot navigate before watchdog; late callbacks cannot duplicate", (f) => {
    f.activate("received");
    f.events[0].eventCallback("GTM-OTHER");
    f.advance(0);
    assert.equal(f.navigations.length, 0);
    f.advance(1200);
    f.events[0].eventCallback("GTM-PKJQNCS");
    f.advance(0);
    assert.equal(f.navigations.length, 1);
  });
  check("callback without a container ID remains supported", (f) => {
    f.activate("rededicated");
    f.events[0].eventCallback();
    f.advance(0);
    assert.deepEqual(f.navigations, [origin + "rededicated"]);
  });
  check("linker decoration after synchronous callback is retained", (f) => {
    f.onPush((payload) => payload.eventCallback("GTM-PKJQNCS"));
    f.document.addEventListener("click", () => {
      f.links.received.href += "?_gl=fixture-linker&_ga=fixture-client&_gac=fixture-campaign";
    });
    f.activate("received");
    assert.equal(f.navigations.length, 0);
    f.advance(0);
    assert.equal(f.navigations[0], origin + "received?_gl=fixture-linker&_ga=fixture-client&_gac=fixture-campaign");
  });
  check("watchdog retains decorated query parameters too", (f) => {
    f.links.rededicated.href += "/?_gl=fixture";
    f.activate("rededicated");
    f.advance(1200);
    assert.equal(f.navigations[0], origin + "rededicated/?_gl=fixture");
  });
  check("invalidated destination falls back to the supplied safe destination", (f) => {
    f.activate("received");
    f.links.received.href = "https://invalid.example/";
    f.advance(1200);
    assert.deepEqual(f.navigations, [origin + "received"]);
  });
  check("throwing tracking queue cannot strand the visitor", (f) => {
    f.window.dataLayer.push = () => { throw new Error("Blocked"); };
    f.activate("received");
    f.advance(0);
    assert.deepEqual(f.navigations, [origin + "received"]);
  });
  check("absent dataLayer is initialized by the supplied handler", (f) => {
    delete f.window.dataLayer;
    f.activate("received");
    assert.equal(f.window.dataLayer.length, 1);
    assert.equal(f.window.dataLayer[0].decision_type, "received");
  });
  for (const options of [{ ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }, { type: "auxclick", button: 1 }]) {
    check(`native modified activation ${JSON.stringify(options)}`, (f) => {
      assert.equal(f.activate("received", options).defaultPrevented, false);
      f.advance(0);
      assert.equal(f.events.length, 1);
      assert.equal(f.events[0].eventCallback, undefined);
      assert.equal(f.links.received.getAttribute("aria-disabled"), null);
      f.advance(2000);
      assert.equal(f.navigations.length, 0);
    });
  }
  check("new-tab targets remain native and canceled clicks are not tracked", (f) => {
    f.links.received.setAttribute("target", "_blank");
    const event = f.activate("received");
    event.preventDefault();
    f.advance(0);
    assert.equal(f.events.length, 0);
    assert.equal(f.navigations.length, 0);
  });
  check("ignores other surveys, downloads, canceled clicks, right clicks, and invalid answers", (f) => {
    f.activate("received", { target: new f.Element("A", { "data-jol-decision": "received", href: origin + "received" }, f.document) });
    f.activate("received", { button: 2 });
    f.activate("received", { defaultPrevented: true });
    f.links.received.setAttribute("download", "");
    f.activate("received");
    f.links.received.removeAttribute("download");
    f.links.received.href = origin + "believer";
    f.activate("received");
    f.links.received.setAttribute("data-jol-decision", "unknown");
    f.activate("received");
    f.advance(2000);
    assert.equal(f.events.length, 0);
  });
  check("nested text-node activation works", (f) => {
    const span = new f.Element("SPAN", {}, f.links.received);
    f.activate("received", { target: { nodeType: 3, parentNode: span } });
    assert.equal(f.events.length, 1);
  });
  check("pagehide restores controls, saved attributes, and pending navigation", (f) => {
    f.links.believer.setAttribute("tabindex", "2");
    f.links.believer.setAttribute("aria-disabled", "false");
    f.activate("received");
    f.lifecycle("pagehide");
    f.events[0].eventCallback("GTM-PKJQNCS");
    f.advance(2000);
    assert.equal(f.navigations.length, 0);
    assert.equal(f.links.believer.getAttribute("tabindex"), "2");
    assert.equal(f.links.believer.getAttribute("aria-disabled"), "false");
    assert.equal(f.links.received.getAttribute("data-jol-selected"), null);
    assert.equal(f.status.textContent, "");
    f.activate("rededicated");
    assert.equal(f.events.length, 2);
  });
  check("initial pageshow does not cancel selection; persisted pageshow resets it", (f) => {
    f.activate("received");
    f.lifecycle("pageshow", false);
    assert.equal(f.status.textContent, "Continuing…");
    f.lifecycle("pageshow", true);
    assert.equal(f.status.textContent, "");
    f.advance(2000);
    assert.equal(f.navigations.length, 0);
  });
  check("failed navigation restores the survey", (f) => {
    f.failNavigation();
    f.activate("received");
    f.advance(1200);
    assert.equal(f.status.textContent, "");
    assert.equal(f.links.received.getAttribute("aria-disabled"), null);
  });
}

test("adapted initializer is safe during server rendering", () => {
  const context = vm.createContext({ exports: {} });
  vm.runInContext(compiled, context);
  assert.doesNotThrow(() => context.exports.initializeDecisionControls());
});

for (const pageFile of ["KingdomnomicsGiftOfHeaven", "JesusResurrectionAndYou"]) {
test(`${pageFile}: JSX keeps the supplied answers, destinations, order, opt-in and scoped CSS`, () => {
  const page = readFileSync(new URL(`../src/pages/lp/${pageFile}.tsx`, import.meta.url), "utf8");
  const css = readFileSync(new URL("../src/features/decision-survey/decision-survey.css", import.meta.url), "utf8");
  const normalize = (text) => text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, "");
  assert.equal(normalize(css), normalize(pilot.match(/<style>([\s\S]*?)<\/style>/)[1]));
  const options = [...page.matchAll(/decision: "([^"]+)",\s*href: "([^"]+)"/g)];
  assert.deepEqual(options.map((match) => match[1]), responses);
  for (const [, response, href] of options) assert.equal(href, origin + response);
  assert.match(page, /data-jol-decision-group=""/);
  assert.match(page, /data-jol-decision=\{opt\.decision\}/);
  assert.match(page, /data-jol-decision-status=""/);
  assert.match(page, /useEffect\(\(\) => \{[\s\S]*?initializeDecisionControls\(\);[\s\S]*?\}, \[\]\)/);
  assert.doesNotMatch(page, /gtm-conversion|<Link|onClick|dangerouslySetInnerHTML|trackConversion|dataLayer|gtag/);
});
}
