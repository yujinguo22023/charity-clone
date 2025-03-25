
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How Urban Forests Improve City Living',
    excerpt: 'Trees in cities provide critical ecosystem services that improve air quality, reduce urban heat, and enhance wellbeing.',
    date: 'May 15, 2023',
    image: '/images/urban-forest.jpg',
    category: 'Biodiversity',
    link: '/blog/urban-forests',
  },
  {
    id: 2,
    title: 'The Future of Renewable Energy',
    excerpt: 'New innovations in solar and wind technology are making renewable energy more accessible and affordable than ever before.',
    date: 'April 22, 2023',
    image: '/images/renewable-energy.jpg',
    category: 'Climate Solutions',
    link: '/blog/renewable-energy-future',
  },
  {
    id: 3,
    title: 'Protecting Ocean Health Through Policy',
    excerpt: 'Policy changes at national and international levels are crucial for preserving marine ecosystems and biodiversity.',
    date: 'March 8, 2023',
    image: '/images/ocean-policy.jpg',
    category: 'Environmental Rights',
    link: '/blog/ocean-health-policy',
  },
];

const BlogSection = () => {
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
          // Animate section title first, then each blog post with a delay
          setTimeout(() => {
            setAnimatedItems((prev) => [...prev, 0]);
            
            blogPosts.forEach((post, index) => {
              setTimeout(() => {
                setAnimatedItems((prev) => [...prev, post.id]);
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
    <section ref={sectionRef} className="section-container">
      <div 
        className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700 ease-out ${
          isAnimated(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Latest News
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Stories and Updates
          </h2>
          <p className="max-w-2xl text-lg text-gray-600">
            Stay informed with the latest environmental news, research findings, and success stories.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Link 
            to="/blog" 
            className="button-secondary"
          >
            View All Posts
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 transform ${
              isAnimated(post.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link to={post.link} className="block h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block py-1 px-2 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm ml-auto">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {post.date}
                </div>
              </div>
              <Link to={post.link}>
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-900 hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <Link 
                to={post.link} 
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
