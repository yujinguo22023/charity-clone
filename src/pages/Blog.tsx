
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - David Suzuki";
    
    return () => {
      // Cleanup
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Climate Change: The Time to Act is Now",
      excerpt: "The impacts of climate change are accelerating. Here's what we can do about it.",
      date: "April 15, 2023",
      author: "David Suzuki",
      category: "Climate",
      image: "/images/climate-solutions.jpg",
      slug: "climate-change-time-to-act"
    },
    {
      id: 2,
      title: "Protecting Our Oceans: A Blueprint for Conservation",
      excerpt: "Our oceans are facing unprecedented threats. Here's how we can protect them.",
      date: "March 22, 2023",
      author: "Jane Smith",
      category: "Conservation",
      image: "/images/ocean-policy.jpg",
      slug: "protecting-our-oceans"
    },
    {
      id: 3,
      title: "Urban Forests: Nature's Solution to City Living",
      excerpt: "Urban forests provide critical ecosystem services in our cities.",
      date: "February 10, 2023",
      author: "Michael Chen",
      category: "Biodiversity",
      image: "/images/urban-forest.jpg",
      slug: "urban-forests-natures-solution"
    },
    {
      id: 4,
      title: "Renewable Energy Revolution: What's Next?",
      excerpt: "The rapid transformation of our energy systems is already underway.",
      date: "January 5, 2023",
      author: "Sarah Johnson",
      category: "Energy",
      image: "/images/renewable-energy.jpg",
      slug: "renewable-energy-revolution"
    },
    {
      id: 5,
      title: "Biodiversity Crisis: Why It Matters",
      excerpt: "The loss of biodiversity threatens the natural systems that support all life.",
      date: "December 12, 2022",
      author: "David Suzuki",
      category: "Biodiversity",
      image: "/images/biodiversity.jpg",
      slug: "biodiversity-crisis"
    },
    {
      id: 6,
      title: "Environmental Rights: A Foundation for Justice",
      excerpt: "Environmental rights are human rights. We need to protect them.",
      date: "November 30, 2022",
      author: "Alex Thompson",
      category: "Environmental Rights",
      image: "/images/environmental-rights.jpg",
      slug: "environmental-rights-foundation"
    }
  ];

  const categories = [
    { name: "Climate", count: 12 },
    { name: "Biodiversity", count: 8 },
    { name: "Conservation", count: 6 },
    { name: "Energy", count: 9 },
    { name: "Environmental Rights", count: 5 },
    { name: "Sustainability", count: 7 }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="mb-6 md:mb-0">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">Blog</h1>
                <p className="text-xl text-gray-700 max-w-2xl">
                  Insights, stories and perspectives on environmental issues.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Tag className="h-3 w-3 mr-1" />
                          <span>{post.category}</span>
                        </div>
                        <CardTitle className="text-xl hover:text-green-600 transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="text-green-600 font-medium hover:text-green-700 transition-colors inline-flex items-center"
                        >
                          Read more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No articles found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button 
                          onClick={() => setSearchTerm(category.name)}
                          className="flex items-center justify-between w-full text-left hover:text-green-600 transition-colors py-1"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-500">{category.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 bg-green-50 rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">Subscribe to Our Blog</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest articles and updates delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    <button type="submit" className="button-primary w-full">
                      Subscribe
                    </button>
                  </form>
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

export default Blog;
