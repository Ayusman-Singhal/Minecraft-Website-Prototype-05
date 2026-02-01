import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.features.list.path, async (req, res) => {
    const features = await storage.getFeatures();
    res.json(features);
  });

  app.get(api.news.list.path, async (req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  app.get(api.news.get.path, async (req, res) => {
    const post = await storage.getNewsPost(Number(req.params.id));
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  app.get(api.stats.get.path, async (req, res) => {
    let stats = await storage.getServerStats();
    if (!stats) {
      // Create default stats if none exist
      stats = await storage.updateServerStats({
        onlinePlayers: 3431,
        maxPlayers: 5000,
        serverStatus: "online"
      });
    }
    res.json(stats);
  });

  // Seed data function
  async function seedData() {
    const existingFeatures = await storage.getFeatures();
    if (existingFeatures.length === 0) {
      await storage.createFeature({
        title: "Community Maps",
        description: "Explore thousands of player-created worlds and challenges.",
        imageUrl: "/images/steve_enderchest.png",
        ctaText: "Explore Maps",
        ctaLink: "/maps"
      });
      await storage.createFeature({
        title: "Unlock Cosmetics",
        description: "Customize your character with unique skins, capes, and gliders.",
        imageUrl: "/images/chest_gold.png",
        ctaText: "View Shop",
        ctaLink: "/shop"
      });
      await storage.createFeature({
        title: "Ranked Analytics",
        description: "Track your PVP stats and climb the global leaderboards.",
        imageUrl: "/images/mascot.png",
        ctaText: "Check Stats",
        ctaLink: "/stats"
      });
    }

    const existingNews = await storage.getNews();
    if (existingNews.length === 0) {
      await storage.createNews({
        title: "Space Update v2.0 Released!",
        content: "We've added new planets, zero-gravity mechanics, and improved glider physics. Join now to experience the frontier!",
        date: "2024-10-24",
        author: "Admin"
      });
      await storage.createNews({
        title: "Community Tournament",
        content: "Sign up for the upcoming Spleef tournament. Top prize: 10,000 Galactic Coins.",
        date: "2024-10-20",
        author: "Moderator"
      });
    }
  }

  // Run seed
  seedData();

  return httpServer;
}
