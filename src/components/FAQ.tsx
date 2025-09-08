import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is Ayurveda and how does it work?",
    answer: "Ayurveda is a 5,000-year-old system of natural healing from India. It works by identifying your unique constitution (Prakriti) and current imbalances (Vikriti), then using herbs, lifestyle practices, and dietary guidelines to restore harmony between mind, body, and spirit."
  },
  {
    question: "How do I determine my Ayurvedic body type (Dosha)?",
    answer: "Your dosha is determined by your physical characteristics, mental tendencies, and health patterns. The three doshas are Vata (air/space), Pitta (fire/water), and Kapha (earth/water). A qualified Ayurvedic practitioner can help determine your constitution through consultation and assessment."
  },
  {
    question: "Are Ayurvedic herbs safe to use?",
    answer: "When used properly, most Ayurvedic herbs are safe and have been used for thousands of years. However, it's important to source herbs from reputable suppliers, follow proper dosages, and consult with healthcare providers, especially if you're pregnant, nursing, or taking medications."
  },
  {
    question: "Can Ayurveda help with chronic conditions?",
    answer: "Ayurveda takes a holistic approach to health and may help support overall wellness. While it can complement conventional treatment, it should not replace professional medical care for serious or chronic conditions. Always work with qualified practitioners for comprehensive care."
  },
  {
    question: "How long does it take to see results with Ayurvedic remedies?",
    answer: "Results vary depending on the individual, condition, and consistency of practice. Some people notice improvements in energy and digestion within days or weeks, while deeper constitutional changes may take several months of consistent practice."
  },
  {
    question: "What's the difference between Ayurvedic and modern medicine?",
    answer: "Modern medicine focuses on specific symptoms and diseases, while Ayurveda looks at the whole person and root causes of imbalance. Ayurveda emphasizes prevention and works to strengthen the body's natural healing abilities rather than just treating symptoms."
  },
  {
    question: "Can I practice Ayurveda alongside conventional medicine?",
    answer: "Yes, Ayurveda can often complement conventional medicine. However, it's crucial to inform all your healthcare providers about any herbs or supplements you're taking to avoid interactions and ensure coordinated care."
  },
  {
    question: "What is the best time to take Ayurvedic herbs?",
    answer: "Timing depends on the specific herb and its purpose. Generally, digestive herbs are taken before meals, tonics are taken in the morning, and calming herbs before bed. Always follow specific instructions for each herb and consult with practitioners for guidance."
  },
  {
    question: "How does seasonal eating work in Ayurveda?",
    answer: "Ayurveda recommends eating foods that balance the dominant dosha of each season. For example, cooling foods in summer (Pitta season), warming foods in winter (Vata season), and light, spicy foods during monsoon to support digestion."
  },
  {
    question: "Is Ayurveda suitable for children and elderly people?",
    answer: "Ayurveda can be adapted for all ages, but approaches vary significantly. Children and elderly individuals may need gentler remedies and different dosages. It's especially important to work with experienced practitioners when treating these populations."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-leaf bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about Ayurveda and natural wellness practices
            </p>
          </div>

          <Card className="shadow-elevated">
            <CardHeader className="bg-gradient-to-r from-sage/10 to-leaf/10">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Ayurvedic Knowledge Base
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border px-6">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-leaf/5 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground">📚 Learn More</h3>
                <p className="text-muted-foreground mb-4">
                  Dive deeper into Ayurvedic principles and discover how ancient wisdom can transform your modern lifestyle.
                </p>
                <div className="text-sm text-primary font-medium">Explore Resources →</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gold/10 to-accent/10 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground">🤝 Get Support</h3>
                <p className="text-muted-foreground mb-4">
                  Have specific questions? Connect with our community of Ayurvedic practitioners and wellness enthusiasts.
                </p>
                <div className="text-sm text-primary font-medium">Join Community →</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;