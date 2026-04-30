import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";

export default function DiscoverEvidence() {
  const articles = [
    {
      title: "Accident or Intelligent Design?",
      description: "Explore the fascinating debate between random chance and intelligent design in the origin of life.",
      url: "https://jesusonline.com/discover-evidence/god/accident-or-intelligent-design/"
    },
    {
      title: "Is Jesus God?",
      description: "C.S. Lewis famously argued that Jesus must be a lunatic, a liar, or Lord. Examine the claims.",
      url: "https://jesusonline.com/discover-evidence/jesus/is-jesus-god/"
    },
    {
      title: "Has Science Discovered God?",
      description: "How new discoveries in physics and cosmology have scientists increasingly using the 'God' word.",
      url: "https://jesusonline.com/discover-evidence/god/science-discovered-god/"
    },
    {
      title: "Did Jesus Rise from the Dead?",
      description: "Investigate the historical evidence surrounding the resurrection of Jesus Christ.",
      url: "https://jesusonline.com/discover-evidence/jesus/rise-from-dead/"
    }
  ];

  return (
    <>
      <SEO 
        title="Discover Evidence" 
        description="Examine the scientific and historical evidence for God and Jesus Christ."
      />

      {/* Header Band */}
      <div className="bg-secondary pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-none flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Discover Evidence
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Faith doesn't require checking your brain at the door. Examine the historical, logical, and scientific evidence for yourself.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-card p-8 rounded-lg border border-white/5 hover:bg-[#1a334d] transition-all"
                data-testid={`article-evidence-${i}`}
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/70 mb-8">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <div className="inline-block px-3 py-1 bg-[#3B82C4]/20 text-[#4A9ECC] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3B82C4]/30">
                    FACTS FOR FAITH
                  </div>
                  <div className="flex items-center text-primary font-semibold">
                    Read Article <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://jesusonline.com/discover-evidence/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-primary font-bold rounded-none border-2 border-primary hover:bg-primary/10 transition-colors w-full sm:w-auto text-center"
              data-testid="btn-more-evidence"
            >
              Explore More Evidence
            </a>
            <a 
              href="https://app.jesusonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-none border-2 border-primary hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
              data-testid="btn-app-evidence"
            >
              Go Deeper in the App
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
