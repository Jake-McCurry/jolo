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
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-secondary text-sm font-bold tracking-wider uppercase mb-6">
              Welcome
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6 leading-tight">
              A Safe Place to <br className="hidden md:block" />
              <span className="text-primary">Explore Faith</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you are searching for answers, ready to begin a relationship with Jesus, or looking to grow deeper in your faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pathways */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={itemVars}>
              <Link href="/discover-evidence">
                <div className="group h-full p-8 rounded-[20px] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" data-testid="card-discover-evidence">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <Shield size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Discover Evidence</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">Examine the historical and scientific evidence for God and Jesus. Get answers to life's biggest questions.</p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Explore Evidence <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVars}>
              <Link href="/receive-jesus">
                <div className="group h-full p-8 rounded-[20px] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" data-testid="card-meet-jesus">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <Heart size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Meet Jesus</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">Learn about who Jesus claimed to be, His love for you, and how to begin a personal relationship with Him.</p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Begin the Journey <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVars}>
              <Link href="/follow-jesus">
                <div className="group h-full p-8 rounded-[20px] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" data-testid="card-follow-jesus">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <Users size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Follow Jesus</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">Find practical resources to help you grow in your faith, connect with others, and live a purposeful life.</p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Grow Deep <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grow in Faith Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Grow in Your Faith</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Specific resources for wherever you are in life right now.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/forever-loved">
              <div className="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer" data-testid="link-forever-loved">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Heart size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-secondary">Experience God's Love</h4>
                  <p className="text-sm text-muted-foreground">For when you feel unloved or unworthy.</p>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <Link href="/god-is-hope">
              <div className="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer" data-testid="link-god-is-hope">
                <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-secondary">Find Hope in Crisis</h4>
                  <p className="text-sm text-muted-foreground">When circumstances feel overwhelming.</p>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <a href="https://jesusonline.com/resources/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100" data-testid="link-external-resources">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-secondary">Explore Free Media</h4>
                <p className="text-sm text-muted-foreground">Articles, videos, and study guides.</p>
              </div>
              <ExternalLink size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
            </a>

            <a href="https://jesusonline.com/community/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100" data-testid="link-external-community">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-secondary">Join the Community</h4>
                <p className="text-sm text-muted-foreground">Connect with believers worldwide.</p>
              </div>
              <ExternalLink size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-secondary to-blue-900 rounded-[30px] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to go deeper?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Download the JesusOnline App for daily inspiration, structured journeys, and a personalized experience.
            </p>
            <a 
              href="https://app.jesusonline.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-full text-lg hover:bg-blue-600 transition-all btn-shadow hover:-translate-y-1"
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
