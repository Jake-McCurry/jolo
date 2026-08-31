import { useState, useEffect } from "react";
import { MAIN_SITE } from "@/lib/urls";

export interface NavLink {
  label: string;
  href: string;
}

const LP_NAV_LINKS: NavLink[] = [
  { label: "Discover Evidence", href: `${MAIN_SITE}/discover-evidence/` },
  { label: "Meet Jesus", href: `${MAIN_SITE}/receive-jesus/` },
  { label: "Follow Jesus", href: `${MAIN_SITE}/follow-jesus/` },
  { label: "Translate & Resources", href: `${MAIN_SITE}/translate-resources/` },
];

interface SiteNavProps {
  links?: NavLink[];
}

export function SiteNav({ links = LP_NAV_LINKS }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        style={{ background: "#0095FF" }}
        className="w-full sticky top-0 z-40 shadow-md"
      >
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-5 sm:px-8 md:h-[70px]">
          <a
            href="/"
            aria-label="JesusOnline home"
            className="inline-flex items-center"
          >
            <img
              src="/jesusonline-wordmark.png"
              alt="JesusOnline"
              width="320"
              height="57"
              className="h-8 w-auto sm:h-11"
            />
          </a>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-nav-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 items-center justify-center gap-2.5 rounded px-1 text-white"
              style={{ outlineColor: "#ffffff" }}
            >
              <span className="text-sm font-semibold tracking-wide">Menu</span>
              <span className="flex w-6 flex-col items-center justify-center gap-[5px]">
                <span
                  style={{ background: "#ffffff" }}
                  className={`block h-0.5 w-6 rounded-full transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}
                />
                <span
                  style={{ background: "#ffffff" }}
                  className={`block h-0.5 w-6 rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  style={{ background: "#ffffff" }}
                  className={`block h-0.5 w-6 rounded-full transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-30"
          style={{ background: "rgba(0,0,0,0.25)" }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="site-nav-drawer"
        role="navigation"
        aria-label="Site navigation"
        className={`fixed left-0 right-0 top-16 z-30 overflow-hidden border-t border-slate-200 bg-white shadow-xl transition-all duration-200 ease-out sm:left-auto sm:right-8 sm:w-[360px] md:top-[70px] 2xl:right-[max(2rem,calc((100vw-1800px)/2+2rem))] ${
          open
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li
              key={link.href}
              className="border-b border-slate-200 last:border-b-0"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-6 py-5 text-lg font-semibold text-[#063690] transition-colors hover:bg-sky-50 hover:text-[#0095FF] focus-visible:bg-sky-50 focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
