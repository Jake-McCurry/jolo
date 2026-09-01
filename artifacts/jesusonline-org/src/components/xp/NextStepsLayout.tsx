import type { ReactNode } from "react";
import { IconChevronRight, IconDownload, IconMail, IconBrandWhatsapp } from "@/components/ui/Icons";
import { BOOK_PDF_URL } from "@/lib/urls";

interface XPPageLayoutProps {
  children: ReactNode;
}

export function XPPageLayout({ children }: XPPageLayoutProps) {
  return (
    <div className="xp-page min-h-[100dvh] bg-background py-8 md:py-16 selection:bg-primary/10">
      <div className="max-w-2xl mx-auto px-5 space-y-12">
        {children}
      </div>
    </div>
  );
}

export function XPHeroSection({ title, description, delay = "d-100" }: { title: string, description: string, delay?: string }) {
  return (
    <div className={`fade-up ${delay} space-y-4 text-center px-4`}>
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export function XPBookCard({ subtext, delay = "d-200" }: { subtext: string, delay?: string }) {
  const sendToYourself = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = window.location.href;
    window.location.href = `mailto:?subject=A helpful resource from JesusOnline&body=Here is the link to the resource page: ${encodeURIComponent(url)}`;
  };

  return (
    <div className={`fade-up ${delay} bg-card rounded-2xl shadow-sm border border-card-border overflow-hidden`}>
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full transform -translate-y-4" />
          <a
            href={BOOK_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block rounded-lg focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
            data-testid="link-guide-cover"
            aria-label="Open The Adventure of Living with Jesus PDF"
          >
            <img
              src="/img/adventure-cover.jpg"
              alt="The Adventure of Living with Jesus"
              className="w-40 md:w-48 h-auto rounded-lg shadow-lg transition-transform duration-200 hover:-translate-y-1"
            />
          </a>
        </div>
        <div className="flex flex-col flex-1 text-center md:text-left pt-2">
          <a
            href="https://follow.jesusonline.com/adv-begin-the-adventure"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto"
            data-testid="link-begin-guide"
          >
            Begin This Short Guide
          </a>
          <p className="text-sm font-medium text-foreground/70 mt-4">
            {subtext}
          </p>

          <div className="mt-8 space-y-3 pt-6 border-t border-border">
            <p className="text-sm text-foreground/70 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
              Prefer to keep a copy on your phone? 
              <a href={BOOK_PDF_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1 group" data-testid="link-download-guide">
                <IconDownload size={14} className="group-hover:-translate-y-0.5 transition-transform" /> Download the Guide (PDF)
              </a>
            </p>
            <p className="text-sm text-foreground/70 flex flex-wrap items-center justify-center md:justify-start gap-x-1.5 gap-y-1">
              Want this page later? 
              <button onClick={sendToYourself} className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0" data-testid="button-email-page">
                Send it to yourself
              </button>
              <span className="text-muted-foreground">· or bookmark it.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function XPVideoSection({ delay = "d-300" }: { delay?: string }) {
  return (
    <div className={`fade-up ${delay} space-y-5`}>
      <div className="text-center px-4">
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">How God sees you now</h2>
        <p className="text-foreground/70 max-w-lg mx-auto">
          In three minutes, hear the same good news you just stepped into: you belong to Christ, and God already sees you as His.
        </p>
      </div>
      <a 
        href="https://www.youtube.com/watch?v=psw_5rn9WFY&list=PLyI_AdjR33H3yAO7F9M4tJoq9EwU7Afmc&index=2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block yt-facade aspect-video shadow-md group"
        data-testid="link-how-god-sees-you"
      >
        <img src="https://img.youtube.com/vi/psw_5rn9WFY/maxresdefault.jpg" alt="How God sees you now Video Thumbnail" />
        <div className="yt-play">
          <div className="yt-play-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </a>
      <p className="text-center text-sm font-medium text-foreground/60">Watch 3 minutes — How God sees you now</p>
    </div>
  );
}

interface QuestionLink {
  label: string;
  href: string;
}

export function XPQuestionsSection({ title, links, delay = "d-400" }: { title: string, links: QuestionLink[], delay?: string }) {
  return (
    <div className={`fade-up ${delay} space-y-6`}>
      <h2 className="font-display text-2xl font-bold text-center text-foreground px-4">
        {title}
      </h2>
      <div className="bg-card rounded-2xl shadow-sm border border-card-border overflow-hidden">
        <div className="divide-y divide-border">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 hover:bg-muted/50 transition-colors group"
              data-testid={`link-xp-resource-${i}`}
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <IconChevronRight size={18} className="translate-x-[1px]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function XPContactSection({ delay = "d-500", showExtraComfort = false }: { delay?: string, showExtraComfort?: boolean }) {
  return (
    <div className={`fade-up ${delay} bg-card rounded-2xl p-8 md:p-12 text-center border border-card-border shadow-sm relative overflow-hidden`}>
      <div className="absolute inset-0 bg-secondary/30 blur-3xl transform translate-y-12" />
      <div className="relative z-10">
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          We're Here If You Need Anything
        </h2>
        <p className="text-foreground/75 max-w-md mx-auto mb-8 leading-relaxed">
          If a question or concern is on your heart, you are welcome to share it. A real person will read what you send.
          {showExtraComfort && " You do not have to figure out church, fear, or next steps by yourself."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="btn-primary w-full sm:w-auto" data-testid="link-contact">
            <IconMail size={18} /> Email us
          </a>
          <button disabled className="btn-disabled w-full sm:w-auto" data-testid="button-whatsapp-disabled">
            <IconBrandWhatsapp size={18} /> Message on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
