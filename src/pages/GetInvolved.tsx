
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Users, Globe, Megaphone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentButton from '../components/PaymentButton';

const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Get Involved - David Suzuki";
    
    return () => {
      // Cleanup
    };
  }, []);

  const ways = [
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Volunteer",
      description: "Join our volunteer team and make a difference in your community.",
      link: "/get-involved/volunteer"
    },
    {
      icon: <Megaphone className="h-10 w-10 text-green-600" />,
      title: "Advocate",
      description: "Add your voice to our campaigns and help drive meaningful change.",
      link: "/get-involved/advocate"
    },
    {
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      title: "Attend Events",
      description: "Join webinars, conferences, and community events focused on environmental issues.",
      link: "/get-involved/events"
    },
    {
      icon: <Mail className="h-10 w-10 text-green-600" />,
      title: "Subscribe",
      description: "Stay informed with our newsletter and latest updates on environmental issues.",
      link: "/get-involved/subscribe"
    },
    {
      icon: <Globe className="h-10 w-10 text-green-600" />,
      title: "Spread the Word",
      description: "Share our content and help raise awareness about environmental issues.",
      link: "/get-involved/share"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get Involved</h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              There are many ways you can contribute to creating a sustainable future. Find out how you can make a difference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {ways.map((way, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">{way.icon}</div>
                  <h3 className="text-xl font-display font-semibold mb-2">{way.title}</h3>
                  <p className="text-gray-600 mb-4">{way.description}</p>
                  <Link 
                    to={way.link} 
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 mb-16">
              <div className="md:flex items-center">
                <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-green-800 mb-4">Make a Donation</h2>
                  <p className="text-green-700 mb-6">
                    Your donation helps us protect nature, combat climate change, and build a sustainable future. Every contribution makes a difference.
                  </p>
                  <PaymentButton amount={50} />
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="font-medium text-green-700 mb-2">Other Ways to Give</h3>
                    <ul className="text-left text-gray-700 text-sm space-y-2">
                      <li className="flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-green-500" /> Monthly giving</li>
                      <li className="flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-green-500" /> Planned giving</li>
                      <li className="flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-green-500" /> Corporate partnerships</li>
                      <li className="flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-green-500" /> Foundations & grants</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Have Questions?</h2>
              <p className="text-gray-700 mb-6">
                Contact our team to learn more about how you can get involved.
              </p>
              <Link to="/contact" className="button-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
