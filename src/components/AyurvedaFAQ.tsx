import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertCircle, HelpCircle, Leaf } from 'lucide-react';

// Mock FAQ data - will be replaced with Supabase queries
const faqData = [
  {
    id: '1',
    question: 'What is Ayurveda and how old is this system of medicine?',
    answer: 'Ayurveda is a 5,000-year-old system of natural healing that originated in India. It focuses on treating the whole person - mind, body, and spirit - rather than just symptoms. Ayurveda emphasizes prevention through lifestyle practices and natural remedies.'
  },
  {
    id: '2',
    question: 'What are the three doshas and how do they affect my health?',
    answer: 'The three doshas are Vata (air and space), Pitta (fire and water), and Kapha (earth and water). These are the fundamental energies that govern all biological and psychological functions. Each person has a unique constitution with a dominant dosha, and imbalances can lead to health issues.'
  },
  {
    id: '3',
    question: 'How do I determine my dosha type?',
    answer: 'Your dosha can be determined through consultation with an Ayurvedic practitioner who will assess your physical characteristics, mental tendencies, and lifestyle patterns. There are also self-assessment questionnaires, but professional consultation is recommended for accuracy.'
  },
  {
    id: '4',
    question: 'Are Ayurvedic herbs safe to use with modern medications?',
    answer: 'While many Ayurvedic herbs are generally safe, some can interact with modern medications. It\'s crucial to consult with both your doctor and a qualified Ayurvedic practitioner before combining treatments, especially if you\'re taking prescription medications.'
  },
  {
    id: '5',
    question: 'How long does it take to see results from Ayurvedic treatments?',
    answer: 'Results vary depending on the condition, individual constitution, and adherence to treatment. Acute conditions may improve within days to weeks, while chronic conditions typically require 3-6 months or longer. Ayurveda focuses on gradual, sustainable healing.'
  },
  {
    id: '6',
    question: 'Can Ayurveda help with stress and mental health?',
    answer: 'Yes, Ayurveda has extensive knowledge about mental health, called "Satvavajaya Chikitsa." It includes herbs like Brahmi and Ashwagandha, meditation practices, pranayama (breathing exercises), and lifestyle modifications to support mental well-being.'
  },
  {
    id: '7',
    question: 'What is the difference between Ayurvedic and modern nutrition?',
    answer: 'Ayurvedic nutrition considers not just nutritional content but also the food\'s taste, energy (heating/cooling), post-digestive effect, and how it affects your specific dosha. It emphasizes eating according to your constitution, season, and digestive capacity.'
  },
  {
    id: '8',
    question: 'How should I store and prepare Ayurvedic herbs?',
    answer: 'Store herbs in airtight containers away from light, heat, and moisture. Follow specific preparation instructions - some herbs are taken with warm water, others with honey or ghee. The timing of consumption (before/after meals) is also important for effectiveness.'
  },
  {
    id: '9',
    question: 'Can children and elderly people use Ayurvedic remedies?',
    answer: 'Yes, but with modifications. Children typically need smaller doses and gentler herbs, while elderly people may need adjusted dosages based on their digestive strength. Always consult with an Ayurvedic practitioner experienced in treating these age groups.'
  },
  {
    id: '10',
    question: 'What lifestyle practices does Ayurveda recommend for daily health?',
    answer: 'Ayurveda recommends following a daily routine (Dinacharya) including waking before sunrise, practicing yoga and meditation, eating meals at regular times, staying hydrated, and maintaining good sleep hygiene. Seasonal adjustments are also important.'
  }
];

const AyurvedaFAQ = () => {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="h-8 w-8" />
            Ayurveda FAQ
          </h1>
          <p className="text-lg text-emerald-600 max-w-3xl mx-auto">
            Common questions about Ayurvedic medicine, herbs, and wellness practices. 
            Expand your understanding of this ancient healing system.
          </p>
        </div>

        <Card className="shadow-soft bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <Leaf className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>
              Click on any question below to reveal the answer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left hover:text-emerald-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Additional Resources Card */}
        <Card className="mt-8 bg-emerald-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                Want to Learn More?
              </h3>
              <p className="text-emerald-700 mb-4">
                Consider consulting with a qualified Ayurvedic practitioner for personalized guidance 
                and to develop a comprehensive wellness plan tailored to your unique constitution.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mt-6 bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-amber-800 font-medium mb-1">Medical Disclaimer</p>
                <p className="text-amber-700 text-sm">
                  The information provided in this FAQ is for educational purposes only and should not be 
                  considered as medical advice. Always consult with qualified healthcare professionals 
                  before starting any new treatment or making changes to your health regimen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AyurvedaFAQ;