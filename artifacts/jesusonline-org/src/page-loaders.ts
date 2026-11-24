import { createElement, lazy, type ComponentType } from "react";

type PageModule = { default: ComponentType };

function page(moduleId: string, importer: () => Promise<PageModule>) {
  let pending: Promise<PageModule> | undefined;
  let loaded: ComponentType | undefined;
  const load = () => pending ??= importer().then((module) => {
    loaded = module.default;
    return module;
  });
  const Deferred = lazy(load);
  return {
    moduleId,
    load,
    // Initial hydration uses the already-loaded component, so it never replaces
    // pre-rendered content with the Suspense fallback while downloading a page.
    Component: () => createElement(loaded ?? Deferred),
  };
}

export const pages = {
  Home: page("src/pages/Home.tsx", () => import("./pages/Home")),
  Contact: page("src/pages/Contact.tsx", () => import("./pages/Contact")),
  Gift: page("src/pages/lp/KingdomnomicsGiftOfHeaven.tsx", () => import("./pages/lp/KingdomnomicsGiftOfHeaven")),
  Resurrection: page("src/pages/lp/JesusResurrectionAndYou.tsx", () => import("./pages/lp/JesusResurrectionAndYou")),
  Relevant: page("src/pages/videos/IsJesusRelevantToYou.tsx", () => import("./pages/videos/IsJesusRelevantToYou")),
  ResurrectionVideo: page("src/pages/videos/JesusResurrectionAndYou.tsx", () => import("./pages/videos/JesusResurrectionAndYou")),
  GiftVideo: page("src/pages/videos/TheGiftOfHeaven.tsx", () => import("./pages/videos/TheGiftOfHeaven")),
  Purpose: page("src/pages/videos/YourLifeHasPurpose.tsx", () => import("./pages/videos/YourLifeHasPurpose")),
  DidNotPray: page("src/pages/xp/NoDidntPray.tsx", () => import("./pages/xp/NoDidntPray")),
  Received: page("src/pages/xp/YesReceivedJesus.tsx", () => import("./pages/xp/YesReceivedJesus")),
  Rededicated: page("src/pages/xp/YesRededicated.tsx", () => import("./pages/xp/YesRededicated")),
  Believer: page("src/pages/xp/NoAlreadyReceived.tsx", () => import("./pages/xp/NoAlreadyReceived")),
};

const routePages: Record<string, typeof pages.Home> = {
  "/": pages.Home,
  "/contact": pages.Contact,
  "/lp/gift-of-heaven-ttn": pages.Gift,
  "/lp/jesus-resurrection-and-you-ttn": pages.Resurrection,
  "/video/is-jesus-relevant-to-you": pages.Relevant,
  "/video/jesus-resurrection-and-you": pages.ResurrectionVideo,
  "/video/the-gift-of-heaven": pages.GiftVideo,
  "/video/your-life-has-purpose": pages.Purpose,
  "/xp/no-i-didnt-pray": pages.DidNotPray,
  "/xp/yes-i-received-jesus": pages.Received,
  "/xp/yes-i-rededicated": pages.Rededicated,
  "/xp/no-already-received": pages.Believer,
};

export function pageForPath(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  // Existing aliases and unmatched routes still redirect to Gift in AppRoutes.
  return routePages[path] ?? pages.Gift;
}
