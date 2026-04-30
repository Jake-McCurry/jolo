import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";

const APP_LINKS = [
  { label: "Find What You Want", href: "https://app.jesusonline.com/find-what-you-want" },
  { label: "Select a Devotional Series", href: "https://app.jesusonline.com/category/2/21" },
  { label: "Read the NET Bible", href: "https://app.jesusonline.com/reader" },
  { label: "Discover Tips for Growth as a Believer", href: "https://app.jesusonline.com/series/277" },
];

export default function NoDidntPray() {
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO title="The Next 3 Steps" description="We're here for you. Share your thoughts and discover what God offers." />

      <div className="min-h-screen bg-gray-50">
        <div className="text-white py-12 px-4 text-center" style={{ background: "linear-gradient(135deg, #063690 0%, #0095FF 100%)" }}>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            The Next 3 Steps&hellip;
          </motion.h1>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-lg font-bold text-secondary mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Tell us what you are thinking or feeling.
            </h2>
            {!submitted ? (
              <>
                <textarea
                  rows={5}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Share your thoughts here..."
                  className="w-full border-2 border-gray-200 focus:border-primary outline-none rounded-lg p-4 text-gray-700 resize-none transition-colors text-sm"
                  data-testid="input-story"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!story.trim()}
                  className="mt-4 btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                  data-testid="button-submit-story"
                >
                  Share Your Story
                </button>
              </>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 font-semibold text-sm">
                Thank you for sharing. We're praying for you.
              </div>
            )}
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-lg font-bold text-secondary mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              Discover the immediate benefits of being a Child of God.
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              By inviting Jesus into your life, not only were you given Eternal life in Heaven but also spiritual resources for living here on earth now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apicontent.jesusonline.com/books/60100-the-adventure-of-living-with-jesus-book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
                data-testid="link-read-book"
              >
                <BookOpen size={15} /> Read Book in App
              </a>
              <a
                href="https://jesusonline.com/wp-content/uploads/Adventure-of-Living-w-Jesus-161216.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-primary text-primary font-bold px-5 py-3 rounded-full hover:bg-primary hover:text-white transition-colors text-sm"
                data-testid="link-download-pdf"
              >
                <ExternalLink size={15} /> Download Book PDF
              </a>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-lg font-bold text-secondary mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Explore the JO Web App to find out what God offers you.
            </h2>
            <div className="flex flex-col gap-3">
              {APP_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline text-sm flex items-center gap-2"
                  data-testid={`link-app-${link.label.split(" ")[0].toLowerCase()}`}
                >
                  <span className="text-primary">&gt;&gt;</span> {link.label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
