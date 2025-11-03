import { z } from "zod";

export const portfolioItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(["branding", "web-design", "strategy"]),
  description: z.string(),
  image: z.string(),
});

export type PortfolioItem = z.infer<typeof portfolioItemSchema>;

export const insertPortfolioItemSchema = portfolioItemSchema.omit({ id: true });
export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
