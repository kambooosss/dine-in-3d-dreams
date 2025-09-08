import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, QrCode, Sparkles, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom QR Menu Design",
      description: "Beautifully designed QR menu cards that match your restaurant's brand identity and aesthetic.",
      features: ["Brand-matched colors", "Custom logos & graphics", "Professional layouts", "Print-ready files"],
      gradient: "gradient-primary"
    },
    {
      icon: QrCode,
      title: "Easy Scanning Experience", 
      description: "Optimized QR codes that work instantly with any smartphone camera for seamless customer experience.",
      features: ["High-contrast QR codes", "Quick scan technology", "Multi-device compatibility", "Error correction"],
      gradient: "gradient-secondary"
    },
    {
      icon: Sparkles,
      title: "Interactive Menu Experiences",
      description: "Transform boring menus into engaging experiences with 3D food animations and interactive elements.",
      features: ["3D food visualizations", "Interactive animations", "Rich multimedia content", "Engaging transitions"],
      gradient: "gradient-accent"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We provide end-to-end QR menu solutions that transform your restaurant's dining experience 
            and boost your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-primary transition-smooth cursor-pointer border-0 shadow-lg h-full"
              >
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:gradient-primary hover:text-white transition-smooth group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center gradient-hero rounded-3xl p-8 lg:p-12 text-white mx-4 sm:mx-0">
          <Zap className="h-16 w-16 mx-auto mb-6 animate-pulse-glow" />
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Restaurant?
          </h3>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Join hundreds of restaurants already using our QR menu solutions to enhance 
            customer experience and boost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-smooth"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;