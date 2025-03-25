
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <Shield className="h-20 w-20 text-red-500 mx-auto mb-6" />
          
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Sorry, you don't have permission to access this page.
          </p>
          
          <p className="text-gray-600 mb-8">
            If you believe this is an error, please contact our support team for assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="button-primary">
              Return to Home
            </Link>
            
            <Link to="/contact" className="button-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Unauthorized;
