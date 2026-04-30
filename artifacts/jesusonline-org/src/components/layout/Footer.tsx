import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="flex flex-col gap-2">
            <Link href="/" className="inline-flex items-center justify-center md:justify-start gap-1">
              <span className="text-2xl font-extrabold text-white tracking-tight">Jesus</span>
              <span className="text-2xl font-light text-white/90">Online</span>
            </Link>
            <p className="text-white/60 text-sm">Examining the evidence. Growing in faith.</p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start text-sm">
            <a 
              href="https://jesusonline.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
              data-testid="link-footer-jo"
            >
              JesusOnline.com
            </a>
            <a 
              href="https://app.jesusonline.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
              data-testid="link-footer-app"
            >
              JesusOnline App
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-end">
            <p className="text-white/60 text-sm">© JesusOnline Ministry</p>
            <p className="text-white/40 text-xs">All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
