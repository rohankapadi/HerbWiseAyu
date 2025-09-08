import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Chat from '@/components/Chat';
import SeasonalGuide from '@/components/SeasonalGuide';
import AyurvedaFAQ from '@/components/AyurvedaFAQ';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'chat' | 'seasonal' | 'faq'>('home');

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      {currentView === 'home' && <Hero onStartChat={handleStartChat} />}
      
      {currentView === 'chat' && (
        <div className="pt-20 pb-8 min-h-screen bg-gradient-peaceful">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="h-[600px] bg-card/80 backdrop-blur-sm shadow-soft">
              <Chat />
            </Card>
          </div>
        </div>
      )}
      
      {currentView === 'seasonal' && <SeasonalGuide />}
      
      {currentView === 'faq' && <AyurvedaFAQ />}
    </div>
  );
};

export default Index;
