import { useEffect } from "react";
import { SEO } from "@/components/ui/SEO";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { WatchOnYouTubeBadge } from "@/components/ui/WatchOnYouTubeBadge";
import { MAIN_SITE } from "@/lib/urls";
import { initializeDecisionControls } from "@/features/decision-survey/decision-controls";
import "@/features/decision-survey/decision-survey.css";

const SURVEY_OPTIONS = [
  {
    label: "I didn't pray the prayer",
    decision: "did-not-pray",
    href: "https://jesusonline.org/xp/no-i-didnt-pray?lp=resurrection-ttn",
    testid: "survey-no-didnt-pray",
  },
  {
    label: "I prayed and rededicated my life to Jesus",
    decision: "rededicated",
    href: "https://jesusonline.org/xp/yes-i-rededicated",
    testid: "survey-yes-rededicated",
  },
  {
    label: "I prayed the prayer and invited Jesus into my life",
    decision: "received",
    href: "https://jesusonline.org/xp/yes-i-received-jesus",
    testid: "survey-yes-received-jesus",
  },
  {
    label: "I have already invited Jesus into my life",
    decision: "believer",
    href: "https://jesusonline.org/xp/no-already-received?lp=resurrection-ttn",
    testid: "survey-no-already-received",
  },
];

export default function JesusResurrectionAndYou() {
  useEffect(() => {
    // Reuse the pilot's globally guarded delegated handler, not another listener.
    initializeDecisionControls();
  }, []);

  return (
    <>
      <SEO
        title="Jesus' Resurrection & You"
        description="Watch Jesus, Resurrection & You and let us know where you are on your journey with God."
        path="/lp/jesus-resurrection-and-you-ttn"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">

          <h1 className="fade-up text-3xl sm:text-5xl font-extrabold text-secondary text-center mb-4 mt-1 pt-6">
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

            <div
              className="jol-decision-controls"
              data-jol-decision-group=""
              role="group"
              aria-label="Your response"
            >
              {SURVEY_OPTIONS.map((opt) => (
                <a
                  key={opt.href}
                  href={opt.href}
                  data-testid={opt.testid}
                  className="jol-decision-answer"
                  data-jol-decision={opt.decision}
                >
                  {opt.label}
                </a>
              ))}
              <p
                className="jol-decision-status"
                data-jol-decision-status=""
                role="status"
                aria-live="polite"
                aria-atomic="true"
              />
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Read the{" "}
              <a
                href={`${MAIN_SITE}/jesus-resurrection-and-you/`}
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
