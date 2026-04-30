import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { ArrowRight, BookOpen, Heart, Users, Shield, Sparkles, ExternalLink } from "lucide-react";

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <SEO 
        title="Examining the Evidence. Growing in Faith." 
        description="Discover evidence for God, meet Jesus, and grow in your faith journey."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-[#241332] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 bg-white/10 text-white text-sm font-bold tracking-wider uppercase mb-6 border border-white/20">
              Welcome
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              A Safe Place to <br className="hidden md:block" />
              <span className="text-primary">Explore Faith</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you are searching for answers, ready to begin a relationship with Jesus, or looking to grow deeper in your faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pathways */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Where are you on your journey?</h2>
          </div>
          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={itemVars} className="flex h-full">
              <Link href="/discover-evidence" className="flex-1 block h-full">
                <div className="group h-full p-8 rounded-lg bg-card border border-white/5 hover:bg-[#1a334d] transition-all duration-300 flex flex-col" data-testid="card-discover-evidence">
                  <div className="w-14 h-14 rounded-none bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 text-primary group-hover:text-white">
                    <Shield size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Discover Evidence</h3>
                  <p className="text-white/70 mb-8 line-clamp-3">Examine the historical and scientific evidence for God and Jesus. Get answers to life's biggest questions.</p>
                  
                  <div className="mt-auto">
                    <div className="inline-block px-3 py-1 bg-[#3B82C4]/20 text-[#4A9ECC] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3B82C4]/30">
                      Facts for Faith
                    </div>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Explore Evidence <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVars} className="flex h-full">
              <Link href="/receive-jesus" className="flex-1 block h-full">
                <div className="group h-full p-8 rounded-lg bg-card border border-white/5 hover:bg-[#1a334d] transition-all duration-300 flex flex-col" data-testid="card-meet-jesus">
                  <div className="w-14 h-14 rounded-none bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 text-primary group-hover:text-white">
                    <Heart size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Meet Jesus</h3>
                  <p className="text-white/70 mb-8 line-clamp-3">Learn about who Jesus claimed to be, His love for you, and how to begin a personal relationship with Him.</p>
                  
                  <div className="mt-auto">
                    <div className="inline-block px-3 py-1 bg-[#3B82C4]/20 text-[#4A9ECC] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3B82C4]/30">
                      Personal Growth
                    </div>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Begin the Journey <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVars} className="flex h-full">
              <Link href="/follow-jesus" className="flex-1 block h-full">
                <div className="group h-full p-8 rounded-lg bg-card border border-white/5 hover:bg-[#1a334d] transition-all duration-300 flex flex-col" data-testid="card-follow-jesus">
                  <div className="w-14 h-14 rounded-none bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 text-primary group-hover:text-white">
                    <Users size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Follow Jesus</h3>
                  <p className="text-white/70 mb-8 line-clamp-3">Find practical resources to help you grow in your faith, connect with others, and live a purposeful life.</p>
                  
                  <div className="mt-auto">
                    <div className="inline-block px-3 py-1 bg-[#3B82C4]/20 text-[#4A9ECC] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3B82C4]/30">
                      Personal Growth
                    </div>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Grow Deep <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grow in Faith Section */}
      <section className="py-24 bg-[#E8EDEF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Grow in Your Faith</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Specific resources for wherever you are in life right now.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/forever-loved" className="block">
              <div className="group flex items-center p-6 bg-card rounded-lg hover:bg-[#1a334d] transition-all border border-white/5 cursor-pointer" data-testid="link-forever-loved">
                <div className="w-12 h-12 rounded-none bg-primary/20 text-primary flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Heart size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">Experience God's Love</h4>
                  <p className="text-sm text-white/70">For when you feel unloved or unworthy.</p>
                </div>
                <ArrowRight size={20} className="text-white/30 group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <Link href="/god-is-hope" className="block">
              <div className="group flex items-center p-6 bg-card rounded-lg hover:bg-[#1a334d] transition-all border border-white/5 cursor-pointer" data-testid="link-god-is-hope">
                <div className="w-12 h-12 rounded-none bg-primary/20 text-primary flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Sparkles size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">Find Hope in Crisis</h4>
                  <p className="text-sm text-white/70">When circumstances feel overwhelming.</p>
                </div>
                <ArrowRight size={20} className="text-white/30 group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <a href="https://jesusonline.com/resources/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-6 bg-card rounded-lg hover:bg-[#1a334d] transition-all border border-white/5" data-testid="link-external-resources">
              <div className="w-12 h-12 rounded-none bg-primary/20 text-primary flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white">Explore Free Media</h4>
                <p className="text-sm text-white/70">Articles, videos, and study guides.</p>
              </div>
              <ExternalLink size={20} className="text-white/30 group-hover:text-primary transition-colors" />
            </a>

            <a href="https://jesusonline.com/community/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-6 bg-card rounded-lg hover:bg-[#1a334d] transition-all border border-white/5" data-testid="link-external-community">
              <div className="w-12 h-12 rounded-none bg-primary/20 text-primary flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white">Join the Community</h4>
                <p className="text-sm text-white/70">Connect with believers worldwide.</p>
              </div>
              <ExternalLink size={20} className="text-white/30 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to go deeper?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Download the JesusOnline App for daily inspiration, structured journeys, and a personalized experience.
            </p>
            <a 
              href="https://app.jesusonline.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-none text-lg hover:bg-primary/90 transition-all border-2 border-primary"
              data-testid="cta-app-home"
            >
              Explore the App <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
