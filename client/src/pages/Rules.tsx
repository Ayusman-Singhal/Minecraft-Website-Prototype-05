import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PixelCard } from "@/components/PixelCard";

export default function Rules() {
  const rules = [
    { id: 1, title: "Be respectful", text: "No griefing, harassment, or hate speech. Treat others how you want to be treated." },
    { id: 2, title: "No cheating", text: "Client mods that alter gameplay unfairly (x-ray, speedhack) are prohibited." },
    { id: 3, title: "No advertising", text: "No unsolicited advertising or self-promotion in chat or builds without permission." },
    { id: 4, title: "Claim etiquette", text: "Respect other players' claimed land and read claim rules before building." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container px-4 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display text-white">Server Rules</h1>
          <p className="text-muted-foreground">These rules are enforced by staff. Breaking them may result in sanctions.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {rules.map((r) => (
            <PixelCard key={r.id} className="p-6">
              <h3 className="font-display text-xl text-white mb-2">{r.title}</h3>
              <p className="text-muted-foreground">{r.text}</p>
            </PixelCard>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
