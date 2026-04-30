import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ExternalLink, Sparkles } from "lucide-react";

export default function GodIsHope() {
  const pathways = [
    {
      title: "If you need hope, it begins with a personal relationship with God.",
      cta: "Begin Here",
      url: "https://jesusonline.com/god-is-hope/hope-begins/"
    },
    {
      title: "If you're overwhelmed by circumstances, God wants to help you.",
      cta: "Discover Now",
      url: "https://jesusonline.com/god-is-hope/discover-promises/"
    },
    {
      title: "If you want to help reach others with God's message of hope.",
      cta: "Send Hope",
      url: "https://jesusonline.com/god-is-hope/send-hope/"
    }
  ];

  return (
    <>
      <SEO 
        title="God Is Hope" 
        description="Find hope in times of crisis and despair."
      />

      {/* Header Band */}
      <div className="bg-secondary pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block py-1 px-4 bg-[#3B82C4]/20 border border-[#3B82C4]/30 text-[#4A9ECC] font-mono tracking-widest mb-6 font-bold text-sm">
              #GODisHOPE
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Feeling hopeless?
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Whether it's financial pressures, broken relationships, political upheaval, or something else – the future looks dim. But God wants to lift you out of your depression and despair. He wants you to experience peace, confidence and joy.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {pathways.map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card p-8 rounded-lg border border-white/5 flex flex-col hover:bg-[#1a334d] transition-colors"
              >
                <p className="text-lg text-white/90 mb-8 flex-1 font-medium">
                  {path.title}
                </p>
                <a 
                  href={path.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-secondary border border-white/5 rounded-none hover:bg-primary/20 hover:border-primary/50 transition-colors group"
                  data-testid={`btn-hope-${i}`}
                >
                  <span className="font-bold text-white group-hover:text-primary">{path.cta}</span>
                  <ExternalLink size={18} className="text-white/50 group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a 
              href="https://app.jesusonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-primary text-white font-bold rounded-none text-lg border-2 border-primary hover:bg-primary/90 transition-all"
              data-testid="btn-app-hope"
            >
              Go Deeper in the App <Sparkles size={20} className="ml-2" />
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
