import React, { useEffect, useState } from "react";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
  ChevronRight,
  Target, 
  Eye,
  Users
} from 'lucide-react';

// Team Member Data
const teamMembers = [
  {
    name: "Mr. Rushikesh Sule",
    title: "Chief Executive Officer (CEO)",
    description:
      "At VS Tech Horizon, we are not just preparing students for exams, we are preparing them for life. Our goal is to build fearless innovators, bold thinkers, and responsible leaders who can thrive in a tech-driven world. We believe that when students are given the right environment to explore and build, they don’t just learn, they transform. Together, we are creating a generation that’s ready not just to face the future, but to lead it.",
    image: "/heads/ceo.png",
    reverse: true,
    hoverBg: "#446c9e",
  },
  {
    name: "Mr. Vishal Sule",
    title: "Founder",
    description:
      "I founded VS Tech Horizon with a clear purpose, to redefine the way students experience education. In a world driven by technology, it's no longer enough to just learn, we must create, innovate, and lead. Our mission is to give every student the opportunity to turn their curiosity into real skills, their ideas into impact, and their dreams into reality. This is more than education, it’s a movement to build a future powered by young minds who are ready to shape the world.",
    image: "/heads/cofounder.png",
    reverse: false,
    hoverBg: "#446c9e",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const navigateToHomeSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleRequestQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* HEADER */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 py-4">
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              onClick={handleRequestQuote}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN SECTION */}
      <div className="pt-24 px-6 sm:px-10 md:px-20 space-y-16">
        <section className="text-center">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">About Us</h2>
          <p className="text-gray-300 max-w-6xl mx-auto text-lg text-justify">
            At VS Tech Horizon, we believe every student deserves the chance to learn, explore, and innovate, no matter 
            where they come from. That’s why we provide hands-on training in tech and innovation through our customized programs and 
            student friendly labs. Our labs focus on the complete package, where students can think, design, and build their own 
            ideas from scratch. Our mission is to make learning practical, exciting, and accessible to all by working closely with schools 
            and colleges. In our labs, students don’t just follow lessons, they create real projects, solve real problems, and even file 
            patents in their own names. Our vision is to build an inclusive platform where young minds can grow with confidence, 
            turn ideas into inventions, and become leaders of tomorrow.
          </p>
        </section>

        {/* Team Members */}
        <div className="mt-20 space-y-20 px-6 md:px-16 lg:px-32">
          {teamMembers.map((member, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row ${member.reverse ? "md:flex-row-reverse" : ""} items-center gap-10 relative group`}
            >
              {/* Hover Background */}
              <div
                className="absolute -inset-4 z-0 rounded-2xl opacity-0 group-hover:opacity-80  transition-opacity duration-500"
                style={{ backgroundColor: member.hoverBg }}
              ></div>

              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-72 h-72 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 z-10"
              />

              {/* Member Info */}
              <div className="md:w-4/6 bg-[#1f2937] p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-blue-500/40 border border-gray-700 z-10">
                <h2 className="text-2xl font-bold text-blue-400">{member.name}</h2>
                <h3 className="text-md font-medium text-gray-400 mb-3">{member.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base">{member.description}</p>
              </div>
            </section>
          ))}
        </div>

        {/* CORE VALUES */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-blue-500/40 transition duration-300">
            <Target className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Mission</h3>
            <p className="text-gray-400 text-justify">
              At VS Tech Horizon, our mission is to empower students across schools and colleges with the skills, mindset, and support 
              they need to become innovators and entrepreneurs of tomorrow. We bring learning to life through hands-on, project-based 
              experiences focused on STEM concepts using robotics and technology. In our innovation labs, students are encouraged to 
              think creatively, solve real-world problems, and build meaningful projects, with many even securing patents in their own names. 
              Our goal is to nurture curiosity, build confidence, and inspire every student to turn their ideas into real impact.
            </p>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-purple-500/40 transition duration-300">
            <Eye className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Vision</h3>
            <p className="text-gray-400 text-justify">
              Our vision at VS Tech Horizon is to create a world where every student, regardless of background, has the opportunity to 
              learn, grow, and innovate through the power of technology. We aim to build an inclusive platform that not only teaches 
              but inspires, where students can explore their ideas, develop real solutions, and confidently shape the future. 
              Through hands-on learning and a strong focus on creativity, we want to nurture young minds into becoming 
              tomorrow’s inventors, leaders, and changemakers.
            </p>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-green-500/40 transition duration-300">
            <Users className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Impact</h3>
            <p className="text-gray-400 text-justify">
              At VS Tech Horizon, we’re transforming how students from schools and colleges engage with learning. Through our hands-on 
              programs and innovation labs, students develop real skills, explore new technologies, and gain the confidence to think 
              independently and creatively. We’ve seen students grow into curious learners, problem-solvers, and future-ready leaders. 
              Our focus is on building a generation that not only understands technology but knows how to use it to make a difference.
            </p>
          </div>
        </div>
      </div>

    <br></br>
    <br></br>
    <br></br>

      {/* ✅ Footer Section with Fixed Navigation */}
            <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
              <div className="w-full px-4 md:px-12 relative z-10">
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

export default AboutUs;
