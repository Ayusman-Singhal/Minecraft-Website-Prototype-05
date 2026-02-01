import { Link } from "wouter";
import { PixelButton } from "@/components/PixelButton";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-8 max-w-lg">
        <div className="relative inline-block">
          <AlertTriangle className="w-24 h-24 text-destructive mx-auto animate-bounce" />
          <div className="absolute -inset-4 bg-destructive/20 blur-xl rounded-full z-[-1]" />
        </div>
        
        <h1 className="text-6xl font-display text-white text-shadow-retro">404</h1>
        
        <p className="text-xl text-muted-foreground font-mono">
          You've drifted too far into the void. This planet doesn't exist.
        </p>

        <Link href="/">
          <PixelButton size="lg" variant="primary">
            Return to Base
          </PixelButton>
        </Link>
      </div>
    </div>
  );
}
