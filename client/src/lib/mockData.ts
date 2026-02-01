export const features = [
  {
    id: 1,
    title: "Loot Mania",
    description: "Chests are scattered across different planets scramble to find rare gear, open mystery crates, and dominate the loot tables.",
    imageUrl: "/images/chest_gold.png",
    ctaLink: "#",
    ctaText: "Hunt",
  },
  {
    id: 2,
    title: "Ender Expedition",
    description: "Discover hidden Ender chests guarded across alien biomes — fight guardians and claim rare, enchanted loot.",
    imageUrl: "/images/steve_enderchest.png",
    ctaLink: "#",
    ctaText: "Explore",
  },
  {
    id: 3,
    title: "Glider Survival",
    description: "Explore vast worlds using your glider  glide between islands, avoid hazards, and master aerial survival mechanics.",
    imageUrl: "/images/glider_steve.png",
    ctaLink: "#",
    ctaText: "Play",
  }
];

export const news = [
  {
    id: 101,
    title: "Season 5 Launch  New Maps & Quests",
    date: "2026-01-20",
    author: "Admin",
    imageUrl: "/images/features_ref.png",
    content:
      "Season 5 is live! Explore three new biomes, discover hidden dungeons, and earn limited-time rewards.",
  },
  {
    id: 102,
    title: "Maintenance Completed  Performance Improvements",
    date: "2026-01-12",
    author: "Ops Team",
    imageUrl: "/images/mascot.png",
    content:
      "We've rolled out server-side optimizations and reduced world load times by up to 40%.",
  },
  {
    id: 103,
    title: "Community Build Contest Winners",
    date: "2025-12-30",
    author: "Community",
    imageUrl: "/images/steve_enderchest.png",
    content:
      "Congratulations to the winners of the winter build contest  check out their amazing space stations!",
  },
];

export const storeItems = [
  {
    id: "s1",
    name: "Starter Pack",
    description: "A bundle of resources to get you started on any planet.",
    price: 5.99,
    currency: "USD",
    imageUrl: "/images/chest_gold.png",
  },
  {
    id: "s2",
    name: "Buddy Pack",
    description: "Unlock a special pet companion to join you on your adventures.",
    price: 14.99,
    currency: "USD",
    imageUrl: "/images/mascot.png",
  },
  {
    id: "s3",
    name: "Cosmetic Glider",
    description: "A unique glider skin that leaves a star trail.",
    price: 3.99,
    currency: "USD",
    imageUrl: "/images/glider_steve.png",
  },
  {
    id: "s4",
    name: "Mystery Crate",
    description: "Contains random cosmetic items and a chance for rare loot.",
    price: 7.5,
    currency: "USD",
    imageUrl: "/images/steve_enderchest.png",
  },
];

export function getNewsItem(id: number) {
  return news.find((n) => n.id === id) ?? null;
}

export const serverStats = {
  onlinePlayers: 3431,
  maxPlayers: 5000,
  serverStatus: "online",
  motd: "Welcome to Spacebox  Season 5",
  version: "1.18.2-custom",
};

export default { features, news, getNewsItem, serverStats, storeItems };
