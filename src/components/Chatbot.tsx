import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, User, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendChat } from "@/services/chatApi";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Ayurvedic wellness assistant. Tell me about any common ailments you're experiencing, and I'll suggest natural remedies. For example, you can say 'I have a headache' or 'I feel stressed'.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue("");
    setIsLoading(true);

    console.log('Sending message to webhook:', messageToSend);

    try {
      // Use the chatApi service
      const result = await sendChat({ message: messageToSend });
      
      console.log('Chat service result:', result);
      console.log('Response status:', result.status);
      console.log('Response ok:', result.ok);
      console.log('Response text:', result.text);
      console.log('Raw response:', result.raw);

      let responseText = "";
      
      if (!result.ok) {
        // Handle error responses
        if (result.text.includes("Workflow")) {
          responseText = "🔧 The AI service is currently being configured. Please try again in a moment, or contact support if the issue persists.";
        } else {
          responseText = `❌ Service Error: ${result.text}`;
        }
      } else {
        // Handle successful responses
        responseText = result.text || "I received your message but couldn't generate a proper response. Please try rephrasing your question.";
      }
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      
      // Show toast for errors even if we display a message
      if (!result.ok) {
        toast({
          title: "Service Issue",
          description: "The AI service is temporarily unavailable. The response shown is a fallback message.",
          variant: "destructive",
        });
      }
      
    } catch (error) {
      console.error('Webhook error details:', {
        error: error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : 'No stack trace'
      });
      
      // Add fallback response for network errors
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `🌐 Network error occurred: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your internet connection and try again.`,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorResponse]);
      
      toast({
        title: "Connection Error",
        description: `Failed to connect to the AI service: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-leaf bg-clip-text text-transparent">
              AI Herb Assistant
            </h2>
            <p className="text-xl text-muted-foreground">
              Get personalized Ayurvedic recommendations for your wellness journey
            </p>
          </div>

          <Card className="shadow-elevated">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-leaf/5">
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-primary" />
                Ayurvedic Wellness Chat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-gradient-to-br from-leaf to-primary text-primary-foreground'
                      }`}>
                        {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border'
                      }`}>
                        <p className="whitespace-pre-line">{message.text}</p>
                        <span className={`text-xs opacity-70 ${
                          message.isUser ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-leaf to-primary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-card border border-border rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your symptoms or ask about Ayurvedic remedies..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gradient-to-r from-primary to-leaf hover:from-leaf hover:to-primary"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Disclaimer */}
                <div className="flex items-start gap-2 mt-3 p-3 bg-accent/10 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice. 
                    Always consult with a healthcare provider for serious health concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;