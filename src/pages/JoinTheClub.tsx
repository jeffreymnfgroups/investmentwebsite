
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const JoinTheClub = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
  };

  const benefits = [
    {
      title: "Exclusive Events",
      description: "Access to quarterly founder dinners, pitch sessions, and networking events with industry leaders."
    },
    {
      title: "Educational Content",
      description: "Monthly newsletters with market insights, startup strategies, and lessons from successful entrepreneurs."
    },
    {
      title: "Early Access",
      description: "Priority consideration for our investment programs and accelerator opportunities."
    },
    {
      title: "Peer Network",
      description: "Connect with like-minded entrepreneurs, researchers, and business leaders in our community."
    }
  ];

  const events = [
    {
      title: "Founder Fridays",
      description: "Monthly casual meetups for entrepreneurs to share challenges and solutions.",
      frequency: "Monthly"
    },
    {
      title: "Deep Dive Sessions",
      description: "Quarterly workshops on specific topics like fundraising, product-market fit, and scaling.",
      frequency: "Quarterly"
    },
    {
      title: "Meridian Summit",
      description: "Annual conference bringing together our portfolio companies and industry experts.",
      frequency: "Annual"
    }
  ];

  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6">
                Join the Meridian Community
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with ambitious founders, innovative researchers, and forward-thinking leaders who are building the future of technology.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium">500+ Active Members</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Community Benefits</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={100 + index * 50}>
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Upcoming Events</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <FadeIn key={index} delay={100 + index * 50}>
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {event.frequency}
                      </span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Ready to Join?</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Become part of a community that's shaping the future of entrepreneurship.
              </p>
            </FadeIn>
            
            {!submitted ? (
              <FadeIn delay={100}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Join the Community
                  </Button>
                </form>
              </FadeIn>
            ) : (
              <FadeIn>
                <div className="text-center p-8 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Welcome to the Club!</h3>
                  <p className="text-green-600">
                    Thank you for joining. You'll receive our welcome email with next steps shortly.
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JoinTheClub;
