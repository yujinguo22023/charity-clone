
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-display font-bold text-2xl text-green-700 transition-colors duration-300">
                David Suzuki
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link to="/what-we-do" className="font-medium text-gray-800 hover:text-green-600 transition-colors">
              What We Do
            </Link>
            <Link to="/resources" className="font-medium text-gray-800 hover:text-green-600 transition-colors">
              Resources
            </Link>
            <Link to="/get-involved" className="font-medium text-gray-800 hover:text-green-600 transition-colors">
              Get Involved
            </Link>
            <Link to="/blog" className="font-medium text-gray-800 hover:text-green-600 transition-colors">
              Blog
            </Link>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link 
              to="/donate" 
              className="button-primary animate-hover"
            >
              <Heart className="h-4 w-4 mr-2" />
              Donate
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-green-600 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-8 space-y-1 bg-white/95 backdrop-blur-sm">
          <Link 
            to="/" 
            className="block py-3 font-medium text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block py-3 font-medium text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/what-we-do" 
            className="block py-3 font-medium text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            What We Do
          </Link>
          <Link 
            to="/resources" 
            className="block py-3 font-medium text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link 
            to="/get-involved" 
            className="block py-3 font-medium text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link 
            to="/blog" 
            className="block py-3 font-medium text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <div className="pt-4">
            <Link 
              to="/donate" 
              className="button-primary w-full flex justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="h-4 w-4 mr-2" />
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
