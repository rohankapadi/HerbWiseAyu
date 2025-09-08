import { Leaf, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-forest text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-accent rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest" />
              </div>
              <span className="text-2xl font-bold">HerbWiseAyu</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted companion for ancient Ayurvedic wisdom and modern wellness practices.
            </p>
            <div className="flex items-center space-x-2 text-gold">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for natural wellness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Chatbot", "Seasonal Guide", "FAQ", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Resources</h3>
            <ul className="space-y-2">
              {["Herb Database", "Dosha Quiz", "Recipes", "Articles", "Research", "Community"].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#"
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm">hello@herbwiseayu.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm">Wellness Center, Natural City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 HerbWiseAyu. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          
          {/* Medical Disclaimer */}
          <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on HerbWiseAyu is for educational purposes only and is not intended 
              as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
              qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;