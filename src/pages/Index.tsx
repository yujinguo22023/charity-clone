
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCauses from '../components/FeaturedCauses';
import TakeAction from '../components/TakeAction';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Add class to document body for specific page styling if needed
    document.body.classList.add('home-page');
    
    return () => {
      // Clean up
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedCauses />
        <TakeAction />
        <BlogSection />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
