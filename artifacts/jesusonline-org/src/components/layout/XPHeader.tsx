export function XPHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="https://app.jesusonline.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
          data-testid="xp-logo"
        >
          <span className="text-xl font-extrabold text-secondary tracking-tight">Jesus</span>
          <span className="text-xl font-light text-secondary/80">Online</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="https://app.jesusonline.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors font-semibold"
            data-testid="xp-nav-app"
          >
            Open the App
          </a>
          <a
            href="https://app.jesusonline.com/find-what-you-want"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm !py-2 !px-5"
            data-testid="xp-nav-explore"
          >
            Explore
          </a>
        </nav>
      </div>
    </header>
  );
}
