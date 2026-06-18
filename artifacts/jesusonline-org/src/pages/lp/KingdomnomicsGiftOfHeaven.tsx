import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { WatchOnYouTubeBadge } from "@/components/ui/WatchOnYouTubeBadge";

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

export default function KingdomnomicsGiftOfHeaven() {
  return (
    <>
      <SEO
        title="The Gift of Heaven"
        description="Watch The Gift of Heaven and let us know where you are on your journey with God."
        path="/lp/gift-of-heaven-ttn"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">

          <h1 className="fade-up text-3xl sm:text-5xl font-extrabold text-secondary text-center mb-4 mt-1 pt-6">
            The Gift of Heaven
          </h1>

          <div
            className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 mb-6"
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
          </div>

        </div>
      </div>
    </>
  );
}
