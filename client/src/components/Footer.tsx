import { Github, Twitter, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t-4 border-primary/20 mt-20 relative overflow-hidden">
      {/* Decorative Mascot */}
      <div className="absolute top-1 right-10 img-backdrop-circle hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
        <img 
          src="/images/mascot.png" 
          alt="Mascot" 
          className="w-24 h-24 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="img-backdrop-circle">
                <img src="/images/planet.png" alt="Planet" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display text-primary">SPACEBOX</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate space-themed Minecraft adventure. Join thousands of players in an infinite galaxy of blocks.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/vote" className="hover:text-secondary transition-colors">Vote</Link></li>
              <li><Link href="/store" className="hover:text-secondary transition-colors">Store</Link></li>
              <li><Link href="/rules" className="hover:text-secondary transition-colors">Rules</Link></li>
              <li><Link href="/bans" className="hover:text-secondary transition-colors">Bans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background flex items-center justify-center border-2 border-border hover:border-secondary hover:text-secondary transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background flex items-center justify-center border-2 border-border hover:border-secondary hover:text-secondary transition-all">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background flex items-center justify-center border-2 border-border hover:border-secondary hover:text-secondary transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>&copy; 2024 Minebox Network. Not affiliated with Mojang AB.</p>
        </div>
      </div>
    </footer>
  );
}
