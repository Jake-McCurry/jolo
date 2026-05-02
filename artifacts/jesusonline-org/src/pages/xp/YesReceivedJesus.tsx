import { useEffect } from "react";
import { SEO } from "@/components/ui/SEO";
import { ChevronRight } from "lucide-react";

const FOLLOW_UPS = [
  { label: "How do I know this is real?", href: "https://apicontent.jesusonline.com/uncategorized/88421-how-do-i-know-this-is-real" },
  { label: "What do I do now?", href: "https://apicontent.jesusonline.com/uncategorized/88422-what-do-i-do-now" },
  { label: "I want to know Jesus better.", href: "https://apicontent.jesusonline.com/uncategorized/88423-i-want-to-know-jesus-more" },
  { label: "How should I handle my current relationships?", href: "https://apicontent.jesusonline.com/uncategorized/88424-how-should-i-handle-my-current-relationships" },
  { label: "I'm afraid...", href: "https://apicontent.jesusonline.com/uncategorized/88425-im-afraid" },
  { label: "I have questions about church.", href: "https://apicontent.jesusonline.com/uncategorized/88426-i-have-questions-about-church" },
  { label: "More Questions?", href: "https://apicontent.jesusonline.com/uncategorized/88427-more-questions" },
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
      <SEO title="You Received Jesus!" description="You just invited Jesus into your life. Discover your next steps." />

      <div className="min-h-screen bg-gray-50">
        <div className="text-white py-12 px-4 text-center" style={{ background: "linear-gradient(135deg, #063690 0%, #0095FF 100%)" }}>
          <p className="fade-in text-xs font-bold uppercase tracking-widest text-primary mb-3">
            A Life-Changing Moment
          </p>
          <h1 className="fade-up d-100 text-3xl md:text-4xl font-extrabold max-w-xl mx-auto">
            You Received Jesus into Your Life!
          </h1>
          <p className="fade-in d-250 text-white/70 mt-3 text-base max-w-md mx-auto">
            You just invited Jesus into your life to be your Lord and Savior!
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="fade-up d-200 bg-white rounded-xl shadow-md p-8">
            <p className="text-secondary font-semibold mb-1">
              Select the statement below that best matches your current thoughts and feelings —
            </p>
            <p className="text-gray-400 text-sm mb-7">You'll discover answers to your questions!</p>

            <div className="flex flex-col gap-3">
              {FOLLOW_UPS.map((q, i) => (
                <a
                  key={q.href}
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fade-up ${DELAYS[i]} flex items-center justify-between gap-3 px-5 py-4 rounded-full border-2 border-gray-200 text-secondary font-semibold hover:border-primary hover:text-primary transition-colors text-sm`}
                  data-testid={`link-followup-${i}`}
                >
                  <span>"{q.label}"</span>
                  <ChevronRight size={16} className="flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://app.jesusonline.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="link-explore-app"
            >
              Explore Everything in the JesusOnline App
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
