import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { WatchOnYouTubeBadge } from "@/components/ui/WatchOnYouTubeBadge";

interface PlayIconProps {
  size?: number;
  className?: string;
}

function PlayIcon({ size = 24, className }: PlayIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5.4v13.2L18.5 12 8 5.4Z" />
    </svg>
  );
}

const SURVEY_OPTIONS = [
  {
    label: "No, I didn't pray the prayer.",
    href: "/xp/no-i-didnt-pray",
    testid: "survey-no-didnt-pray",
    extraClass: "",
  },
  {
    label: "Yes, I received Jesus into my life.",
    href: "/xp/yes-i-received-jesus",
    testid: "survey-yes-received-jesus",
    extraClass: "gtm-conversion-received-christ",
  },
  {
    label: "Yes, I rededicated my life to Jesus.",
    href: "/xp/yes-i-rededicated",
    testid: "survey-yes-rededicated",
    extraClass: "",
  },
  {
    label: "No, I have already received Jesus in my life.",
    href: "/xp/no-already-received",
    testid: "survey-no-already-received",
    extraClass: "",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Discover the Real Jesus"
        description="Short videos that answer life's biggest questions. Discover the real Jesus."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-background">
        {/* Abstract Background Texture */}
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
          <div className="fade-up d-100 mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase border border-primary/20">
              Welcome
            </span>
          </div>

          <h1 className="fade-up d-200 text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground tracking-tight mb-6 leading-[1.1]">
            Discover the{" "}
            <span className="text-primary italic font-serif pr-2">Real</span>{" "}
            Jesus
          </h1>

          <p className="fade-up d-300 text-xl md:text-2xl text-foreground/70 mb-16 max-w-2xl mx-auto font-medium">
            Short videos that answer life's biggest questions.
          </p>

          {/* Featured Video Section - Gift of Heaven */}
          <div className="fade-up d-400 w-full max-w-3xl bg-card rounded-2xl shadow-2xl shadow-primary/5 border border-border overflow-hidden">
            <div className="p-6 md:p-8 text-left border-b border-border bg-gradient-to-br from-card to-muted/30">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <PlayIcon size={12} className="ml-0.5" />
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Featured Video
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                The Gift of Heaven
              </h2>
              <p className="text-foreground/70">
                Is heaven a reward for good behavior, or is it a gift? Discover
                what Jesus really said about eternity.
              </p>
            </div>

            <div
              className="relative w-full bg-black"
              style={{ aspectRatio: "16/9" }}
              data-testid="video-gift-of-heaven"
            >
              <YouTubeFacade
                videoId="XB7wGTnYeaE"
                title="The Gift of Heaven — JesusOnline"
                thumbnailSrc="/thumb-gift-of-heaven.jpg"
              />
              <WatchOnYouTubeBadge />
            </div>

            <div className="p-6 md:p-8 bg-card" data-testid="section-survey">
              <p className="font-bold text-lg md:text-xl text-foreground mb-6">
                After watching the video, please share your response below.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {SURVEY_OPTIONS.map((opt) => (
                  <Link
                    key={opt.href}
                    href={opt.href}
                    data-testid={opt.testid}
                    className={`flex items-center justify-center text-center px-4 py-3 sm:py-4 rounded-xl bg-muted/50 hover:bg-primary hover:text-white border border-border hover:border-primary text-foreground font-semibold text-sm sm:text-base transition-all duration-300 ${opt.extraClass ? ` ${opt.extraClass}` : ""}`}
                  >
                    {opt.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Videos Section */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              More Videos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore these short films addressing purpose, relevance, and
              history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Jesus' Resurrection & You (Interactive LP link/facade) */}
            <div className="fade-up d-100 flex flex-col group h-full">
              <Link
                href="/lp/jesus-resurrection-and-you-ttn"
                className="block w-full overflow-hidden rounded-xl bg-card border border-border shadow-md shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex-1 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src="/thumb-resurrection.jpg"
                    alt="Jesus' Resurrection & You"
                    width="640"
                    height="360"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PlayIcon size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Jesus' Resurrection &amp; You
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                    What if the most important event in history is also
                    personal?
                  </p>
                </div>
              </Link>
            </div>

            {/* 2. Your Life Has Purpose */}
            <div className="fade-up d-200 flex flex-col group h-full">
              <a
                href="https://www.youtube.com/watch?v=1ngNjwYu83o"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Your Life Has Purpose on YouTube"
                data-testid="link-video-purpose"
                className="w-full overflow-hidden rounded-xl bg-card border border-border shadow-md shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex-1 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src="https://i.ytimg.com/vi/1ngNjwYu83o/hqdefault.jpg"
                    alt="Your Life Has Purpose"
                    width="640"
                    height="360"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PlayIcon size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Your Life Has Purpose
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                    Do you wonder why you're here — and whether your life was
                    designed for a reason?
                  </p>
                </div>
              </a>
            </div>

            {/* 3. Is Jesus Relevant To You? */}
            <div className="fade-up d-300 flex flex-col group h-full">
              <a
                href="https://www.youtube.com/watch?v=e0jMauxD1Y0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Is Jesus Relevant To You? on YouTube"
                data-testid="link-video-relevant"
                className="w-full overflow-hidden rounded-xl bg-card border border-border shadow-md shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex-1 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src="https://i.ytimg.com/vi/e0jMauxD1Y0/hqdefault.jpg"
                    alt="Is Jesus Relevant To You?"
                    width="640"
                    height="360"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PlayIcon size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Is Jesus Relevant To You?
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                    Most people search for meaning in success, pleasure, or
                    popularity. What if the answer is something deeper?
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
