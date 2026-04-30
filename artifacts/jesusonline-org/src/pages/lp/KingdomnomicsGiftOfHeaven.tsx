import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
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

export default function KingdomnomicsGiftOfHeaven() {
  return (
    <>
      <SEO
        title="The Gift of Heaven"
        description="Watch The Gift of Heaven and let us know where you are on your journey with God."
      />

      <div className="min-h-screen bg-gray-50">
        {/* Page title band */}
        <div
          className="text-white py-12 px-4 text-center"
          style={{ background: "linear-gradient(135deg, #063690 0%, #0095FF 100%)" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            The Gift of Heaven
          </motion.h1>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-10">

          {/* YouTube embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 mb-8"
            style={{ aspectRatio: "16/9" }}
            data-testid="video-gift-of-heaven"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XB7wGTnYeaE?rel=0&modestbranding=1"
              title="The Gift of Heaven — JesusOnline"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Survey */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-8"
            data-testid="section-survey"
          >
            <p className="text-center text-secondary font-bold text-lg mb-1">
              After watching the video, please share your response below.
            </p>
            <p className="text-center text-gray-400 text-sm mb-7">Select the statement that describes you.</p>

            <div className="flex flex-col gap-3">
              {SURVEY_OPTIONS.map((opt, i) => (
                <motion.div
                  key={opt.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                >
                  <Link href={opt.href}>
                    <button
                      data-testid={opt.testid}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-full font-semibold text-left transition-all duration-200 bg-white text-secondary border-2 border-gray-200 hover:border-primary hover:text-primary"
                    >
                      <span>{opt.label}</span>
                      <ChevronRight size={18} className="flex-shrink-0" />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transcript */}
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
