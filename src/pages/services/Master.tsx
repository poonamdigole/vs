import React, { useEffect, useState  } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
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

const Master = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  // This function now handles navigation to home page sections
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRequestQuote = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER FROM ROBOTICS LAB */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 py-4">
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              onClick={handleRequestQuote}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 px-4 py-12 md:px-24 lg:px-48">
        <header className="text-center mb-12 bg-gradient-to-br from-blue-300 via-white to-blue-500 p-8 rounded-xl">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Master 2.0</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Raspberry Pi-Powered Humanoid for AI & Robotics Learning.
          </p>
        </header>

        <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/assets/master-robot.jpg"
                alt="Master 2.0 Robot"
                className="w-full max-w-sm h-[400px] object-cover mx-auto rounded-xl shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Master 2.0 is an interactive humanoid robot developed by VS Tech Horizon, fully powered by the 
                Raspberry Pi platform. Designed for educational use, this project combines the power of Artificial Intelligence (AI) and 
                Robotics to offer hands-on learning. Inspired by the design of Aster, Master 2.0 listens, responds, and 
                performs tasks based on voice or command input, making it a perfect example of real-time human-robot interaction in the classroom.
              </p>

              {/* Key Features now embedded here */}
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Raspberry Pi Powered Core - Flexible, and perfect for edge computing.</li>
                <li>Understands commands and responds smartly.</li>
                <li>Perfect for hands-on learning in robotics and AI.</li>
                <li>Performs gestures for better engagement.</li>
                <li>Makes learning fun with interactive Q&A and tasks.</li>
              </ul>
            </div>
          </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <p className="text-gray-700">
            At VS Tech Horizon, we believe students learn best when they build, code, and interact with what they create. 
            Master 2.0 reflects our mission to bring advanced AI and robotics into classrooms in an affordable, accessible, and engaging way. It helps students explore real-world technologies, develop critical thinking, 
            and prepare for future careers in tech, not just as learners, but as innovators.
          </p>
        </section>

        <div className="text-center">
          <Button className="text-white bg-blue-700 hover:bg-blue-800" onClick={handleRequestQuote}>Inquire About Master 2.0</Button>
        </div>

      </div>
      
      {/* ✅ Footer Section with Fixed Navigation */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="w-full px-4 md:px-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
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

            {/* Footer Links - FIXED */}
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
                  action: () => navigateToHomeSection('portfolio'),
                  children: [
                    { name: "Master", action: () => navigate('/services/master') },
                    { name: "Bionic Hand", action: () => navigate('/services/bionic_hand') },
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

export default Master;