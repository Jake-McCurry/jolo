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

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6">
              Discover Evidence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Faith doesn't require checking your brain at the door. Examine the historical, logical, and scientific evidence for yourself.
            </p>
          </motion.div>

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
                className="group block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                data-testid={`article-evidence-${i}`}
              >
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {article.description}
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Read Article <ExternalLink size={16} className="ml-2" />
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
              className="px-8 py-4 bg-white text-secondary font-bold rounded-full border-2 border-gray-200 hover:border-secondary transition-colors w-full sm:w-auto text-center"
              data-testid="btn-more-evidence"
            >
              Explore More Evidence
            </a>
            <a 
              href="https://app.jesusonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-full btn-shadow hover:bg-blue-600 transition-colors w-full sm:w-auto text-center"
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
