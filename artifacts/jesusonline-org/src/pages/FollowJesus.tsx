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

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Compass size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6">
              Follow Jesus
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Faith is a journey, not just a destination. Discover practical ways to deepen your relationship with God every day.
            </p>
          </motion.div>

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
                className="group block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                data-testid={`article-follow-${i}`}
              >
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {article.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
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
              href="https://jesusonline.com/follow-jesus/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-secondary font-bold rounded-full border-2 border-gray-200 hover:border-secondary transition-colors w-full sm:w-auto text-center"
              data-testid="btn-more-follow"
            >
              Explore More
            </a>
            <a 
              href="https://app.jesusonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-full btn-shadow hover:bg-blue-600 transition-colors w-full sm:w-auto text-center"
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
