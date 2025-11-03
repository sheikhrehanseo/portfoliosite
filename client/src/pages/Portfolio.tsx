import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PortfolioItem } from "@shared/schema";
import { 
  ArrowDown, 
  ArrowUp, 
  Menu, 
  X, 
  Palette, 
  Code, 
  TrendingUp, 
  Lightbulb,
  Linkedin,
  Github,
  FolderOpen
} from "lucide-react";
import { SiBehance, SiDribbble } from "react-icons/si";

import profileImage from "@assets/generated_images/Professional_creative_headshot_e854e40a.png";
import coffeeImg from "@assets/generated_images/Coffee_brand_logo_design_8098dc69.png";
import skincareImg from "@assets/generated_images/Luxury_skincare_branding_1af5a5fb.png";
import techStartupImg from "@assets/generated_images/Tech_startup_brand_guidelines_3df4a30b.png";
import bakeryImg from "@assets/generated_images/Artisan_bakery_packaging_63836ef8.png";
import fashionImg from "@assets/generated_images/Fashion_e-commerce_website_7ee84fae.png";
import fitnessImg from "@assets/generated_images/Fitness_mobile_app_design_1fb91c9b.png";
import restaurantImg from "@assets/generated_images/Restaurant_website_design_1b194c57.png";
import saasImg from "@assets/generated_images/SaaS_dashboard_interface_5407236f.png";
import growthImg from "@assets/generated_images/Business_growth_strategy_infographic_c8f3a4bc.png";
import marketingImg from "@assets/generated_images/Marketing_strategy_diagram_e3f45c3e.png";
import analyticsImg from "@assets/generated_images/Data_analytics_strategy_visual_967dddbd.png";
import positioningImg from "@assets/generated_images/Brand_positioning_matrix_f6b17729.png";

const imageMap: Record<string, string> = {
  "1": coffeeImg,
  "2": skincareImg,
  "3": techStartupImg,
  "4": bakeryImg,
  "5": fashionImg,
  "6": fitnessImg,
  "7": restaurantImg,
  "8": saasImg,
  "9": growthImg,
  "10": marketingImg,
  "11": analyticsImg,
  "12": positioningImg,
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection onViewWork={() => scrollToSection("portfolio")} />
      <AboutSection />
      <PortfolioGallery />
      <ContactSection />
      <Footer onBackToTop={() => scrollToSection("home")} />
    </div>
  );
}

