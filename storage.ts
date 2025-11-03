import { type PortfolioItem } from "@shared/schema";

export interface IStorage {
  getAllPortfolioItems(): Promise<PortfolioItem[]>;
}

export class MemStorage implements IStorage {
  private portfolioItems: PortfolioItem[];

  constructor() {
    this.portfolioItems = [
      {
        id: "1",
        title: "Artisan Coffee Co. Brand Identity",
        category: "branding",
        description: "Complete brand identity system for a specialty coffee roaster, including logo design, packaging, and brand guidelines.",
        image: "",
      },
      {
        id: "2",
        title: "Luxe Skincare Brand Package",
        category: "branding",
        description: "Elegant packaging design and visual identity for a premium skincare line focused on natural ingredients.",
        image: "",
      },
      {
        id: "3",
        title: "TechFlow Startup Branding",
        category: "branding",
        description: "Modern brand guidelines and visual system for a B2B SaaS startup in the tech industry.",
        image: "",
      },
      {
        id: "4",
        title: "Heritage Bakery Packaging",
        category: "branding",
        description: "Rustic packaging design with hand-drawn elements for an artisan bakery celebrating traditional recipes.",
        image: "",
      },
      {
        id: "5",
        title: "Fashion E-commerce Platform",
        category: "web-design",
        description: "Minimalist online store design with focus on product photography and seamless shopping experience.",
        image: "",
      },
      {
        id: "6",
        title: "FitTrack Mobile App",
        category: "web-design",
        description: "Vibrant fitness tracking app with intuitive workout logging and progress visualization features.",
        image: "",
      },
      {
        id: "7",
        title: "Fine Dining Restaurant Website",
        category: "web-design",
        description: "Elegant website design for upscale restaurant featuring beautiful food photography and online reservations.",
        image: "",
      },
      {
        id: "8",
        title: "CloudSync SaaS Dashboard",
        category: "web-design",
        description: "Clean, data-driven dashboard interface for cloud management platform with real-time analytics.",
        image: "",
      },
      {
        id: "9",
        title: "Business Growth Strategy",
        category: "strategy",
        description: "Comprehensive roadmap visualization for company expansion with clear milestones and KPIs.",
        image: "",
      },
      {
        id: "10",
        title: "Customer Journey Mapping",
        category: "strategy",
        description: "Detailed customer journey analysis and touchpoint optimization for improved user experience.",
        image: "",
      },
      {
        id: "11",
        title: "Data Analytics Framework",
        category: "strategy",
        description: "KPI dashboard strategy and data visualization framework for performance tracking.",
        image: "",
      },
      {
        id: "12",
        title: "Brand Positioning Analysis",
        category: "strategy",
        description: "Competitive positioning matrix and market differentiation strategy for brand development.",
        image: "",
      },
    ];
  }

  async getAllPortfolioItems(): Promise<PortfolioItem[]> {
    return this.portfolioItems;
  }
}

export const storage = new MemStorage();
