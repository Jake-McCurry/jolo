import { SEO } from "@/components/ui/SEO";
import { BookOpen } from "lucide-react";

const LANGUAGES = [
  { label: "বাংলায় পড়ুন (Bengali)", href: "https://apicontent.jesusonline.com/uncategorized/89507-read-this-app-in-bengali" },
  { label: "اقرأ بالعربية (Arabic)", href: "https://apicontent.jesusonline.com/uncategorized/89505-read-this-app-in-arabic" },
  { label: "អានជាភាសាខ្មែរ (Khmer)", href: "https://apicontent.jesusonline.com/uncategorized/89559-read-this-app-in-khmer" },
  { label: "Baca dalam Bahasa Indonesia", href: "https://apicontent.jesusonline.com/uncategorized/89545-read-this-app-in-indonesian" },
  { label: "Other Languages", href: "https://app.jesusonline.com/series/286" },
];

const APP_LINKS = [
  { label: "Find What You Want", href: "https://app.jesusonline.com/find-what-you-want" },
  { label: "Select a Devotional Series", href: "https://app.jesusonline.com/category/2/21" },
  { label: "Read the NET Bible", href: "https://app.jesusonline.com/reader" },
  { label: "Discover Tips for Growth as a Believer", href: "https://app.jesusonline.com/series/277" },
];

export default function NoAlreadyReceived() {
  return (
    <>
      <SEO title="The Next 3 Steps" description="You're already part of God's family. Here are resources to help you grow." path="/xp/no-already-received" />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

          <div className="fade-up d-100 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-lg font-bold text-secondary mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Read this JO App in your language.
            </h2>
            <div className="flex flex-col gap-3">
              {LANGUAGES.map((lang) => (
                <a key={lang.href} href={lang.href} target="_blank" rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline text-sm flex items-center gap-2"
                  data-testid={`link-lang-${lang.label.split(" ")[0].toLowerCase()}`}>
                  <span>&gt;&gt;</span> {lang.label}
                </a>
              ))}
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
                  By inviting Jesus into your life, not only were you given Eternal life in Heaven but also spiritual resources for living here on earth now.
                </p>
                <a href="https://apicontent.jesusonline.com/books/60100-the-adventure-of-living-with-jesus-book"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm self-start" data-testid="link-read-book">
                  <BookOpen size={15} /> Read Book in App
                </a>
              </div>
            </div>
          </div>

          <div className="fade-up d-300 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-lg font-bold text-secondary mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Explore the JO Web App to find out what God offers you.
            </h2>
            <div className="flex flex-col gap-3">
              {APP_LINKS.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline text-sm flex items-center gap-2"
                  data-testid={`link-app-${link.label.split(" ")[0].toLowerCase()}`}>
                  <span>&gt;&gt;</span> {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
