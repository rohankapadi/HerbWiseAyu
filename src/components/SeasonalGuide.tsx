import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Leaf, Sun, Snowflake, Flower, AlertCircle } from 'lucide-react';

// Mock data - will be replaced with Supabase queries
const seasonalData = {
  vata: {
    season: 'Autumn/Winter (Vata Season)',
    icon: Snowflake,
    color: 'bg-blue-50 border-blue-200',
    description: 'Cold, dry, and windy season requiring grounding and warming',
    herbs: ['Ashwagandha', 'Brahmi', 'Shankhpushpi', 'Jatamansi', 'Ginger'],
    dos: [
      'Eat warm, moist, and grounding foods',
      'Follow regular daily routines',
      'Practice gentle yoga and meditation',
      'Get adequate sleep (8-9 hours)',
      'Use warming spices like ginger and cinnamon'
    ],
    donts: [
      'Avoid cold and raw foods',
      'Don\'t skip meals',
      'Avoid excessive travel',
      'Limit caffeine and stimulants',
      'Avoid overstimulation'
    ]
  },
  pitta: {
    season: 'Summer (Pitta Season)',
    icon: Sun,
    color: 'bg-orange-50 border-orange-200',
    description: 'Hot and intense season requiring cooling and calming',
    herbs: ['Aloe Vera', 'Neem', 'Guduchi', 'Amla', 'Coconut'],
    dos: [
      'Eat cooling and sweet foods',
      'Stay hydrated with coconut water',
      'Practice cooling pranayama',
      'Avoid midday sun exposure',
      'Use cooling herbs like mint and coriander'
    ],
    donts: [
      'Avoid spicy and hot foods',
      'Don\'t overexert in heat',
      'Avoid anger and stress',
      'Limit alcohol consumption',
      'Avoid acidic foods'
    ]
  },
  kapha: {
    season: 'Spring (Kapha Season)',
    icon: Flower,
    color: 'bg-green-50 border-green-200',
    description: 'Moist and heavy season requiring energizing and lightening',
    herbs: ['Trikatu', 'Guggul', 'Turmeric', 'Fenugreek', 'Black Pepper'],
    dos: [
      'Eat light, warm, and spicy foods',
      'Exercise regularly and vigorously',
      'Wake up early (before 6 AM)',
      'Practice invigorating pranayama',
      'Use stimulating spices like black pepper'
    ],
    donts: [
      'Avoid heavy and oily foods',
      'Don\'t oversleep',
      'Avoid dairy in excess',
      'Limit sweet and salty foods',
      'Avoid sedentary lifestyle'
    ]
  }
};

const SeasonalGuide = () => {
  const [activeTab, setActiveTab] = useState('vata');

  return (
    <div className="pt-20 pb-8 min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-8 w-8" />
            Seasonal Ayurveda Guide
          </h1>
          <p className="text-lg text-green-600 max-w-3xl mx-auto">
            Discover ancient wisdom for seasonal wellness. Align your lifestyle with nature's rhythms
            through Ayurvedic principles for optimal health throughout the year.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="vata" className="flex items-center gap-2">
              <Snowflake className="h-4 w-4" />
              Vata (Autumn/Winter)
            </TabsTrigger>
            <TabsTrigger value="pitta" className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              Pitta (Summer)
            </TabsTrigger>
            <TabsTrigger value="kapha" className="flex items-center gap-2">
              <Flower className="h-4 w-4" />
              Kapha (Spring)
            </TabsTrigger>
          </TabsList>

          {Object.entries(seasonalData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Season Overview */}
                <Card className={`${data.color} col-span-full lg:col-span-3`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <data.icon className="h-6 w-6" />
                      {data.season}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {data.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Recommended Herbs */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Leaf className="h-5 w-5" />
                      Recommended Herbs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.herbs.map((herb) => (
                        <Badge key={herb} variant="secondary" className="bg-green-100 text-green-800">
                          {herb}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Do's */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-emerald-700">✓ Do's</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.dos.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Don'ts */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-red-700">✗ Don'ts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.donts.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Disclaimer */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-amber-800 font-medium mb-1">Important Disclaimer</p>
                <p className="text-amber-700 text-sm">
                  This information is for educational purposes only and is not a substitute for professional medical advice. 
                  Please consult with a qualified Ayurvedic practitioner or healthcare provider before making significant 
                  changes to your diet or lifestyle.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SeasonalGuide;