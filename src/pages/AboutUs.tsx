
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

const AboutUs = () => {
  const team = [
    {
      name: "Alexandra Chen",
      role: "Managing Partner",
      bio: "Former McKinsey partner with 15+ years in venture capital. Led investments in 40+ companies across fintech, healthcare, and enterprise software."
    },
    {
      name: "Marcus Rodriguez",
      role: "Investment Partner",
      bio: "Ex-Google executive and serial entrepreneur. Founded two successful startups before joining venture capital. Focuses on AI and deep tech investments."
    },
    {
      name: "Elena Kowalski",
      role: "Principal",
      bio: "Former investment banker at Goldman Sachs. Specializes in early-stage companies and has a keen eye for emerging market opportunities."
    }
  ];

  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6">
                About Meridian Capital
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a next-generation venture capital firm committed to backing exceptional founders who are reshaping industries through innovation and determination.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2023, Meridian Capital emerged from a simple observation: the most transformative companies often come from unexpected places and unconventional founders.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our founders, having experienced firsthand the challenges of building and scaling technology companies, recognized a gap in the venture ecosystem. Too many promising entrepreneurs were being overlooked simply because they didn't fit the traditional mold.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to be the catalyst that helps visionary founders turn their boldest ideas into reality.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="/innovation.png"
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Our Team</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <FadeIn key={index} delay={100 + index * 50}>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Values</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Inclusive Excellence</h3>
                  <p className="text-gray-600">We believe diverse perspectives drive innovation. Our commitment to inclusive investing isn't just moral—it's strategic.</p>
                </div>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Long-term Partnership</h3>
                  <p className="text-gray-600">We're not just investors; we're partners for the journey. Our relationships with founders extend well beyond financial transactions.</p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                  <p className="text-gray-600">Drawing from our operational backgrounds, we provide hands-on support to help founders navigate growth challenges.</p>
                </div>
              </FadeIn>
              <FadeIn delay={250}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Bold Vision</h3>
                  <p className="text-gray-600">We back founders who think differently and aren't afraid to challenge conventional wisdom in pursuit of transformative impact.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
