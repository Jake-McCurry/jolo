import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { Heart } from "lucide-react";

export default function ForeverLoved() {
  return (
    <>
      <SEO 
        title="Forever Loved" 
        description="Experience God's unconditional love for you."
      />

      {/* Header Band */}
      <div className="bg-secondary pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-none flex items-center justify-center mx-auto mb-6">
              <Heart size={32} fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 uppercase">
              Forever Loved!
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
              Do you ever feel like no one cares about you? Or maybe you feel unworthy of being loved because of the way that you are or something that you have done.
            </p>

            <div className="bg-card p-10 rounded-lg mb-16 border border-white/5 shadow-xl text-left">
              <h3 className="text-2xl font-bold text-white mb-6">God's Love is Unstoppable</h3>
              <p className="text-xl text-white/80 italic mb-6 border-l-4 border-primary pl-6 py-2">
                "Nothing shall be able to separate us from the love of God."
              </p>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest pl-6">— Romans 8:38-39</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://jesusonline.com/forever-loved/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-primary font-bold rounded-none border-2 border-primary hover:bg-primary/10 transition-colors w-full sm:w-auto text-center"
                data-testid="btn-experience-love"
              >
                Experience God's Love
              </a>
              <a 
                href="https://app.jesusonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-bold rounded-none border-2 border-primary hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
                data-testid="btn-app-loved"
              >
                Go Deeper in the App
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
