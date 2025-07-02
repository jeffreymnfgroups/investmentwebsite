
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const founderTypes = [
    {
      title: "Domain Experts",
      description: "Industry veterans and subject matter experts who understand market inefficiencies and possess unique insights to drive innovation."
    },
    {
      title: "Academic Innovators",
      description: "Researchers and scientists commercializing breakthrough technologies with strong intellectual property and technical moats."
    },
    {
      title: "Diverse Leadership Teams",
      description: "Founders from varied backgrounds bringing fresh perspectives and collaborative approaches to complex challenges."
    },
    {
      title: "Corporate Alumni",
      description: "Former executives and senior professionals leveraging their experience and networks to build transformative companies."
    }
  ];

  return (
    <section id="founders" className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Founders We Partner With</h2>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {founderTypes.map((type, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-3 font-serif">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
