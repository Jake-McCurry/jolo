import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ExternalLink, BookOpen, Compass } from "lucide-react";
import { useState } from "react";

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
      <SEO
        title="Tell Us Your Thoughts"
        description="Share your story and discover what God offers you through the JesusOnline App."
      />

      <div className="min-h-screen bg-[#E8EDEF] pt-20">
        {/* Page header */}
        <div className="bg-secondary text-white py-10 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              Thanks for watching
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 mt-3 text-lg"
            >
              We'd love to know where you are on your journey.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto max-w-2xl px-4 py-12 space-y-8">

          {/* Step 1 — Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-none bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-xl font-bold text-secondary">Tell us what you are thinking or feeling.</h2>
            </div>
            {!submitted ? (
              <>
                <textarea
                  rows={5}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Share your thoughts here..."
                  className="w-full border-2 border-gray-200 focus:border-primary outline-none rounded-sm p-4 text-gray-700 resize-none transition-colors"
                  data-testid="input-story"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!story.trim()}
                  className="mt-4 bg-primary text-white font-bold px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  data-testid="button-submit-story"
                >
                  Share Your Story
                </button>
              </>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-sm p-4 text-green-800 font-medium">
                Thank you for sharing. We're praying for you.
              </div>
            )}
          </motion.div>

          {/* Step 2 — Book */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary text-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-none bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-xl font-bold">Discover the immediate benefits of being a Child of God.</h2>
            </div>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              By inviting Jesus into your life, not only were you given eternal life in Heaven but also spiritual resources for living here on earth now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apicontent.jesusonline.com/books/60100-the-adventure-of-living-with-jesus-book"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 hover:bg-primary/90 transition-colors"
                data-testid="link-read-book-app"
              >
                <BookOpen size={16} />
                Read Book in App
              </a>
              <a
                href="https://jesusonline.com/wp-content/uploads/Adventure-of-Living-w-Jesus-161216.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-3 hover:border-primary hover:text-primary transition-colors"
                data-testid="link-download-pdf"
              >
                <ExternalLink size={16} />
                Download Book PDF
              </a>
            </div>
          </motion.div>

          {/* Step 3 — App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-none bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-xl font-bold text-secondary">Explore the JO Web App to find out what God offers you.</h2>
            </div>
            <div className="flex flex-col gap-3">
              {APP_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary font-semibold hover:underline text-sm"
                  data-testid={`link-app-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Compass size={15} className="flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
