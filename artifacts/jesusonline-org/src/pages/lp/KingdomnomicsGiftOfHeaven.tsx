import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { ChevronRight } from "lucide-react";

const SURVEY_OPTIONS = [
  {
    label: "No, I didn't pray the prayer.",
    href: "/xp/no-i-didnt-pray",
    testid: "survey-no-didnt-pray",
  },
  {
    label: "Yes, I prayed and received Jesus into my life.",
    href: "/xp/yes-i-received-jesus",
    testid: "survey-yes-received-jesus",
  },
  {
    label: "Yes, I prayed and rededicated my life to Jesus.",
    href: "/xp/yes-i-rededicated",
    testid: "survey-yes-rededicated",
  },
  {
    label: "No, I have already received Jesus in my life.",
    href: "/xp/no-already-received",
    testid: "survey-no-already-received",
  },
];

const DELAYS = ["d-400", "d-450", "d-500", "d-550"];

export default function KingdomnomicsGiftOfHeaven() {
  return (
    <>
      <SEO
        title="The Gift of Heaven"
        description="Watch The Gift of Heaven and let us know where you are on your journey with God."
      />

      <div className="min-h-screen bg-gray-50">
        <div
          className="text-white py-12 px-4 text-center"
          style={{ background: "linear-gradient(135deg, #063690 0%, #0095FF 100%)" }}
        >
          <h1 className="fade-up text-3xl md:text-4xl font-extrabold">
            The Gift of Heaven
          </h1>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-10">

          <div
            className="fade-up d-150 w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 mb-8"
            style={{ aspectRatio: "16/9" }}
            data-testid="video-gift-of-heaven"
          >
            <YouTubeFacade
              videoId="XB7wGTnYeaE"
              title="The Gift of Heaven — JesusOnline"
            />
          </div>

          <div
            className="fade-up d-300 bg-white rounded-xl shadow-md p-8"
            data-testid="section-survey"
          >
            <p className="text-center text-secondary font-bold text-lg mb-1">
              After watching the video, please share your response below.
            </p>
            <p className="text-center text-gray-400 text-sm mb-7">Select the statement that describes you.</p>

            <div className="flex flex-col gap-3">
              {SURVEY_OPTIONS.map((opt, i) => (
                <div key={opt.href} className={`fade-up ${DELAYS[i]}`}>
                  <Link href={opt.href}>
                    <button
                      data-testid={opt.testid}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-full font-semibold text-left transition-all duration-200 bg-white text-secondary border-2 border-gray-200 hover:border-primary hover:text-primary"
                    >
                      <span>{opt.label}</span>
                      <ChevronRight size={18} className="flex-shrink-0" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-5 text-sm text-gray-400">
            Prefer to read?{" "}
            <a
              href="https://apicontent.jesusonline.com/uncategorized/82010-t-kingdomnomics-the-gift-of-heaven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              data-testid="link-transcript"
            >
              Read the video transcript
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
