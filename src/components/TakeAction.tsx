
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  {
    id: 1,
    title: 'Join Our Community',
    description: 'Become part of a network of passionate advocates and changemakers.',
    icon: <Users className="h-6 w-6 text-white" />,
    link: '/join',
    bgColor: 'bg-green-600',
  },
  {
    id: 2,
    title: 'Sign a Petition',
    description: 'Add your voice to important environmental campaigns and policy initiatives.',
    icon: <FileText className="h-6 w-6 text-white" />,
    link: '/petitions',
    bgColor: 'bg-blue-600',
  },
  {
    id: 3,
    title: 'Stay Informed',
    description: 'Subscribe to our newsletter for the latest updates and action alerts.',
    icon: <Mail className="h-6 w-6 text-white" />,
    link: '/subscribe',
    bgColor: 'bg-green-700',
  },
];

const TakeAction = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate section title first, then each action with a delay
          setTimeout(() => {
            setAnimatedItems((prev) => [...prev, 0]);
            
            actions.forEach((action, index) => {
              setTimeout(() => {
                setAnimatedItems((prev) => [...prev, action.id]);
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
    <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute right-0 top-0 h-full w-full text-gray-100" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,100" opacity="0.2"></polygon>
        </svg>
      </div>
      
      <div ref={sectionRef} className="relative z-10 section-container">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isAnimated(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Take Action
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Make a Difference Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            There are many ways to get involved and support our work. Your actions, big or small, contribute to meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {actions.map((action) => (
            <div 
              key={action.id}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 transform ${
                isAnimated(action.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`p-4 ${action.bgColor}`}>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                  {action.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {action.description}
                </p>
                <Link 
                  to={action.link} 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`text-center transition-all duration-700 delay-300 ease-out ${
            isAnimated(actions[actions.length - 1].id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link to="/get-involved" className="button-primary">
            Explore All Ways to Help
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
