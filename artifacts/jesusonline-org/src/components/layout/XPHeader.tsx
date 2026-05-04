import { SiteNav } from "./SiteNav";
import type { NavLink } from "./SiteNav";

const APP_BASE = "https://app.jesusonline.com";

const XP_NAV_LINKS: NavLink[] = [
  { label: "Dashboard",          href: `${APP_BASE}/home` },
  { label: "Time With God",      href: `${APP_BASE}/time-with-god` },
  { label: "Personal Growth",    href: `${APP_BASE}/personal-growth` },
  { label: "Share Jesus",        href: `${APP_BASE}/share-jesus` },
  { label: "Facts for Faith",    href: `${APP_BASE}/facts-for-faith` },
  { label: "Books",              href: `${APP_BASE}/books` },
  { label: "Messages",           href: `${APP_BASE}/messages` },
  { label: "Prayer Requests",    href: `${APP_BASE}/prayer` },
  { label: "Bible",              href: `${APP_BASE}/bible` },
  { label: "Partner Ministries", href: `${APP_BASE}/partner-ministries` },
  { label: "About Us",           href: `${APP_BASE}/about` },
  { label: "Help",               href: `${APP_BASE}/help` },
];

export function XPHeader() {
  return <SiteNav logoHref={`${APP_BASE}/find-what-you-want`} links={XP_NAV_LINKS} />;
}
