import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Heart, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WEBHOOK_URL = 'https://rohan-kapadi.app.n8n.cloud/webhook-test/message';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello, I'm here to listen and support you. This is a safe space where you can share whatever is on your mind without judgment. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const messageText = inputText;
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          timestamp: new Date().toISOString(),
          userId: 'anonymous'
        }),
      });

      const data = await response.json();
      const responseText = data.response || data.message || "I'm here to listen and support you through this.";
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Webhook error:', error);
      const fallbackMessage: Message = {
        id: Date.now() + 1,
        text: "I'm experiencing some technical difficulties, but I'm still here for you. Please try again in a moment.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <Card
              className={`max-w-[80%] p-4 ${
                message.isUser
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-card text-card-foreground border-primary-soft shadow-soft'
              }`}
            >
              {!message.isUser && (
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Wellness Companion</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{message.text}</p>
              <div className="mt-2 text-xs opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </Card>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <Card className="max-w-[80%] p-4 bg-card text-card-foreground border-primary-soft shadow-soft">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Wellness Companion</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 animate-pulse text-primary" />
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </Card>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind... I'm here to listen"
            className="flex-1 bg-background border-primary-soft focus:border-primary"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            variant="wellness"
            size="icon"
            className="h-10 w-10"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          This is a supportive space for reflection. For immediate help, please contact a mental health professional.
        </p>
      </div>
    </div>
  );
};

export default Chat;