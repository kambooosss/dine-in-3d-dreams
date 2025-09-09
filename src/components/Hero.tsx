import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-restaurant-table.jpg";
import floatingFood from "@/assets/floating-food-items.png";
import qrLogo from "@/assets/LOGO3.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-20" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-bounce-in text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                QR Menus That
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Come Alive
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transform your restaurant with interactive QR menu cards that create seamless digital dining experiences. Engage customers with beautifully designed, easy-to-scan menus.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Button 
                size="lg" 
                className="gradient-primary text-white shadow-primary hover:shadow-glow transition-smooth group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button> */}
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:gradient-primary hover:text-white transition-smooth"
              >
                View Examples
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Restaurants Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24h</div>
                <div className="text-sm text-muted-foreground">Quick Delivery</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Visual */}
          <div className="relative">
            {/* Restaurant Table Image - Hidden on small screens, shown on medium+ */}
            <div className="relative rounded-2xl overflow-hidden shadow-primary">
              <img 
                src={heroImage} 
                alt="Customer scanning QR menu at restaurant table"
                className="w-full h-auto"
              />
              
              {/* Scanning Animation Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* <QrCode className="h-16 w-16 text-primary animate-pulse-glow" />
                  <div className="absolute -inset-4 border-2 border-primary rounded-lg animate-pulse" /> */}
                  
                </div>
              </div>
            </div>
            
            {/* Floating Food Items */}
            <div className="absolute -top-8 -right-8 w-48 h-36 lg:w-64 lg:h-48 hidden md:block">
              <img 
                src={floatingFood} 
                alt="3D floating food items"
                className="w-full h-full animate-float rounded-xl"
              />
            </div>
            
            {/* Interactive Elements */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 lg:p-4 shadow-secondary animate-float-delayed hidden sm:block">
              <Smartphone className="h-8 w-8 text-primary mb-2" />
              <div className="text-sm font-semibold">Scan & Enjoy</div>
              <div className="text-xs text-muted-foreground">Interactive Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-primary rounded-full animate-float opacity-60 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-8 h-8 bg-secondary rounded-full animate-float-delayed opacity-40 hidden lg:block" />
      <div className="absolute top-1/2 left-20 w-4 h-4 bg-accent rounded-full animate-float opacity-50 hidden lg:block" />
    </section>
  );
};

export default Hero;