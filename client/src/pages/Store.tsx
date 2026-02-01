import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PixelCard } from "@/components/PixelCard";
import { PixelButton } from "@/components/PixelButton";
import { storeItems } from "@/lib/mockData";

export default function Store() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">STORE</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Browse cosmetic items, ranks, and starter packs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {storeItems.map((item) => (
            <PixelCard key={item.id} className="p-4 flex flex-col">
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded border-2 border-border mb-4" />
              <h3 className="font-display text-lg text-white mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-primary">{item.currency} {item.price}</div>
                <PixelButton variant="accent" onClick={() => alert(`Purchased ${item.name} (demo)`)}>Buy</PixelButton>
              </div>
            </PixelCard>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
