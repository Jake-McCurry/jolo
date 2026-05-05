import { useEffect } from "react";
import { SEO } from "@/components/ui/SEO";
import { ChevronRight } from "lucide-react";

const FOLLOW_UPS = [
  { label: "How do I know this is real?", href: "https://app.jesusonline.com/post/88421-how-do-i-know-this-is-real" },
  { label: "What do I do now?", href: "https://app.jesusonline.com/post/88422-what-do-i-do-now" },
  { label: "I want to know Jesus better.", href: "https://app.jesusonline.com/post/88423-i-want-to-know-jesus-more" },
  { label: "How should I handle my current relationships?", href: "https://app.jesusonline.com/post/88424-how-should-i-handle-my-current-relationships" },
  { label: "I'm afraid...", href: "https://app.jesusonline.com/post/88425-im-afraid" },
  { label: "I have questions about church.", href: "https://app.jesusonline.com/post/88426-i-have-questions-about-church" },
  { label: "More Questions?", href: "https://app.jesusonline.com/post/88427-more-questions" },
];

const DELAYS = ["d-300", "d-350", "d-400", "d-450", "d-500", "d-550", "d-600"];

export default function YesReceivedJesus() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const w = window as any;
      if (w.gtag) w.gtag("event", "conversion", { event_category: "funnel", event_label: "yes_received_jesus" });
      if (w.fbq) w.fbq("track", "Lead", { content_name: "yes_received_jesus" });
    }
  }, []);

  return (
    <>
      <SEO title="You Received Jesus!" description="You just invited Jesus into your life. Discover your next steps." path="/xp/yes-i-received-jesus" />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 py-5">
          <div className="fade-up d-200 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#e8f4ff] px-5 pt-4 pb-3 border-b border-blue-100">
              <p className="text-secondary font-semibold text-sm">
                Select the statement below that best matches your current thoughts and feelings —
              </p>
              <p className="text-gray-400 text-xs mt-0.5">You'll discover answers to your questions!</p>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-col gap-2">
                {FOLLOW_UPS.map((q, i) => (
                  <a
                    key={q.href}
                    href={q.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`fade-up ${DELAYS[i]} flex items-center justify-between gap-3 px-4 py-3 rounded-full border-2 border-gray-200 text-secondary font-semibold hover:border-primary hover:text-primary transition-colors text-sm`}
                    data-testid={`link-followup-${i}`}
                  >
                    <span>"{q.label}"</span>
                    <ChevronRight size={15} className="flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://app.jesusonline.com/find-what-you-want"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="link-explore-app"
            >
              Want More?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