function Navigation({ activeSection, onNavigate }: { activeSection: string; onNavigate: (id: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-transform"
            data-testid="link-home"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all hover-elevate active-elevate-2 ${
                  activeSection === item.id ? "font-semibold" : ""
                }`}
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden hover-elevate active-elevate-2 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-scale">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-left hover-elevate active-elevate-2 ${
                    activeSection === item.id ? "font-semibold" : ""
                  }`}
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection({ onViewWork }: { onViewWork: () => void }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
          Creative Designer
          <br />
          <span className="text-primary">& Strategist</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-subtitle">
          Crafting meaningful brand experiences through thoughtful design and strategic thinking
        </p>

        <Button
          size="lg"
          onClick={onViewWork}
          className="text-base sm:text-lg px-8 py-6 rounded-md"
          data-testid="button-view-work"
        >
          View My Work
          <ArrowDown className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

function AboutSection() {
  const skills = [
    "Brand Identity",
    "UI/UX Design",
    "Strategic Planning",
    "Visual Design",
    "Prototyping",
    "User Research",
    "Design Systems",
    "Creative Direction"
  ];

  const services = [
    { icon: Palette, title: "Design", description: "Visual identity & interfaces" },
    { icon: Code, title: "Development", description: "Web & mobile applications" },
    { icon: TrendingUp, title: "Strategy", description: "Business & brand planning" },
    { icon: Lightbulb, title: "Consulting", description: "Creative problem solving" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-center" data-testid="text-about-title">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <img
              src={profileImage}
              alt="Professional headshot"
              className="w-64 h-64 rounded-md object-cover shadow-lg"
              data-testid="img-profile"
            />
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-lg leading-relaxed" data-testid="text-bio-1">
              I'm a multidisciplinary designer and strategist with a passion for creating impactful brand experiences. 
              With over 8 years of experience, I help businesses tell their stories through thoughtful design and strategic thinking.
            </p>
            <p className="text-lg leading-relaxed" data-testid="text-bio-2">
              My approach combines creative exploration with data-driven insights, ensuring that every project not only 
              looks beautiful but also achieves meaningful business results.
            </p>
            <p className="text-lg leading-relaxed" data-testid="text-bio-3">
              When I'm not designing, you'll find me exploring new coffee shops, sketching ideas in my notebook, 
              or mentoring aspiring designers in the creative community.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6" data-testid="text-skills-title">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm" data-testid={`badge-skill-${index}`}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-8" data-testid="text-services-title">What I Offer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center" data-testid={`service-${index}`}>
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-md bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [displayedItems, setDisplayedItems] = useState<PortfolioItem[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const { data: portfolioItems = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  useEffect(() => {
    if (portfolioItems.length > 0 && displayedItems.length === 0) {
      setDisplayedItems(portfolioItems);
    }
  }, [portfolioItems, displayedItems.length]);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "web-design", label: "Web Design" },
    { id: "strategy", label: "Strategy" },
  ];

  const handleFilterChange = (filterId: string) => {
    if (filterId === activeFilter || isAnimating) return;

    setIsAnimating(true);
    setActiveFilter(filterId);

    setTimeout(() => {
      const filtered = filterId === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filterId);
      setDisplayedItems(filtered);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }, 200);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-center" data-testid="text-portfolio-title">
          Selected Work
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
          A collection of projects showcasing my expertise in branding, digital design, and strategic planning
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => handleFilterChange(filter.id)}
              className={`text-sm font-medium uppercase tracking-wide ${
                activeFilter === filter.id ? "font-semibold" : ""
              }`}
              data-testid={`button-filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-md aspect-[16/10] mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item, index) => (
              <PortfolioCard 
                key={item.id} 
                item={item} 
                index={index} 
                isAnimating={isAnimating}
              />
            ))}
          </div>
        )}

        {!isLoading && displayedItems.length === 0 && (
          <div className="text-center py-20" data-testid="text-no-items">
            <FolderOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}

function PortfolioCard({ 
  item, 
  index, 
  isAnimating 
}: { 
  item: PortfolioItem; 
  index: number; 
  isAnimating: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group cursor-pointer transition-all duration-300 ${
        isAnimating 
          ? 'opacity-0 scale-95' 
          : 'opacity-100 scale-100 animate-fade-in-scale'
      }`}
      style={{ 
        animationDelay: isAnimating ? '0ms' : `${(index % 3) * 100}ms`,
        transitionDelay: isAnimating ? '0ms' : `${(index % 3) * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-portfolio-${item.id}`}
    >
      <div className="relative overflow-hidden rounded-md aspect-[16/10] mb-4 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
        <img
          src={imageMap[item.id]}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {item.category === "web-design" ? "Web Design" : item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </Badge>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2" data-testid={`text-title-${item.id}`}>{item.title}</h3>
      <p className="text-sm text-muted-foreground" data-testid={`text-description-${item.id}`}>{item.description}</p>
    </div>
  );
}

function ContactSection() {
  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: SiBehance, url: "https://behance.net", label: "Behance" },
    { icon: SiDribbble, url: "https://dribbble.com", label: "Dribbble" },
    { icon: Github, url: "https://github.com", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6" data-testid="text-contact-title">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12" data-testid="text-contact-subtitle">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        <a
          href="mailto:hello@portfolio.com"
          className="inline-block text-2xl sm:text-3xl font-semibold mb-12 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all hover:text-primary"
          data-testid="link-email"
        >
          hello@portfolio.com
        </a>

        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-md bg-muted hover-elevate active-elevate-2 transition-all hover:-translate-y-1"
                aria-label={social.label}
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground" data-testid="text-copyright">
          © {new Date().getFullYear()} Creative Portfolio. All rights reserved.
        </p>
        <button
          onClick={onBackToTop}
          className="text-sm font-medium hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all flex items-center gap-2"
          data-testid="button-back-to-top"
        >
          Back to Top
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
