import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Smile, Meh, Frown, Zap, Sun, Cloud, CloudRain } from 'lucide-react';

const moods = [
  { id: 'great', icon: Sun, label: 'Great', color: 'text-yellow-500', description: 'Feeling amazing and energetic' },
  { id: 'good', icon: Smile, label: 'Good', color: 'text-green-500', description: 'Positive and content' },
  { id: 'okay', icon: Meh, label: 'Okay', color: 'text-blue-500', description: 'Neutral, just getting by' },
  { id: 'low', icon: Cloud, label: 'Low', color: 'text-gray-500', description: 'Feeling down or tired' },
  { id: 'difficult', icon: CloudRain, label: 'Difficult', color: 'text-purple-500', description: 'Struggling today' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [savedEntries, setSavedEntries] = useState<Array<{
    mood: string;
    notes: string;
    date: Date;
  }>>([]);

  const handleSaveMood = () => {
    if (!selectedMood) return;
    
    const newEntry = {
      mood: selectedMood,
      notes,
      date: new Date(),
    };
    
    setSavedEntries(prev => [newEntry, ...prev]);
    setSelectedMood(null);
    setNotes('');
  };

  const selectedMoodData = moods.find(m => m.id === selectedMood);

  return (
    <div className="min-h-screen bg-gradient-peaceful pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Mood Check-In</h1>
          <p className="text-muted-foreground">
            Taking a moment to acknowledge how you're feeling is a powerful step toward emotional wellness.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Mood Selection */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-soft">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">How are you feeling today?</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {moods.map((mood) => {
                const IconComponent = mood.icon;
                return (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-soft ${
                      selectedMood === mood.id
                        ? 'border-primary bg-primary-soft shadow-glow'
                        : 'border-border hover:border-primary-soft bg-background'
                    }`}
                  >
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 ${mood.color}`} />
                    <div className="text-sm font-medium text-center">{mood.label}</div>
                    <div className="text-xs text-muted-foreground text-center mt-1">{mood.description}</div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Notes Section */}
          {selectedMood && (
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-soft">
              <h2 className="text-xl font-semibold mb-4 text-card-foreground">
                Tell me more about feeling {selectedMoodData?.label.toLowerCase()}
              </h2>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What's contributing to this feeling? Any thoughts or experiences you'd like to capture?"
                className="min-h-[120px] bg-background border-primary-soft focus:border-primary"
              />
              <div className="mt-4 flex justify-end">
                <Button
                  variant="wellness"
                  onClick={handleSaveMood}
                  className="px-6"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Save Entry
                </Button>
              </div>
            </Card>
          )}

          {/* Recent Entries */}
          {savedEntries.length > 0 && (
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-soft">
              <h2 className="text-xl font-semibold mb-4 text-card-foreground">Recent Check-ins</h2>
              <div className="space-y-3">
                {savedEntries.slice(0, 5).map((entry, index) => {
                  const moodData = moods.find(m => m.id === entry.mood);
                  const IconComponent = moodData?.icon || Heart;
                  
                  return (
                    <div key={index} className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className={`h-5 w-5 ${moodData?.color}`} />
                        <span className="font-medium">{moodData?.label}</span>
                        <span className="text-sm text-muted-foreground ml-auto">
                          {entry.date.toLocaleDateString()} at {entry.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      {entry.notes && (
                        <p className="text-sm text-muted-foreground pl-8">{entry.notes}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          <Card className="p-6 bg-accent-soft/50 border-accent backdrop-blur-sm">
            <p className="text-accent-foreground text-sm leading-relaxed text-center">
              <Zap className="inline h-4 w-4 mr-1" />
              <strong>Gentle reminder:</strong> Mood tracking is about awareness, not judgment. 
              Every feeling is valid and temporary. If you're having persistent difficult feelings, 
              consider reaching out to a mental health professional for additional support.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;