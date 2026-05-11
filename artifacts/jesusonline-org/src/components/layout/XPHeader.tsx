import { SiteNav } from "./SiteNav";
import type { NavLink } from "./SiteNav";

const APP_BASE = "https://app.jesusonline.com";

const XP_NAV_LINKS: NavLink[] = [
  { label: "Dashboard",          href: `${APP_BASE}/home` },
  { label: "Time With God",      href: `${APP_BASE}/time-with-god` },
  { label: "Personal Growth",    href: `${APP_BASE}/discipleship` },
  { label: "Share Jesus",        href: `${APP_BASE}/evangelism` },
  { label: "Facts for Faith",    href: `${APP_BASE}/evidence` },
  { label: "Books",              href: `${APP_BASE}/books` },
  { label: "Messages",           href: `${APP_BASE}/community` },
  { label: "Prayer Requests",    href: `${APP_BASE}/prayer` },
  { label: "Bible",              href: `${APP_BASE}/reader` },
  { label: "Partner Ministries", href: `${APP_BASE}/partner-ministries` },
  { label: "About Us",           href: `${APP_BASE}/about-us` },
  { label: "Help",               href: `${APP_BASE}/help` },
];

export function XPHeader() {
  return <SiteNav logoHref={`${APP_BASE}/find-what-you-want`} links={XP_NAV_LINKS} />;
}
