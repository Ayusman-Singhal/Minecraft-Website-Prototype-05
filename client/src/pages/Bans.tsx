import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PixelCard } from "@/components/PixelCard";

export default function Bans() {
  const bans = [
    { id: 1, name: "cheater123", reason: "Using X-ray client", date: "2026-01-10" },
    { id: 2, name: "toxic_player", reason: "Harassment", date: "2026-01-18" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container px-4 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display text-white">Ban List (Demo)</h1>
          <p className="text-muted-foreground">Public ban list for demonstration — real servers may display limited info.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {bans.map((b) => (
            <PixelCard key={b.id} className="p-4 flex justify-between items-center">
              <div>
                <div className="font-display text-lg text-white">{b.name}</div>
                <div className="text-sm text-muted-foreground">{b.reason} — {b.date}</div>
              </div>
              <div className="text-sm text-muted-foreground">ID: {b.id}</div>
            </PixelCard>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
