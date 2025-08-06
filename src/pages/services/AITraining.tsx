// Workshop

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Brain, 
  Cpu, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Mail,
  Phone,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
  ChevronRight,
  Zap,
  Bot,
  MapPin,
  Target,
  TrendingUp
} from 'lucide-react';
import { useLocation } from "react-router-dom";

const AITraining = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showVideo, setShowVideo] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleContactUs = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHomeSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure page loads
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };


  const handleWorkshopDemo = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="../lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                alt="VS Tech Horizon Logo" 
                className="h-10 w-auto cursor-pointer"
                onClick={() => navigateToHomeSection('home')}
              />
              <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleContactUs}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-200 via-white to-purple-200 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div> */}
          {/* <div className="absolute top-40 right-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div> */}
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Training & Development Program<br></br>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                   Robotics - AI - IoT & More
                </span>
                <br />
              </h1>
              <br></br>
              <br></br>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering Students and Teachers through Skill-Based Workshops, Seminars, and Hands-On Tech Training. Upskilling students and teachers with real-world experience in new-age technology domains.


              </p>
              <br></br>
              <br></br>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                  onClick={handleContactUs}
                >
                  Host
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleWorkshopDemo}
                  className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 text-lg rounded-full group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Workshop Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setShowVideo(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/Uz9xXEXzkxQ"
                title="Workshop Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    {/* Training Programs Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pick the perfect format, from a spark of interest to in-depth workshops and skill-building sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "1-Day workshop",
                description:"Introductory session to spark curiosity and give students a hands-on experience in tech like AI, Robotics, or IoT.",
                color: "text-blue-600",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "3-Days Workshop",
                description:"Skill-building program where students dive deeper, complete mini-projects, and gain confidence in using new technologies.",
                color: "text-purple-600",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "5-Days Workshop",
                description:"Intensive learning journey with in-depth training, real-world project creation, and presentations to showcase what they've built.",
                color: "text-green-600",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group"
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>

                {/* Card Header */}
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto mb-4 p-4 bg-gradient-to-br ${program.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="flex-1 flex flex-col justify-center text-center px-4 pb-6">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Section */}
              <section className="py-10 px-4 bg-gradient-to-br from-blue-200 via-white to-purple-200 relative overflow-hidden">
                <div className="mx-auto">
                  <div className="text-center mb-5">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Training Sessions Gallery
                    </h3>
                    <p className="text-xl text-gray-800">
                      Our programs in action across different institutions
                    </p>
                  </div>
      
                  {/* Continuous Scrolling Gallery */}
                  <div className="relative overflow-hidden will-change-transform">
                    <div className="flex w-max animate-scroll gap-1 will-change-transform">
                      {/* Repeat the same image set twice for smooth loop */}
                      {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                          <img src="../Workshop/workshop1.jpg" alt="workshop 1" className="h-48 rounded-md" />
                          <img src="../Workshop/workshop2.jpg" alt="workshop 2" className="h-48 rounded-md" />
                          <img src="../Workshop/workshop3.jpg" alt="workshop 3" className="h-48 rounded-md" />
                          <img src="../Workshop/workshop4.jpg" alt="workshop 4" className="h-48 rounded-md" />
                          <img src="../Workshop/workshop5.jpg" alt="workshop 5" className="h-48 rounded-md" />
                          <img src="../Workshop/workshop6.jpg" alt="workshop 6" className="h-48 rounded-md" />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

      {/* Specifications Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Program Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Before Section */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Bot className="mr-3 h-6 w-6 text-blue-600" />
                    Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 list-disc pl-1">
                    {[
                      "Hands-on learning with AI, Robotics, IoT, etc.",
                      "Build real projects and boost creativity.",
                      "Improve problem-solving and tech skills.",
                      "Get certificates and showcase talent.",
                      "Prepare for future careers.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* After Section */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Cpu className="mr-3 h-6 w-6 text-purple-600" />
                    Teachers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 list-disc pl-1">
                    {[
                      "Learn to teach modern tech easily.",
                      "Get trained through TTP & FTP programs.",
                      "Access ready-to-use teaching resources.",
                      "Become a certified tech trainer.",
                      "Stay updated and support student innovation.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* Success Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10000+", label: "Students Trained", icon: Users },
              { number: "15+", label: "Experts", icon: Brain },
              { number: "112+", label: "Sessions Delivered", icon: TrendingUp },
              { number: "15+", label: "Industry Partners", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
            <section className="py-20 px-4 bg-gray-50">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
                    Workshop Reviews 
                  </h2>
                  <p className="text-xl text-gray-600 animate-fade-in delay-200">
                    Feedback that fuels us
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Pooja Bangar",
                      role: "Student",
                      content: "Robotics and AI workshop was totally amazing.The instructor explained concepts clearly, and the hands-on sessions made learning practical and engaging.",
                      image: "PB",
                      rating: 5
                    },
                    {
                      name: "SUGAT KATKE",
                      role: "Student",
                      content: "The two-day seminar on Artificial Intelligence and Robotics was highly informative and engaging. It showcased the latest advancements, real-world applications, and industry trends through expert talks and interactive sessions. A well-organized event, it inspired participants to explore the transformative potential of AI and robotics.",
                      image: "SK",
                      rating: 5
                    },
                    {
                      name: "Tanishk Kaundal",
                      role: "Student",
                      content: "All your AI and Robotics need end here if you are in search of great staff, minds and hospitality your needs end right there. That should always be your go to place. Overall Great🫶🫶.",
                      image: "TK",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group bg-white animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-lg">
                              {testimonial.image}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                            <div className="flex space-x-1 mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="h-8 w-8 text-blue-200 mb-2" />
                        <CardDescription className="text-gray-700 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          "{testimonial.content}"
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upskill with Us Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Organize industry-aligned workshops and seminars at your institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button 
                size="lg" 
                onClick={handleContactUs}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enroll Now
              </Button> */}
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleContactUs}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer Section Starts Here - Placed Inside Return */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-1 2">
            {/* Company Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <img
                  src="../lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png"
                  alt="VS Tech Horizon Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold" style={{ fontFamily: 'Times, serif' }}>
                  VS Tech Horizon Pvt. Ltd.
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                From Imagination to Innovation - We Make It Happen!
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/people/VS-Tech-Horizon/61558183835189/?_rdr", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/vstechhorizon/", label: "Instagram" },
                  { icon: X, href: "https://x.com/VS_tech_horizon", label: "X" },
                  { icon: Youtube, href: "https://www.youtube.com/@VSTechHorizon", label: "YouTube" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/vs-tech-horizon-pvt-ltd/posts/?feedView=all", label: "LinkedIn" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="animate-fade-in delay-200">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", action: () => navigateToHomeSection('about') },
                  {
                    name: "Services", children: [
                      { name: "Lab Setup", action: () => navigate('/services/robotics-lab') },
                      { name: "Workshop", action: () => navigate('/services/ai-training') },
                      { name: "Competition", action: () => navigate('/services/industrial-automation') }
                    ]
                  },
                  {
                    name: "Portfolio",
                    action: () => navigate('/portfolio'),
                    children: [
                      { name: "Master", action: () => navigate('/services/Master') },
                      { name: "Bionic Hand", action: () => navigate('/services/Bionic_hand') },
                      { name: "Workshops & Seminars", action: () => navigate('/services/dof') },
                      { name: "Competition", action: () => navigate('/services/hourglass') },
                      { name: "Industrial Visit", action: () => navigate('/services/otto') },
                      { name: "Award", action: () => navigate('/services/mhr') }
                    ]
                  },
                  { name: "Contact", action: () =>navigateToHomeSection('contact') },
                ].map((link) => (
                  <li key={link.name}>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={
                          link.children
                            ? () => toggleDropdown(link.name)
                            : link.action
                        }
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        <ChevronRight
                          className={`h-4 w-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-90' : ''} ${link.children ? '' : 'opacity-0 group-hover:opacity-100'}`}
                        />
                        <span>{link.name}</span>
                      </button>
                    </div>

                    {link.children && openDropdown === link.name && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <button
                              onClick={child.action}
                              className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center space-x-2 group"
                            >
                              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <span>{child.name}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in delay-300">
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {["Lab Setup", "Workshop", "Competition"].map((service) => (
                  <li key={service} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in delay-400">
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">support@vstechhorizon.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-medium">+91 9325360357</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white font-medium">
                      Gat No. 621, KB Plaza, Wagholi, Kesnand, Tal. Haveli, Dist. Pune - 412207
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400">&copy; 2024 VS Tech Horizon Pvt. Ltd. All rights reserved.</p>
                <div className="flex space-x-6">
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Privacy Policy
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Terms of Service
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
    </div>
  );
};

export default AITraining;