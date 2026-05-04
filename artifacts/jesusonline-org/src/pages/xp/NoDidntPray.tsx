import { SEO } from "@/components/ui/SEO";
import { Download } from "lucide-react";

const STORY_URL = "https://jesusonline.com/comment-jolo-gift/";
const BOOK_PDF = "https://jesusonline.com/wp-content/uploads/Adventure-of-Living-w-Jesus-161216.pdf";

const APP_LINKS = [
  { label: "Find What You Want", href: "https://app.jesusonline.com/find-what-you-want" },
  { label: "Select a Devotional Series", href: "https://app.jesusonline.com/category/2/21" },
  { label: "Read the NET Bible", href: "https://app.jesusonline.com/reader" },
  { label: "Discover Tips for Growth as a Believer", href: "https://app.jesusonline.com/series/277" },
];

export default function NoDidntPray() {
  return (
    <>
      <SEO title="The Next 3 Steps" description="We're here for you. Share your thoughts and discover what God offers." path="/xp/no-i-didnt-pray" />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

          <div className="fade-up d-100 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#e8f4ff] px-8 pt-6 pb-4 flex items-center gap-3 border-b border-blue-100">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-lg font-bold text-secondary">Tell us what you are thinking or feeling.</h2>
            </div>
            <div className="p-8">
              <a
                href={STORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
                data-testid="button-submit-story"
              >
                Share Your Story
              </a>
            </div>
          </div>

          <div className="fade-up d-200 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#e8f4ff] px-8 pt-6 pb-4 flex items-center gap-3 border-b border-blue-100">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-lg font-bold text-secondary">Discover the immediate benefits of being a Child of God.</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 p-8 items-center sm:items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://apicontent.jesusonline.com/wp-content/uploads/2020/08/Adventure-of-Living-with-Jesus-791x1024.jpg"
                  alt="The Adventure of Living with Jesus"
                  className="w-44 rounded-xl shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-semibold text-secondary mb-1">The Adventure of Living with Jesus</p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Inviting Jesus into your life, not only gives you eternal life in heaven but also spiritual resources for living here on earth.
                </p>
                <a
                  href={BOOK_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm self-start"
                  data-testid="link-read-book"
                >
                  <Download size={15} /> Download Book
                </a>
              </div>
            </div>
          </div>

          <div className="fade-up d-300 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#e8f4ff] px-8 pt-6 pb-4 flex items-center gap-3 border-b border-blue-100">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-lg font-bold text-secondary">Explore the JO Web App to find out what God offers you.</h2>
            </div>
            <div className="p-8">
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
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
