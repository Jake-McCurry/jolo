import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ExternalLink, HeartHandshake } from "lucide-react";

export default function ReceiveJesus() {
  const articles = [
    {
      title: "Why Jesus?",
      description: "Christ claimed to answer life's biggest questions. See why He is still relevant today.",
      url: "https://jesusonline.com/receive-jesus/relevant-today/"
    },
    {
      title: "God Loves You",
      description: "The very God who created the universe desires a personal, intimate relationship with you.",
      url: "https://jesusonline.com/receive-jesus/gods-love/"
    },
    {
      title: "Purpose for Life",
      description: "Why do you exist? What is the true purpose for your life? Find the meaning you were created for.",
      url: "https://jesusonline.com/receive-jesus/purpose/"
    },
    {
      title: "Begin the Relationship",
      description: "Ready to take the step? Here is how you can begin a relationship with Jesus today.",
      url: "https://jesusonline.com/begin/"
    }
  ];

  return (
    <>
      <SEO 
        title="Meet Jesus" 
        description="Learn about who Jesus claimed to be, His love for you, and how to begin a relationship."
      />

      {/* Header Band */}
      <div className="bg-secondary pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-none flex items-center justify-center mx-auto mb-6">
              <HeartHandshake size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Meet Jesus
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              More than a historical figure or a moral teacher. Discover the person who changed history and wants to change your life.
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
                data-testid={`article-meet-${i}`}
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/70 mb-8">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <div className="inline-block px-3 py-1 bg-[#3B82C4]/20 text-[#4A9ECC] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3B82C4]/30">
                    PERSONAL GROWTH
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
              href="https://jesusonline.com/receive-jesus/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-primary font-bold rounded-none border-2 border-primary hover:bg-primary/10 transition-colors w-full sm:w-auto text-center"
              data-testid="btn-more-meet"
            >
              Explore More
            </a>
            <a 
              href="https://app.jesusonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-none border-2 border-primary hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
              data-testid="btn-app-meet"
            >
              Go Deeper in the App
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
