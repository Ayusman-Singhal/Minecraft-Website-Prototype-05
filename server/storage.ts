import { db } from "./db";
import {
  features,
  news,
  serverStats,
  type Feature,
  type InsertFeature,
  type NewsPost,
  type InsertNewsPost,
  type ServerStats,
  type InsertServerStats
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getFeatures(): Promise<Feature[]>;
  createFeature(feature: InsertFeature): Promise<Feature>;
  
  getNews(): Promise<NewsPost[]>;
  getNewsPost(id: number): Promise<NewsPost | undefined>;
  createNews(post: InsertNewsPost): Promise<NewsPost>;
  
  getServerStats(): Promise<ServerStats | undefined>;
  updateServerStats(stats: InsertServerStats): Promise<ServerStats>;
}

export class DatabaseStorage implements IStorage {
  async getFeatures(): Promise<Feature[]> {
    return await db.select().from(features);
  }

  async createFeature(feature: InsertFeature): Promise<Feature> {
    const [newFeature] = await db.insert(features).values(feature).returning();
    return newFeature;
  }

  async getNews(): Promise<NewsPost[]> {
    return await db.select().from(news).orderBy(news.date); // In real app, real date field
  }

  async getNewsPost(id: number): Promise<NewsPost | undefined> {
    const [post] = await db.select().from(news).where(eq(news.id, id));
    return post;
  }

  async createNews(post: InsertNewsPost): Promise<NewsPost> {
    const [newPost] = await db.insert(news).values(post).returning();
    return newPost;
  }

  async getServerStats(): Promise<ServerStats | undefined> {
    const [stats] = await db.select().from(serverStats).limit(1);
    return stats;
  }

  async updateServerStats(stats: InsertServerStats): Promise<ServerStats> {
    // Upsert logic - if exists update, else insert
    const existing = await this.getServerStats();
    if (existing) {
      const [updated] = await db.update(serverStats)
        .set(stats)
        .where(eq(serverStats.id, existing.id))
        .returning();
      return updated;
    } else {
      const [inserted] = await db.insert(serverStats).values(stats).returning();
      return inserted;
    }
  }
}

export const storage = new DatabaseStorage();
