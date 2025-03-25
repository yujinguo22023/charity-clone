
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "What We Do - David Suzuki";
    
    return () => {
      // Cleanup
    };
  }, []);

  const programs = [
    {
      id: 'climate-solutions',
      title: 'Climate Solutions',
      description: 'We work to develop and promote solutions to reduce greenhouse gas emissions and adapt to climate change.',
      image: '/images/climate-solutions.jpg',
      link: '/what-we-do/climate-solutions'
    },
    {
      id: 'biodiversity',
      title: 'Biodiversity Conservation',
      description: 'We work to protect and restore biodiversity in terrestrial, freshwater and marine ecosystems.',
      image: '/images/biodiversity.jpg',
      link: '/what-we-do/biodiversity'
    },
    {
      id: 'environmental-rights',
      title: 'Environmental Rights',
      description: 'We advocate for the right of all Canadians to a healthy environment, now and for the future.',
      image: '/images/environmental-rights.jpg',
      link: '/what-we-do/environmental-rights'
    },
    {
      id: 'renewable-energy',
      title: 'Renewable Energy Transition',
      description: 'We work to accelerate the transition to clean, renewable energy sources.',
      image: '/images/renewable-energy.jpg',
      link: '/what-we-do/renewable-energy'
    },
    {
      id: 'urban-forest',
      title: 'Urban Sustainability',
      description: 'We work to create more sustainable, livable urban environments.',
      image: '/images/urban-forest.jpg',
      link: '/what-we-do/urban-sustainability'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">What We Do</h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              We work to address the environmental challenges facing our planet and create a sustainable future for all.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              {programs.map((program) => (
                <div key={program.id} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-display font-semibold text-white">{program.title}</h3>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <Link 
                      to={program.link} 
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl mt-16">
              <h2 className="text-2xl font-display font-semibold text-green-800 mb-4">Our Approach</h2>
              <p className="text-green-700 mb-6">
                We use science, education and advocacy to drive the changes necessary for a sustainable future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-green-700 text-xl">1</span>
                  </div>
                  <h3 className="font-medium text-green-800 mb-2">Research</h3>
                  <p className="text-green-600 text-sm">Evidence-based solutions built on scientific research</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-green-700 text-xl">2</span>
                  </div>
                  <h3 className="font-medium text-green-800 mb-2">Educate</h3>
                  <p className="text-green-600 text-sm">Raising awareness and inspiring action through education</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-green-700 text-xl">3</span>
                  </div>
                  <h3 className="font-medium text-green-800 mb-2">Advocate</h3>
                  <p className="text-green-600 text-sm">Working with governments and communities to implement solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhatWeDo;
