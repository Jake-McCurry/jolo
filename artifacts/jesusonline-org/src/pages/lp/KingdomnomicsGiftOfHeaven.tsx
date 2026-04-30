import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
import { ChevronRight } from "lucide-react";

const SURVEY_OPTIONS = [
  {
    label: "No, I didn't pray the prayer.",
    href: "/xp/no-i-didnt-pray",
    variant: "outline" as const,
    testid: "survey-no-didnt-pray",
  },
  {
    label: "Yes, I prayed and received Jesus into my life.",
    href: "/xp/yes-i-received-jesus",
    variant: "primary" as const,
    testid: "survey-yes-received-jesus",
  },
  {
    label: "Yes, I prayed and rededicated my life to Jesus.",
    href: "/xp/yes-i-rededicated",
    variant: "primary" as const,
    testid: "survey-yes-rededicated",
  },
  {
    label: "No, I have already received Jesus in my life.",
    href: "/xp/no-already-received",
    variant: "outline" as const,
    testid: "survey-no-already-received",
  },
];

export default function KingdomnomicsGiftOfHeaven() {
  return (
    <>
      <SEO
        title="The Gift of Heaven — Kingdomnomics"
        description="Watch The Gift of Heaven and discover what God is offering you. A message from JesusOnline."
      />

      <div className="min-h-screen bg-[#E8EDEF] pt-20">
        {/* Page Header */}
        <div className="bg-secondary text-white py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest text-primary mb-3"
            >
              Kingdomnomics
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              The Gift of Heaven
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 text-lg max-w-xl mx-auto"
            >
              Watch the video below, then let us know where you are on your journey with God.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-4 py-12">
          {/* YouTube Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-lg overflow-hidden shadow-xl bg-secondary mb-10"
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

          {/* Survey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-8"
            data-testid="section-survey"
          >
            <h2 className="text-xl font-bold text-secondary text-center mb-2">
              After watching the video, please share your response below.
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">Select the statement that best describes where you are.</p>

            <div className="flex flex-col gap-4">
              {SURVEY_OPTIONS.map((option) => (
                <Link key={option.href} href={option.href}>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    data-testid={option.testid}
                    className={[
                      "w-full flex items-center justify-between gap-4 px-6 py-4 font-semibold text-left transition-all duration-200",
                      option.variant === "primary"
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white text-secondary border-2 border-secondary/20 hover:border-primary hover:text-primary",
                    ].join(" ")}
                  >
                    <span>{option.label}</span>
                    <ChevronRight size={20} className="flex-shrink-0" />
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Transcript Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-6 text-sm text-gray-500"
          >
            Prefer to read?{" "}
            <a
              href="https://apicontent.jesusonline.com/uncategorized/82010-t-kingdomnomics-the-gift-of-heaven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-testid="link-transcript"
            >
              Click here to read the video transcript
            </a>
          </motion.p>
        </div>
      </div>
    </>
  );
}
