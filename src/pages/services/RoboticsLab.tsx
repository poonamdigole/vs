//Lab

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bot,
  Cpu,
  Users,
  BookOpen,
  Settings,
  Zap,
  Award,
  CheckCircle,
  XCircle,
  Star,
  Play,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
  ChevronRight
} from 'lucide-react';
import RoboticsLabGallery from '@/components/RoboticsLabGallery';

const RoboticsLab = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleRequestQuote = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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

  const handleLabDemo = () => {
    setShowVideo(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img 
                    src="./lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                    alt="VS Tech Horizon Logo" 
                    className="h-10 w-auto cursor-pointer"
                    onClick={() => navigateToHomeSection('home')}
                  />
                  <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                    onClick={handleRequestQuote}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#f0f9ff] via-[#cfe8ff] to-[#a0c4ff] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart Tech Labs<br/>
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                   Robotics - AI - IoT & More<br/>
                </span>
                <br></br>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your educational institution with our comprehensive robotics laboratory solutions, 
                featuring cutting-edge equipment, curriculum development, and expert training programs.
              </p>
              <br></br>
              <br></br>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  onClick={handleRequestQuote}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleLabDemo}
                    className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg rounded-full group"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Lab Demo
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
                src="https://www.youtube.com/embed/fhmrpV5-m_Y"
                title="Lab Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lab Setup Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to establish a world-class robotics education program
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Advanced Labs",
                description: <strong>Robotics - AI - IoT - Drone - Prototyping</strong>,
                features: ["3D Printer", "5000+ Electronic Components", "14 Project Kits", "Master - AI Humanoid Robot", "Drones" , "Coustominsed syllabus", "Trainer"],
                color: "text-blue-600",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Cpu,
                title: "Intermediate Lab",
                description: <strong>Robotics - IoT - Prototyping</strong>,
                features: ["3D Printer", "5000+ Electronic Components", "10 Project Kits", "Coustominsed syllabus", "Trainer"],
                color: "text-purple-600",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: BookOpen,
                title: "Basic Lab",
                description: <strong>Robotics - IoT</strong>,
                features: ["3D Printer", "2000+ Electronic Components", "6 Project Kits", "Coustominsed syllabus", "Trainer"],
                color: "text-green-600",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Settings,
                title: "Customised Lab",
                description: <strong>As Per Your Asked</strong>,
                features: ["Choose from a wide range of technologies: Robotics, AI, IoT, Drones, 3D Printing, and more", "Curriculum-Aligned Content", "Grade-Wise Structured Modules (Basic To Advanced)", "Flexible Setup Options", "Trainer Support"],
                color: "text-green-600",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: Zap,
                title: "Kit Based Lab",
                description: <strong>Select Your Kit and Design Your Own Tech Lab</strong>,
                features: ["Robotics Kit", "IoT Kit", "AI + Robotics Kit", "Robotics + IoT Kit"],
                color: "text-green-600",
                gradient: "from-cyan-500 to-teal-500"
              }
              
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group">
                <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent> */}
                {feature.features && (
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div>

                      {/* Features header */}
                      <p className="text-lg font-semibold text-gray-800 text-base underline mb-4">Tech Covered</p>

                      {/* Description text */}
                      <p className="text-gray-1000 text-lg mb-4">
                        {feature.description}
                      </p>
                      
                      {/* Features list */}
                      <div className="space-y-2 mb-6">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="min-w-[1rem] h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      

      {/* Gallery Section */}
        <section className="py-10 px-4 bg-gradient-to-br from-[#f0f9ff] via-[#cfe8ff] to-[#a0c4ff] relative overflow-hidden">
          <div className="mx-auto">
            <div className="text-center mb-5">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Lab Gallery
              </h3>
              <p className="text-xl text-gray-800">
                Our robotics labs in action across different institutions
              </p>
            </div>

            {/* Continuous Scrolling Gallery */}
            <div className="relative overflow-hidden will-change-transform">
              <div className="flex w-max animate-scroll gap-1 will-change-transform">
                {/* Repeat the same image set twice for smooth loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <img src="./Labs/lab1.png" alt="Lab 1" className="h-48 rounded-md" />
                    <img src="./Labs/lab2.png" alt="Lab 2" className="h-48 rounded-md" />
                    <img src="./Labs/lab3.png" alt="Lab 3" className="h-48 rounded-md" />
                    <img src="./Labs/lab4.png" alt="Lab 4" className="h-48 rounded-md" />
                    <img src="./Labs/lab5.png" alt="Lab 5" className="h-48 rounded-md" />
                    <img src="./Labs/lab6.png" alt="Lab 6" className="h-48 rounded-md" />
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
                Impact of VS Lab Setup
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Before Section */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Bot className="mr-3 h-6 w-6 text-blue-600" />
                    Before
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 list-disc pl-1">
                    {[
                      "Technology concepts are taught only through theory.",
                      "Students lack hands-on exposure to real-world tools.",
                      "No engagement with Robotics, AI, IoT, or Coding.",
                      "STEM education is limited to textbook knowledge.",
                      "Low participation in tech events or innovation challenges.",
                      "Teachers have minimal support for practical teaching.",
                      "School struggles to stand out as a tech-forward institution."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
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
                    After
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 list-disc pl-1">
                    {[
                      "Students work on real-life projects in Robotics, AI, IoT & more.",
                      "Concepts become easier through practical, hands-on learning.",
                      "Increased student interest in coding, electronics, and innovation.",
                      "Strong foundation in STEM subjects with interdisciplinary learning.",
                      "School gains visibility through exhibitions, fairs, and competitions.",
                      "Teachers receive proper training and tech support.",
                      "The school is recognized as a Smart, Future-Ready Campus.",
                      "Students develop 21st-century skills and career readiness."
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
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Lab Reviews 
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-200">
              Think - Build - Make It Happen
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sakshi Bhor",
                role: "Student",
                content: "It provided a great mix of theoretical knowledge and practical applications, allowing participants to work with real-world AI models and robotic systems. The instructors were knowledgeable, and the interactive sessions helped reinforce learning. Overall, it was a well-organized workshop that offered valuable skills and a glimpse into the future of AI-driven automation.Thank you so much all the team members",
                image: "SB",
                rating: 5
              },
              {
                name: "Vishal Kamble",
                role: "Student",
                content: "Today, Your Company's Co-founder & Members visited our College 'Samarth College of Engineering Belhe' & taken the Workshop of 'Robotics & AI', I learn about some IOT based Projects & Learn the concept of AI technologies. I Gain the Knowledge about your Company & Projects, Besides of Workshop I also got to know how to be a AI Engineer & also got idea about How to work in AI Industry(Field).So thank you sir for taking this Workshop!!",
                image: "VK",
                rating: 5
              },
              {
                name: "ADITYA SHINDE",
                role: "Student",
                content: "The AI and Robotics workshop was highly insightful, covering key concepts in artificial intelligence and hands-on robotics projects. The interactive sessions and practical demonstrations made complex topics easy to grasp. Overall, it provided a great learning experience, fostering innovation and problem-solving skills.",
                image: "AS",
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

      {/* CTA Section End */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Lab?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a customized quote and consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleRequestQuote}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer Section Starts Here - Placed Inside Return */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <img
                  src="./lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png"
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
                { name: "Contact", action: () => navigateToHomeSection('contact') },
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
                      Gat No. 621, KB Plaza, Wagholi, Kesnand, Tal. Haveli, Dist. Pune – 412207
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

export default RoboticsLab;