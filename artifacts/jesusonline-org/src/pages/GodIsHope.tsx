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

      <div className="pt-32 pb-20 bg-slate-900 min-h-screen text-slate-50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 font-mono tracking-widest mb-6 font-bold">
              #GODisHOPE
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Feeling hopeless?
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Whether it's financial pressures, broken relationships, political upheaval, or something else – the future looks dim. But God wants to lift you out of your depression and despair. He wants you to experience peace, confidence and joy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {pathways.map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 flex flex-col"
              >
                <p className="text-lg text-slate-200 mb-8 flex-1">
                  {path.title}
                </p>
                <a 
                  href={path.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-slate-700/50 rounded-xl hover:bg-primary hover:text-white transition-colors group"
                  data-testid={`btn-hope-${i}`}
                >
                  <span className="font-bold">{path.cta}</span>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-white transition-colors" />
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
              className="inline-flex items-center px-10 py-5 bg-white text-slate-900 font-bold rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-blue-50 hover:scale-105 transition-all"
              data-testid="btn-app-hope"
            >
              Go Deeper in the App <Sparkles size={20} className="ml-2 text-primary" />
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
