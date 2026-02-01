import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PixelCard } from "@/components/PixelCard";
import { PixelButton } from "@/components/PixelButton";
import { useEffect, useState } from "react";

const OPTIONS = [
  { id: "o1", label: "New PvP Map" },
  { id: "o2", label: "Add Space Pets" },
  { id: "o3", label: "More Building Blocks" },
];

export default function Vote() {
  const [votes, setVotes] = useState<Record<string, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem("demo_votes") || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("demo_votes", JSON.stringify(votes));
  }, [votes]);

  const cast = (id: string) => {
    setVotes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display text-white mb-4">COMMUNITY VOTE</h1>
          <p className="text-muted-foreground mb-8">Help choose the next feature we prioritize. Votes are stored locally for demo purposes.</p>

          <PixelCard className="p-6 space-y-4">
            {OPTIONS.map((opt) => (
              <div key={opt.id} className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg text-white">{opt.label}</div>
                  <div className="text-sm text-muted-foreground">{(votes[opt.id] || 0)} votes</div>
                </div>
                <PixelButton variant="secondary" onClick={() => cast(opt.id)}>Vote</PixelButton>
              </div>
            ))}
          </PixelCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
