
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, Link as LinkIcon, FileText } from 'lucide-react';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Resources - David Suzuki";
    
    return () => {
      // Cleanup
    };
  }, []);

  const reports = [
    {
      title: "Climate Solutions Report",
      description: "Comprehensive analysis of climate change solutions",
      date: "March 2023",
      type: "PDF",
      size: "2.4 MB",
      link: "#"
    },
    {
      title: "Biodiversity Conservation Strategy",
      description: "Framework for protecting and enhancing biodiversity",
      date: "November 2022",
      type: "PDF",
      size: "3.1 MB",
      link: "#"
    },
    {
      title: "Renewable Energy Transition Plan",
      description: "Roadmap for transitioning to renewable energy",
      date: "January 2023",
      type: "PDF",
      size: "1.8 MB",
      link: "#"
    }
  ];

  const toolkits = [
    {
      title: "Community Climate Action Toolkit",
      description: "Resources for community-led climate initiatives",
      date: "June 2022",
      link: "#"
    },
    {
      title: "School Sustainability Guide",
      description: "Guide for implementing sustainability in schools",
      date: "August 2022",
      link: "#"
    },
    {
      title: "Corporate Environmental Responsibility Guide",
      description: "Framework for corporate sustainability",
      date: "December 2022",
      link: "#"
    }
  ];

  const videos = [
    {
      title: "Climate Change: Understanding the Science",
      description: "An overview of the science behind climate change",
      duration: "18:24",
      link: "#"
    },
    {
      title: "Biodiversity: Why It Matters",
      description: "The importance of biodiversity for ecosystem health",
      duration: "12:55",
      link: "#"
    },
    {
      title: "Renewable Energy: The Path Forward",
      description: "The benefits and challenges of renewable energy",
      duration: "21:10",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">Resources</h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Explore our collection of reports, guides, toolkits and multimedia resources to help you understand environmental issues and take action.
            </p>
            
            <Tabs defaultValue="reports" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="reports">Reports & Publications</TabsTrigger>
                <TabsTrigger value="toolkits">Toolkits & Guides</TabsTrigger>
                <TabsTrigger value="videos">Videos & Webinars</TabsTrigger>
              </TabsList>
              
              <TabsContent value="reports" className="space-y-4">
                {reports.map((report, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{report.title}</CardTitle>
                          <CardDescription className="mt-1">{report.description}</CardDescription>
                        </div>
                        <a 
                          href={report.link} 
                          className="button-secondary !py-1.5 !px-3 flex items-center"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>Published: {report.date}</span>
                        <span>Format: {report.type}</span>
                        <span>Size: {report.size}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="toolkits" className="space-y-4">
                {toolkits.map((toolkit, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{toolkit.title}</CardTitle>
                          <CardDescription className="mt-1">{toolkit.description}</CardDescription>
                        </div>
                        <a 
                          href={toolkit.link} 
                          className="button-secondary !py-1.5 !px-3 flex items-center"
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          View
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Published: {toolkit.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="videos" className="space-y-4">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{video.title}</CardTitle>
                          <CardDescription className="mt-1">{video.description}</CardDescription>
                        </div>
                        <a 
                          href={video.link} 
                          className="button-secondary !py-1.5 !px-3 flex items-center"
                        >
                          <LinkIcon className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Duration: {video.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
