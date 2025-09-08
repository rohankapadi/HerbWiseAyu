import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Home, MessageCircle, Calendar, HelpCircle } from 'lucide-react';

interface NavigationProps {
  currentView: 'home' | 'chat' | 'seasonal' | 'faq';
  onViewChange: (view: 'home' | 'chat' | 'seasonal' | 'faq') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold text-green-800">HerbWiseAyu</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={currentView === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('home')}
              className="text-sm"
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </Button>
            <Button
              variant={currentView === 'chat' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('chat')}
              className="text-sm"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              Remedy Chat
            </Button>
            <Button
              variant={currentView === 'seasonal' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('seasonal')}
              className="text-sm"
            >
              <Calendar className="mr-1 h-4 w-4" />
              Seasonal Guide
            </Button>
            <Button
              variant={currentView === 'faq' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('faq')}
              className="text-sm"
            >
              <HelpCircle className="mr-1 h-4 w-4" />
              FAQ
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;