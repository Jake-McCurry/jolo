import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";

const LP = "resurrection-ttn";

const SURVEY_OPTIONS = [
  {
    label: "No, I didn't pray the prayer.",
    href: `/xp/no-i-didnt-pray?lp=${LP}`,
    testid: "survey-no-didnt-pray",
    extraClass: "",
  },
  {
    label: "Yes, I prayed and received Jesus into my life.",
    href: `/xp/yes-i-received-jesus?lp=${LP}`,
    testid: "survey-yes-received-jesus",
    extraClass: "gtm-conversion-received-christ",
  },
  {
    label: "Yes, I prayed and rededicated my life to Jesus.",
    href: `/xp/yes-i-rededicated?lp=${LP}`,
    testid: "survey-yes-rededicated",
    extraClass: "",
  },
  {
    label: "No, I have already received Jesus in my life.",
    href: `/xp/no-already-received?lp=${LP}`,
    testid: "survey-no-already-received",
    extraClass: "",
  },
];

function WatchOnYouTubeBadge() {
  return (
    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/70 text-white text-[11px] font-semibold px-2 py-1 rounded pointer-events-none select-none">
      <span>Watch on</span>
      <span className="flex items-center gap-1">
        <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
          <rect width="14" height="10" rx="2" fill="#FF0000" />
          <polygon points="5.5,2.5 5.5,7.5 10,5" fill="white" />
        </svg>
        <span className="font-bold tracking-tight">YouTube</span>
      </span>
    </div>
  );
}

function MenuArrow() {
  return (
    <div className="flex justify-end pr-2 pt-1.5 pb-1">
      <div className="flex items-center gap-1.5 bg-secondary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M5 9V1M5 1L1 5M5 1L9 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        Tap for Menu
      </div>
    </div>
  );
}

export default function JesusResurrectionAndYou() {
  return (
    <>
      <SEO
        title="Jesus' Resurrection & You"
        description="Watch Jesus, Resurrection & You and let us know where you are on your journey with God."
        path="/lp/jesus-resurrection-and-you-ttn"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">

          <MenuArrow />

          <h1 className="fade-up text-3xl sm:text-5xl font-extrabold text-secondary text-center mb-4 mt-1">
            Jesus' Resurrection &amp; You
          </h1>

          <div
            className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 mb-6"
            style={{ aspectRatio: "16/9" }}
            data-testid="video-resurrection"
          >
            <YouTubeFacade
              videoId="SEg4a2xaJyw"
              title="Jesus, Resurrection & You — JesusOnline"
              thumbnailSrc="/thumb-resurrection.jpg"
            />
            <WatchOnYouTubeBadge />
          </div>

          <div
            className="bg-white rounded-xl shadow-md p-5 sm:p-8"
            data-testid="section-survey"
          >
            <p className="font-bold text-base sm:text-xl text-gray-900 mb-5">
              After watching the video, please share your response below.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {SURVEY_OPTIONS.map((opt) => (
                <Link
                  key={opt.href}
                  href={opt.href}
                  data-testid={opt.testid}
                  className={`text-primary underline font-semibold text-sm sm:text-base hover:opacity-70 transition-opacity block${opt.extraClass ? ` ${opt.extraClass}` : ""}`}
                >
                  {opt.label}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Read the{" "}
              <a
                href="https://jesusonline.com/jesus-resurrection-and-you/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                video transcript of Jesus' Resurrection and You
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
