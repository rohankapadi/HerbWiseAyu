import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Shield, MessageCircle, Users } from 'lucide-react';
import heroImage from '@/assets/hero-peaceful.jpg';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with peaceful gradient */}
      <div className="absolute inset-0 bg-gradient-peaceful" />
      
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
            <Heart className="h-16 w-16 text-primary mx-auto mb-4 drop-shadow-sm" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Your Safe Space for
              <span className="text-primary block">Mental Wellness</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Express your feelings, share your thoughts, and find comfort in judgment-free conversations. 
              Your emotional well-being matters, and you're never alone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="wellness" 
              size="lg" 
              onClick={onStartChat}
              className="text-lg px-8 py-4 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
            <Button 
              variant="gentle" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              <Shield className="mr-2 h-5 w-5" />
              Learn About Privacy
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary-soft shadow-soft hover:shadow-glow transition-all duration-300">
              <Heart className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Compassionate Listening</h3>
              <p className="text-muted-foreground text-sm">
                Share your emotions and experiences in a supportive environment designed for healing.
              </p>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary-soft shadow-soft hover:shadow-glow transition-all duration-300">
              <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Complete Privacy</h3>
              <p className="text-muted-foreground text-sm">
                Your conversations are private and secure. Express yourself freely without worry.
              </p>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary-soft shadow-soft hover:shadow-glow transition-all duration-300">
              <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Always Available</h3>
              <p className="text-muted-foreground text-sm">
                24/7 support when you need someone to listen, whether it's day or night.
              </p>
            </Card>
          </div>

          <div className="mt-16 p-6 bg-accent-soft/50 rounded-2xl border border-accent backdrop-blur-sm">
            <p className="text-accent-foreground text-sm leading-relaxed">
              <strong>Important:</strong> This platform provides emotional support and a space for reflection. 
              If you're experiencing a mental health crisis, please reach out to a qualified mental health professional 
              or contact your local crisis helpline immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;