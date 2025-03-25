
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display font-bold text-xl mb-6">David Suzuki</h3>
            <p className="text-gray-400 mb-6">
              Working to protect the diversity of nature and our quality of life, now and for the future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/fundraise" className="text-gray-400 hover:text-white transition-colors">
                  Fundraise
                </Link>
              </li>
              <li>
                <Link to="/corporate-giving" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Giving
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/planned-giving" className="text-gray-400 hover:text-white transition-colors">
                  Planned Giving
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">
                  219 - 2211 West 4th Avenue<br />
                  Vancouver, BC V6K 4S2
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@davidsuzuki.org
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} David Suzuki. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-500 hover:text-white text-sm transition-colors">
                Accessibility
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
