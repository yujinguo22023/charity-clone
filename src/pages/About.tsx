
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About - David Suzuki";
    
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                The David Suzuki Foundation is a science-based environmental organization dedicated to protecting the diversity of nature and our quality of life, now and for the future.
              </p>
              
              <div className="bg-green-50 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-display font-semibold text-green-800 mb-4">Our Mission</h2>
                <p className="text-green-700">
                  To protect the diversity of nature and our quality of life, now and for the future.
                </p>
              </div>
              
              <h2 className="text-2xl font-display font-semibold mb-4">Our Vision</h2>
              <p className="mb-6">
                We envision a world where all life thrives — including humans, plants, animals and other organisms.
              </p>
              
              <h2 className="text-2xl font-display font-semibold mb-4">Our Story</h2>
              <p className="mb-6">
                In 1990, David Suzuki and Tara Cullis founded the David Suzuki Foundation to address some of the most pressing environmental challenges facing our planet. Since then, we've been working to conserve and protect the natural environment, and help create a sustainable Canada.
              </p>
              
              <div className="my-12">
                <img 
                  src="/images/ocean-policy.jpg" 
                  alt="Team discussing ocean conservation policies" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Our team working on conservation solutions</p>
              </div>
              
              <h2 className="text-2xl font-display font-semibold mb-4">Our Values</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>We recognize the interconnectedness of all things.</li>
                <li>We express an ethics of care toward the natural world.</li>
                <li>We practice social inclusion.</li>
                <li>We collaborate with others to achieve shared goals.</li>
                <li>We are evidence-based in our approach.</li>
                <li>We work with hope and determination.</li>
              </ul>
              
              <h2 className="text-2xl font-display font-semibold mb-4">Our Work</h2>
              <p className="mb-6">
                We work to identify and address the root causes of environmental degradation. Using science-based research, education and advocacy, we work to conserve and protect the natural environment, and help create a sustainable Canada.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
