import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "https://app.jesusonline.com/home", label: "Dashboard" },
  { href: "https://app.jesusonline.com/category/2/22", label: "Time With God" },
  { href: "https://app.jesusonline.com/category/2/21", label: "Personal Growth" },
  { href: "https://app.jesusonline.com/category/2/23", label: "Share Jesus" },
  { href: "https://app.jesusonline.com/category/2/24", label: "Facts for Faith" },
  { href: "https://app.jesusonline.com/reader", label: "Bible" },
];

export function XPHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary py-4 shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="https://app.jesusonline.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 z-50"
            data-testid="xp-logo"
          >
            <span className="text-2xl font-extrabold text-white tracking-tight">Jesus</span>
            <span className="text-2xl font-light text-white/90">Online</span>
            <span className="ml-2 text-xs font-semibold bg-primary text-white px-2 py-0.5 uppercase tracking-wide">App</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-primary transition-colors"
                data-testid={`xp-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden z-50 p-2 text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="xp-button-mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-secondary z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 lg:hidden",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
            data-testid={`xp-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
