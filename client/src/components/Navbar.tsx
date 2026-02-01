import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PixelButton } from "./PixelButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/news", label: "News" },
    { href: "/store", label: "Store" },
    { href: "/vote", label: "Vote" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b-4 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110 duration-200 img-backdrop-circle">
              <img 
                src="/images/planet.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display text-xl text-primary text-shadow-retro tracking-tighter">
              SPACEBOX
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={cn(
                "font-display text-xs uppercase tracking-widest hover:text-secondary transition-colors",
                location === link.href ? "text-secondary" : "text-muted-foreground"
              )}>
                {link.label}
              </Link>
            ))}
            <PixelButton size="sm" variant="accent" onClick={() => window.open('https://minecraft.net', '_blank')}>
              Play Now
            </PixelButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b-4 border-primary/20 p-6 absolute w-full animate-accordion-down shadow-2xl">
          <div className="flex flex-col space-y-6">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-display text-sm uppercase tracking-widest py-3 border-b border-white/5",
                  location === link.href ? "text-secondary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PixelButton className="w-full mt-4" variant="accent" size="lg" onClick={() => window.open('https://minecraft.net', '_blank')}>
              Play Now
            </PixelButton>
          </div>
        </div>
      )}
    </nav>
  );
}
