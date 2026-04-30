import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ExternalLink, Heart } from "lucide-react";

export default function ForeverLoved() {
  return (
    <>
      <SEO 
        title="Forever Loved" 
        description="Experience God's unconditional love for you."
      />

      <div className="pt-32 pb-20 bg-red-50/30 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-16 rounded-[32px] shadow-xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-red-50 opacity-50">
              <Heart size={200} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart size={32} fill="currentColor" />
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight mb-8 uppercase">
                Forever Loved!
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Do you ever feel like no one cares about you? Or maybe you feel unworthy of being loved because of the way that you are or something that you have done.
              </p>

              <div className="bg-slate-50 p-8 rounded-2xl mb-12 border border-slate-100">
                <h3 className="text-2xl font-bold text-secondary mb-4">God's Love is Unstoppable</h3>
                <p className="text-lg text-muted-foreground italic mb-4">
                  "Nothing shall be able to separate us from the love of God."
                </p>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">— Romans 8:38-39</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://jesusonline.com/forever-loved/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-secondary font-bold rounded-full border-2 border-gray-200 hover:border-secondary transition-colors w-full sm:w-auto text-center"
                  data-testid="btn-experience-love"
                >
                  Experience God's Love
                </a>
                <a 
                  href="https://app.jesusonline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-red-500 text-white font-bold rounded-full shadow-[0_7px_31px_0_rgba(239,68,68,0.4)] hover:bg-red-600 transition-colors w-full sm:w-auto text-center"
                  data-testid="btn-app-loved"
                >
                  Go Deeper in the App
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
