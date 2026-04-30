import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/discover-evidence", label: "Discover Evidence" },
  { href: "/receive-jesus", label: "Meet Jesus" },
  { href: "/follow-jesus", label: "Follow Jesus" },
  { href: "/forever-loved", label: "Forever Loved" },
  { href: "/god-is-hope", label: "God Is Hope" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 z-50">
            <span className="text-2xl font-extrabold text-secondary tracking-tight">Jesus</span>
            <span className="text-2xl font-light text-primary">Online</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-secondary"
                )}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 lg:hidden",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-2xl font-bold transition-colors hover:text-primary",
              location === link.href ? "text-primary" : "text-secondary"
            )}
            data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
