
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const causes = [
  {
    id: 1,
    title: 'Climate Solutions',
    description: 'Building a zero-carbon future with renewable energy and sustainable communities.',
    image: 'https://images.unsplash.com/photo-1593829668372-41913a356991?q=80&w=1970&auto=format&fit=crop',
    link: '/climate-solutions',
  },
  {
    id: 2,
    title: 'Biodiversity',
    description: 'Protecting wildlife and preserving the natural habitats that sustain all life.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1952&auto=format&fit=crop',
    link: '/biodiversity',
  },
  {
    id: 3,
    title: 'Environmental Rights',
    description: 'Fighting for the right to a healthy environment for all communities.',
    image: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?q=80&w=2071&auto=format&fit=crop',
    link: '/environmental-rights',
  },
];

const FeaturedCauses = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer to trigger animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate section title first, then each cause with a delay
          setTimeout(() => {
            setAnimatedItems((prev) => [...prev, 0]);
            
            causes.forEach((cause, index) => {
              setTimeout(() => {
                setAnimatedItems((prev) => [...prev, cause.id]);
              }, 200 * (index + 1));
            });
          }, 200);
          
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isAnimated = (id: number) => animatedItems.includes(id);

  return (
    <section id="featured-causes" ref={sectionRef} className="section-container">
      <div 
        className={`text-center mb-16 transition-all duration-700 ease-out ${
          isAnimated(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
          Our Focus Areas
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Working Together for a Sustainable Future
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We collaborate with communities, policymakers, and individuals to address the most pressing environmental challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {causes.map((cause) => (
          <div 
            key={cause.id}
            className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 transform ${
              isAnimated(cause.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-56 overflow-hidden">
              <img 
                src={cause.image} 
                alt={cause.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                {cause.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {cause.description}
              </p>
              <Link 
                to={cause.link} 
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCauses;
