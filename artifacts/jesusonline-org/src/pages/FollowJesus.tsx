import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ExternalLink, Compass } from "lucide-react";

export default function FollowJesus() {
  const articles = [
    {
      title: "Why Grow?",
      description: "Discover why Christian growth is so vital to your spiritual health and experiencing abundant life.",
      url: "https://jesusonline.com/follow-jesus/why-grow/"
    },
    {
      title: "Connecting with God's Family",
      description: "When you invited Jesus into your life, you became part of God's global family. Learn how to connect.",
      url: "https://jesusonline.com/follow-jesus/living-for-jesus/connecting/"
    },
    {
      title: "Abiding in Christ",
      description: "An exciting adventure begins when you receive Jesus. Learn what it means to truly abide in Him daily.",
      url: "https://jesusonline.com/follow-jesus/living-for-jesus/abiding/"
    }
  ];

  return (
    <>
      <SEO 
        title="Follow Jesus" 
        description="Find resources to help you grow in your faith, connect with others, and live with purpose."
      />

      {/* Header Band */}
      <div className="bg-secondary pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-none flex items-center justify-center mx-auto mb-6">
              <Compass size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Follow Jesus
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Faith is a journey, not just a destination. Discover practical ways to deepen your relationship with God every day.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                data-testid={`article-follow-${i}`}
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/70 mb-8 text-sm">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <div className="inline-block px-3 py-1 bg-[#3B82C4]/20 text-[#4A9ECC] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3B82C4]/30">
                    PERSONAL GROWTH
                  </div>
                  <div className="flex items-center text-primary font-semibold text-sm">
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
              href="https://jesusonline.com/follow-jesus/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-primary font-bold rounded-none border-2 border-primary hover:bg-primary/10 transition-colors w-full sm:w-auto text-center"
              data-testid="btn-more-follow"
            >
              Explore More
            </a>
            <a 
              href="https://app.jesusonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-none border-2 border-primary hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
              data-testid="btn-app-follow"
            >
              Go Deeper in the App
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
