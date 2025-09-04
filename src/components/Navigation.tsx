import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Home, MessageCircle, BarChart3 } from 'lucide-react';

interface NavigationProps {
  currentView: 'home' | 'chat' | 'mood';
  onViewChange: (view: 'home' | 'chat' | 'mood') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-foreground">MindfulSpace</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={currentView === 'home' ? 'wellness' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('home')}
              className="text-sm"
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </Button>
            <Button
              variant={currentView === 'chat' ? 'wellness' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('chat')}
              className="text-sm"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              Chat
            </Button>
            <Button
              variant={currentView === 'mood' ? 'wellness' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('mood')}
              className="text-sm"
            >
              <BarChart3 className="mr-1 h-4 w-4" />
              Mood
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;