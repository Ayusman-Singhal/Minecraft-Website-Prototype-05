import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PixelButton } from "@/components/PixelButton";
import { PixelCard } from "@/components/PixelCard";
import { ServerStatus } from "@/components/ServerStatus";
import { useFeatures, useNewsList } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function Hero() {
  const { toast } = useToast();
  
  const handleCopyIP = () => {
    navigator.clipboard.writeText("play.spacebox.co");
    toast({
      title: "IP Copied!",
      description: "See you on the server!",
      className: "bg-primary text-white border-2 border-white/20 font-display",
    });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-primary/20 blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-64 md:h-64 bg-secondary/20 blur-[100px] md:blur-[120px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/images/ui_reference.png')] opacity-[0.03] bg-repeat mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center max-w-2xl mx-auto lg:mx-0 px-2"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-display text-[10px] md:text-xs tracking-wider">🚀 Join the Space Adventure!</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-white text-shadow-retro whitespace-normal break-words">
            EXPLORE THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">GALAXY</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join the ultimate space-themed Minecraft adventure. Build your base on alien planets, fight custom bosses, and dominate the economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <PixelButton size="lg" variant="secondary" onClick={handleCopyIP} className="group w-full sm:w-auto px-4 sm:px-8">
              <span className="flex items-center justify-center gap-2">
                <Copy size={18} /> play.spacebox.co
              </span>
            </PixelButton>
            <PixelButton size="lg" variant="primary" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth'})} className="w-full sm:w-auto px-4 sm:px-8">
              Explore Features
            </PixelButton>
          </div>

          <div className="pt-6 md:pt-8 flex justify-center lg:justify-start">
            <ServerStatus className="w-full max-w-md" />
          </div>
        </motion.div>

        {/* Hero Image */}
          <div className="img-backdrop p-6 rounded-xl flex justify-center">
            <motion.img 
              src="/images/glider_steve.png" 
              alt="Flying Steve" 
              className="max-w-[720px] w-full h-auto object-contain"
            />
          </div>
      </div>
    </section>
  );
}

function Features() {
  const { data: features, isLoading } = useFeatures();

  if (isLoading) return null;

  return (
    <section id="features" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display text-white text-shadow-glow">GAME MODES</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover unique ways to play in our custom coded universe.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features?.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PixelCard className="w-full max-w-sm h-full group hover:border-primary transition-colors text-center">
                <div className="aspect-video mb-6 bg-black/20 rounded border-2 border-border overflow-hidden relative">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-display text-secondary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {feature.ctaLink && (
                  <a href={feature.ctaLink} className="inline-flex items-center text-sm font-bold text-primary hover:text-white transition-colors">
                    {feature.ctaText || "Learn more"} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                )}
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsPreview() {
  const { data: news } = useNewsList();
  const latestNews = news?.slice(0, 3);

  return (
    <section className="py-24 bg-black/20 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-2">LATEST NEWS</h2>
            <p className="text-muted-foreground">Stay updated with server changelogs.</p>
          </div>
          <PixelButton variant="secondary" size="sm" onClick={() => window.location.href = '/news'}>
            View All
          </PixelButton>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {latestNews?.map((post) => (
            <div key={post.id} className="group cursor-pointer w-full">
              <div className="bg-card border-2 border-border p-4 h-full hover:-translate-y-1 transition-transform duration-200 w-full max-w-sm mx-auto text-center">
                <div className="text-xs font-mono text-primary mb-2">{post.date}</div>
                <h3 className="font-display text-lg text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <NewsPreview />
      <Footer />
    </div>
  );
}
