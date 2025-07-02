
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface InvestmentApproachProps {
  className?: string;
}

const InvestmentApproach: React.FC<InvestmentApproachProps> = ({ className }) => {
  const investmentTiers = [
    {
      title: "Early Stage Fund",
      description: "€50K–€250K investments in pre-seed and seed stage companies with strong founding teams and clear market opportunities."
    },
    {
      title: "Growth Capital",
      description: "€500K–€2M investments in Series A companies demonstrating product-market fit and scalable business models."
    }
  ];

  return (
    <section id="investment" className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Investment Strategy</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-center text-muted-foreground mb-12">
              We take a sector-agnostic approach, focusing on exceptional founders with deep domain expertise and differentiated insights. Our investments span technology, healthcare, fintech, and emerging industries where innovation creates sustainable competitive advantages.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {investmentTiers.map((tier, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4 font-serif">{tier.title}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  {index === 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium">Accelerated decision-making process</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium">Strategic advisory and network access</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentApproach;
