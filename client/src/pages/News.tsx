import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNewsList } from "@/hooks/use-content";
import { PixelCard } from "@/components/PixelCard";
import { Calendar, User } from "lucide-react";

export default function News() {
  const { data: news, isLoading } = useNewsList();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-white mb-6 text-shadow-retro">
            NEWS & UPDATES
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read about the latest updates, events, and community announcements.
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-8 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-card/50 animate-pulse rounded border-2 border-border" />
            ))}
          </div>
        ) : (
          <div className="space-y-12 max-w-4xl mx-auto">
            {news?.map((post) => (
              <PixelCard key={post.id} className="p-8 md:p-10 group">
                <div className="flex flex-col md:flex-row gap-6 mb-6 text-sm text-muted-foreground font-mono uppercase tracking-widest border-b border-border/50 pb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-secondary" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-display text-white mb-6 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {post.imageUrl && (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded border-2 border-border mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                )}

                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                  {post.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </PixelCard>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
