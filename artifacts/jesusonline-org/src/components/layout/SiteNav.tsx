import { useState, useEffect } from "react";
import { MAIN_SITE } from "@/lib/urls";

export interface NavLink {
  label: string;
  href: string;
}

const LP_NAV_LINKS: NavLink[] = [
  { label: "Discover Evidence",     href: `${MAIN_SITE}/discover-evidence/` },
  { label: "Meet Jesus",            href: `${MAIN_SITE}/receive-jesus/` },
  { label: "Follow Jesus",          href: `${MAIN_SITE}/follow-jesus/` },
  { label: "Translate & Resources", href: `${MAIN_SITE}/translate-resources/` },
];

interface SiteNavProps {
  links?: NavLink[];
}

export function SiteNav({ links = LP_NAV_LINKS }: SiteNavProps) {
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
      <header style={{ background: "linear-gradient(90deg, #2360c6 0%, #5ea1e6 100%)" }} className="w-full sticky top-0 z-40 shadow-md">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-start">
          <div className="flex items-center gap-2.5">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded"
            style={{ outlineColor: "#ffffff" }}
          >
            <span style={{ background: "#ffffff" }} className={`block h-0.5 w-6 rounded-full transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span style={{ background: "#ffffff" }} className={`block h-0.5 w-6 rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span style={{ background: "#ffffff" }} className={`block h-0.5 w-6 rounded-full transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
        style={{ background: "linear-gradient(90deg, #2360c6 0%, #5ea1e6 100%)", top: "56px" }}
        className={`fixed left-0 right-0 z-30 shadow-xl transition-all duration-200 ease-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="max-w-5xl mx-auto px-5 py-2 flex flex-col">
          {links.map((link) => (
            <li key={link.href} style={{ borderBottom: "1px solid rgba(255,255,255,0.25)" }}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={{ color: "#ffffff" }}
                className="block py-2 font-semibold text-sm hover:opacity-70 transition-opacity"
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
