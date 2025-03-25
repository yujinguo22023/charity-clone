
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('featured-causes');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[650px] w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1610890690846-5149750c8634?q=80&w=2071&auto=format&fit=crop)',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <span 
            className={`inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Environmental action for a sustainable future
          </span>
          
          <h1 
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Protecting Nature,<br />Empowering People
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-xl transform transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Join us in our mission to protect the Earth's biodiversity and ensure a sustainable future for generations to come.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link to="/take-action" className="button-primary">
              Take Action
            </Link>
            <Link to="/learn-more" className="button-secondary bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce transition-all duration-700 delay-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Hero;
