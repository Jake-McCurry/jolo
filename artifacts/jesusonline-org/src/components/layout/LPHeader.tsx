export function LPHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="https://jesusonline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
          data-testid="lp-logo"
        >
          <span className="text-xl font-extrabold text-secondary tracking-tight">Jesus</span>
          <span className="text-xl font-light text-secondary/80">Online</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="https://jesusonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors font-semibold"
            data-testid="lp-nav-home"
          >
            JesusOnline.com
          </a>
          <a
            href="https://jesusonline.com/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors font-semibold"
            data-testid="lp-nav-about"
          >
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
}
