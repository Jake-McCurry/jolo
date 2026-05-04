import { useState, useEffect } from "react";

export interface NavLink {
  label: string;
  href: string;
}

const LP_NAV_LINKS: NavLink[] = [
  { label: "Discover Evidence",     href: "https://jesusonline.com/discover-evidence/" },
  { label: "Meet Jesus",            href: "https://jesusonline.com/meet-jesus/" },
  { label: "Follow Jesus",          href: "https://jesusonline.com/follow-jesus/" },
  { label: "Find Hope & Love",      href: "https://jesusonline.com/find-hope-and-love/" },
  { label: "Translate & Resources", href: "https://jesusonline.com/translate-resources/" },
];

const TEXT = "#063690";

function JoloIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="18" r="18" fill="#063690" />
      <circle cx="18" cy="18" r="11" fill="#0095FF" />
      <circle cx="18" cy="18" r="4" fill="#063690" />
      <path d="M18 7 A11 11 0 0 1 29 18" stroke="#063690" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M18 29 A11 11 0 0 1 7 18" stroke="#063690" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

interface SiteNavProps {
  logoHref: string;
  links?: NavLink[];
}

export function SiteNav({ logoHref, links = LP_NAV_LINKS }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header style={{ background: "#0095ff" }} className="w-full sticky top-0 z-40 shadow-md">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <a
            href={logoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded"
            style={{ outlineColor: TEXT }}
            aria-label="JesusOnline — go to main site"
          >
            <JoloIcon />
            <span style={{ color: TEXT }} className="font-extrabold text-lg tracking-widest uppercase leading-none select-none">
              JesusOnline
            </span>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded"
            style={{ outlineColor: TEXT }}
          >
            <span style={{ background: TEXT }} className={`block h-0.5 w-6 rounded-full transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span style={{ background: TEXT }} className={`block h-0.5 w-6 rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span style={{ background: TEXT }} className={`block h-0.5 w-6 rounded-full transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
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
        style={{ background: "#0095ff", top: "56px" }}
        className={`fixed left-0 right-0 z-30 shadow-xl transition-all duration-200 ease-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="max-w-5xl mx-auto px-5 py-4 flex flex-col" style={{ borderColor: TEXT + "33" }}>
          {links.map((link) => (
            <li key={link.href} style={{ borderBottom: `1px solid ${TEXT}33` }}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={{ color: TEXT }}
                className="block py-3.5 font-semibold text-base tracking-wide hover:opacity-70 transition-opacity"
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
