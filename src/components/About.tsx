import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Smartphone, TrendingUp } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Digital Experience",
      description: "Transform traditional menus into interactive digital experiences that engage customers from the moment they sit down."
    },
    {
      icon: Users,
      title: "Enhanced Customer Engagement", 
      description: "Keep customers engaged with 3D food visualizations, interactive elements, and branded experiences that make dining memorable."
    },
    {
      icon: Smartphone,
      title: "Contactless & Convenient",
      description: "Provide safe, contactless menu access while offering rich multimedia content that showcases your dishes beautifully."
    },
    {
      icon: TrendingUp,
      title: "Boost Sales & Efficiency",
      description: "Increase order values with visual appeal and streamline operations with integrated ordering and payment systems."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Restaurants Need 
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              QR Menu Magic
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In today's digital-first world, restaurants need more than just a QR code. 
            They need an experience that delights customers and drives business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-smooth cursor-pointer border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                85%
              </div>
              <p className="text-muted-foreground">
                Increase in customer engagement with interactive QR menus
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-secondary bg-clip-text text-transparent">
                40%
              </div>
              <p className="text-muted-foreground">
                Average increase in order value with visual menu experiences  
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-accent bg-clip-text text-transparent">
                60%
              </div>
              <p className="text-muted-foreground">
                Faster table turnover with streamlined digital ordering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;