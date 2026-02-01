import { pgTable, text, serial, boolean, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Content for the landing page
export const features = pgTable("features", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  ctaText: text("cta_text"),
  ctaLink: text("cta_link"),
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: text("date").notNull(),
  author: text("author").notNull(),
  imageUrl: text("image_url"),
});

export const serverStats = pgTable("server_stats", {
  id: serial("id").primaryKey(),
  onlinePlayers: integer("online_players").default(0),
  maxPlayers: integer("max_players").default(1000),
  serverStatus: text("server_status").default("online"), // online, maintenance, offline
});

export const insertFeatureSchema = createInsertSchema(features);
export const insertNewsSchema = createInsertSchema(news);
export const insertServerStatsSchema = createInsertSchema(serverStats);

export type Feature = typeof features.$inferSelect;
export type InsertFeature = z.infer<typeof insertFeatureSchema>;
export type NewsPost = typeof news.$inferSelect;
export type InsertNewsPost = z.infer<typeof insertNewsSchema>;
export type ServerStats = typeof serverStats.$inferSelect;
export type InsertServerStats = z.infer<typeof insertServerStatsSchema>;
