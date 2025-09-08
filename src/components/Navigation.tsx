import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, QrCode } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <QrCode className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">QRKaro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:gradient-primary hover:text-white transition-smooth"
            >
              Login
            </Button>
            <Button className="gradient-primary text-white shadow-primary hover:shadow-glow transition-smooth">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-smooth font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:gradient-primary hover:text-white transition-smooth"
                >
                  Login
                </Button>
                <Button className="gradient-primary text-white shadow-primary hover:shadow-glow transition-smooth">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;