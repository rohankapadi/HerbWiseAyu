import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Leaf, Shield, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-peaceful.jpg';

interface HeroProps {
  onStartChat: () => void;
  onNavigateToSeasonal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat, onNavigateToSeasonal }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with Ayurvedic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-yellow-50" />
      
      {/* Hero image overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Peaceful meditation landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4 drop-shadow-sm" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-800 leading-tight">
              Discover Ancient 
              <span className="text-green-600 block">Ayurvedic Wisdom</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Unlock 5,000 years of natural healing knowledge. Find herbal remedies, seasonal wellness guides, 
              and traditional Ayurvedic solutions for common ailments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="default" 
              size="lg" 
              onClick={onStartChat}
              className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Herbal Remedies
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onNavigateToSeasonal}
              className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Explore Seasonal Guide
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageCircle className="h-8 w-8 text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-green-800">AI Herbal Guidance</h3>
              <p className="text-green-600 text-sm">
                Get personalized Ayurvedic remedy suggestions based on your symptoms and constitution.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="h-8 w-8 text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-green-800">Seasonal Wellness</h3>
              <p className="text-green-600 text-sm">
                Discover seasonal Ayurvedic practices, herbs, and lifestyle tips for year-round health.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <Leaf className="h-8 w-8 text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-green-800">Ancient Knowledge</h3>
              <p className="text-green-600 text-sm">
                Access 5,000 years of traditional Ayurvedic wisdom for natural healing and wellness.
              </p>
            </Card>
          </div>

          <div className="mt-16 p-6 bg-amber-50 rounded-2xl border border-amber-200 backdrop-blur-sm">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>⚠️ Medical Disclaimer:</strong> This platform provides educational information about traditional Ayurvedic practices. 
              The content is not intended as medical advice. Always consult with qualified healthcare professionals 
              before starting any new treatment or making significant health changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;