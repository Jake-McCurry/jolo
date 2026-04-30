import { motion } from "framer-motion";
import { useEffect } from "react";
import { SEO } from "@/components/ui/SEO";
import { ChevronRight } from "lucide-react";

const FOLLOW_UP_QUESTIONS = [
  { label: "How do I know this is real?", href: "https://apicontent.jesusonline.com/uncategorized/88421-how-do-i-know-this-is-real" },
  { label: "What do I do now?", href: "https://apicontent.jesusonline.com/uncategorized/88422-what-do-i-do-now" },
  { label: "I want to know Jesus better.", href: "https://apicontent.jesusonline.com/uncategorized/88423-i-want-to-know-jesus-more" },
  { label: "How should I handle my current relationships?", href: "https://apicontent.jesusonline.com/uncategorized/88424-how-should-i-handle-my-current-relationships" },
  { label: "I'm afraid...", href: "https://apicontent.jesusonline.com/uncategorized/88425-im-afraid" },
  { label: "I have questions about church.", href: "https://apicontent.jesusonline.com/uncategorized/88426-i-have-questions-about-church" },
  { label: "More Questions?", href: "https://apicontent.jesusonline.com/uncategorized/88427-more-questions" },
];

export default function YesReceivedJesus() {
  // Fire conversion event when this page loads
  useEffect(() => {
    // Google Analytics 4 conversion
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        event_category: "funnel",
        event_label: "yes_received_jesus",
      });
    }
    // Meta / Facebook Pixel conversion
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", { content_name: "yes_received_jesus" });
    }
  }, []);

  return (
    <>
      <SEO
        title="You Just Received Jesus!"
        description="Congratulations! You just invited Jesus into your life. Discover your next steps."
      />

      <div className="min-h-screen bg-[#E8EDEF] pt-20">
        {/* Celebration Header */}
        <div className="bg-secondary text-white py-14 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-bold uppercase tracking-widest mb-4"
            >
              A Life-Changing Moment
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight"
            >
              You just invited Jesus into your life to be your Lord and Savior!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/70 text-lg max-w-lg mx-auto"
            >
              This is the most important decision you will ever make. We're here to help you take your next steps.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto max-w-2xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-xl font-bold text-secondary mb-2">
              Select the statement that best matches your current thoughts and feelings —
            </h2>
            <p className="text-gray-500 text-sm mb-8">You'll discover answers to your questions!</p>

            <div className="flex flex-col gap-3">
              {FOLLOW_UP_QUESTIONS.map((q, i) => (
                <motion.a
                  key={q.href}
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between gap-4 px-6 py-4 bg-secondary text-white font-semibold hover:bg-secondary/80 transition-colors"
                  data-testid={`link-followup-${i}`}
                >
                  <span className="text-base">"{q.label}"</span>
                  <ChevronRight size={18} className="flex-shrink-0 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <a
              href="https://app.jesusonline.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold px-10 py-4 hover:bg-primary/90 transition-colors text-lg"
              data-testid="link-explore-app"
            >
              Explore Everything in the JesusOnline App
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
