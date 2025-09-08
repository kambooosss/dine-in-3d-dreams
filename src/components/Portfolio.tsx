import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Bella Vista Italian",
      category: "Fine Dining",
      description: "Elegant QR menu design with interactive wine pairing suggestions and 3D food presentations.",
      image: "/api/placeholder/400/300",
      stats: { scans: "12K+", rating: 4.9 },
      features: ["3D Food Animations", "Wine Pairing", "Multi-language"]
    },
    {
      title: "Burger Street Co.",
      category: "Fast Casual",
      description: "Fun, vibrant QR menu with animated burger customization and loyalty program integration.",
      image: "/api/placeholder/400/300", 
      stats: { scans: "25K+", rating: 4.8 },
      features: ["Interactive Builder", "Loyalty Points", "Quick Order"]
    },
    {
      title: "Sakura Sushi Bar",
      category: "Japanese Cuisine",
      description: "Minimalist design with elegant sushi presentations and sake recommendations.",
      image: "/api/placeholder/400/300",
      stats: { scans: "8K+", rating: 5.0 },
      features: ["Ingredient Info", "Sake Pairing", "Chef Specials"]
    },
    {
      title: "Green Garden Cafe", 
      category: "Healthy Food",
      description: "Fresh, organic-themed QR menu highlighting nutritional information and sustainability.",
      image: "/api/placeholder/400/300",
      stats: { scans: "15K+", rating: 4.9 },
      features: ["Nutrition Facts", "Sustainability", "Allergen Info"]
    },
    {
      title: "Taco Fiesta",
      category: "Mexican",
      description: "Colorful, festive QR menu with spice level indicators and build-your-own taco features.",
      image: "/api/placeholder/400/300",
      stats: { scans: "30K+", rating: 4.7 },
      features: ["Spice Levels", "Custom Tacos", "Group Orders"]
    },
    {
      title: "Midnight Diner",
      category: "American Comfort",
      description: "Cozy, retro-styled QR menu perfect for late-night dining with comfort food focus.",
      image: "/api/placeholder/400/300",
      stats: { scans: "18K+", rating: 4.8 },
      features: ["Night Mode", "Comfort Classics", "Quick Service"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Discover how we've transformed dining experiences for restaurants across different cuisines and styles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-primary transition-smooth cursor-pointer border-0 shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-4xl lg:text-6xl opacity-20">🍽️</div>
              </div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 lg:mb-6">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{project.stats.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {project.stats.scans} scans
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex}
                      variant="outline"
                      className="text-xs border-primary/20 text-primary"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Button 
            size="lg"
            className="gradient-primary text-white shadow-primary hover:shadow-glow transition-smooth"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;