import { SEO } from "@/components/ui/SEO";
import { Download } from "lucide-react";

const BOOK_PDF = "https://jesusonline.com/wp-content/uploads/Adventure-of-Living-w-Jesus-161216.pdf";

const LANGUAGES = [
  { label: "বাংলায় পড়ুন (Bengali)", href: "https://apicontent.jesusonline.com/uncategorized/89507-read-this-app-in-bengali" },
  { label: "اقرأ بالعربية (Arabic)", href: "https://apicontent.jesusonline.com/uncategorized/89505-read-this-app-in-arabic" },
  { label: "អានជាភាសាខ្មែរ (Khmer)", href: "https://apicontent.jesusonline.com/uncategorized/89559-read-this-app-in-khmer" },
  { label: "Baca dalam Bahasa Indonesia", href: "https://apicontent.jesusonline.com/uncategorized/89545-read-this-app-in-indonesian" },
  { label: "Other Languages", href: "https://app.jesusonline.com/series/286" },
];

export default function NoAlreadyReceived() {
  return (
    <>
      <SEO title="The Next 3 Steps" description="You're already part of God's family. Here are resources to help you grow." path="/xp/no-already-received" />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 py-5 space-y-3">

          <div className="fade-up d-100 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#e8f4ff] px-5 pt-4 pb-3 flex items-center gap-3 border-b border-blue-100">
              <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-base font-bold text-secondary">Read this JO App in your language.</h2>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-col gap-2">
                {LANGUAGES.map((lang) => (
                  <a key={lang.href} href={lang.href} target="_blank" rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline text-sm flex items-center gap-2"
                    data-testid={`link-lang-${lang.label.split(" ")[0].toLowerCase()}`}>
                    <span>&gt;&gt;</span> {lang.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-up d-200 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#e8f4ff] px-5 pt-4 pb-3 flex items-center gap-3 border-b border-blue-100">
              <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-base font-bold text-secondary">Discover the immediate benefits of being a Child of God.</h2>
            </div>
            <div className="flex flex-row gap-5 px-5 pt-4 pb-3 items-start">
              <img
                src="https://apicontent.jesusonline.com/wp-content/uploads/2020/08/Adventure-of-Living-with-Jesus-791x1024.jpg"
                alt="The Adventure of Living with Jesus"
                className="w-28 rounded-lg shadow-md flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-secondary mb-1">The Adventure of Living with Jesus</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Inviting Jesus into your life, not only gives you eternal life in heaven but also spiritual resources for living here on earth.
                </p>
              </div>
            </div>
            <div className="px-5 pb-4 flex justify-center">
              <a href={BOOK_PDF} target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm" data-testid="link-read-book">
                <Download size={14} /> Download Book
              </a>
            </div>
          </div>

          <div className="fade-up d-300 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#e8f4ff] px-5 pt-4 pb-3 flex items-center gap-3 border-b border-blue-100">
              <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-base font-bold text-secondary">Find What You Want</h2>
            </div>
            <div className="px-5 py-4 flex justify-center">
              <a href="https://app.jesusonline.com/find-what-you-want" target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-block" data-testid="link-app-find">
                Explore Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
