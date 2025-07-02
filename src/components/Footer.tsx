
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer id="contact" className={cn('py-20 md:py-32 bg-white border-t border-gray-100', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-serif font-medium tracking-tight">
              Meridian Capital
            </Link>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              to="/"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/join-the-club"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Join the Club
            </Link>
            <Link
              to="/investment-resources"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Investment Resources
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Meridian Capital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
