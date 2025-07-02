
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InvestmentResources = () => {
  const resources = [
    {
      category: "Fundraising Guides",
      items: [
        { title: "Pre-Seed Fundraising Playbook", type: "PDF", description: "Complete guide to raising your first round" },
        { title: "Seed Stage Metrics That Matter", type: "Template", description: "Key metrics investors look for at seed stage" },
        { title: "Pitch Deck Template", type: "Template", description: "Proven template used by successful founders" }
      ]
    },
    {
      category: "Market Research",
      items: [
        { title: "TAM Analysis Framework", type: "Template", description: "How to calculate and present your total addressable market" },
        { title: "Competitive Analysis Toolkit", type: "Toolkit", description: "Templates and methodologies for competitor research" },
        { title: "Customer Discovery Scripts", type: "Template", description: "Interview scripts for customer validation" }
      ]
    },
    {
      category: "Legal & Operations",
      items: [
        { title: "Term Sheet Explained", type: "Guide", description: "Understanding key terms in your investment agreement" },
        { title: "Cap Table Modeling", type: "Calculator", description: "Excel model for equity and dilution scenarios" },
        { title: "Legal Checklist for Startups", type: "Checklist", description: "Essential legal considerations for early-stage companies" }
      ]
    }
  ];

  const tools = [
    {
      name: "Financial Model Builder",
      description: "Interactive tool to create 3-year financial projections",
      category: "Finance"
    },
    {
      name: "Market Size Calculator",
      description: "Calculate TAM, SAM, and SOM for your market",
      category: "Research"
    },
    {
      name: "Valuation Estimator",
      description: "Get estimated valuation ranges based on comparable companies",
      category: "Valuation"
    },
    {
      name: "Runway Calculator",
      description: "Track burn rate and calculate remaining runway",
      category: "Finance"
    }
  ];

  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6">
                Investment Resources
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive library of tools, templates, and guides designed to help founders navigate the investment landscape successfully.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Resource Library</h2>
          </FadeIn>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <FadeIn delay={100 + categoryIndex * 50}>
                  <h3 className="text-2xl font-serif mb-6">{category.category}</h3>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <FadeIn key={itemIndex} delay={150 + categoryIndex * 50 + itemIndex * 25}>
                      <Card className="border-0 shadow-sm h-full">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <Button variant="outline" className="w-full">
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Interactive Tools</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <FadeIn key={index} delay={100 + index * 50}>
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{tool.description}</p>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Launch Tool
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Investment Process</h2>
            </FadeIn>
            
            <div className="space-y-8">
              {[
                { step: "1", title: "Initial Screening", description: "Submit your pitch deck and complete our founder questionnaire." },
                { step: "2", title: "Partner Review", description: "Our investment team reviews your submission within 2 weeks." },
                { step: "3", title: "Deep Dive", description: "Selected companies present to our full partner team." },
                { step: "4", title: "Due Diligence", description: "Comprehensive review of business model, market, and team." },
                { step: "5", title: "Investment Decision", description: "Final decision communicated within 4-6 weeks of initial submission." }
              ].map((process, index) => (
                <FadeIn key={index} delay={100 + index * 50}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InvestmentResources;
