
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative py-20 bg-green-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 0H100V100H0V0ZM50 50C77.6142 50 100 27.6142 100 0H0C0 27.6142 22.3858 50 50 50ZM50 50C22.3858 50 0 72.3858 0 100H100C100 72.3858 77.6142 50 50 50Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
          Stay Connected With Our Newsletter
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates on our latest campaigns, events, and ways to get involved in creating a sustainable future.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60"
                disabled={isSubmitting || isSuccess}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-green-700 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
          
          {error && (
            <p className="mt-2 text-sm text-red-200">{error}</p>
          )}
          
          {isSuccess && (
            <p className="mt-2 text-sm text-white/90 animate-fade-in">
              Thank you for subscribing! Check your inbox for a confirmation email.
            </p>
          )}
          
          <p className="mt-3 text-sm text-white/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
