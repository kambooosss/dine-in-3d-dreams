import { QrCode, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-lg font-bold">QRKaro</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Transforming restaurants with interactive QR menu experiences that delight customers and boost business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">QR Menu Design</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Interactive Menus</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Brand Integration</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">POS Integration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@qrkaro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Digital Avenue, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 QRKaro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/80 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-white transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;