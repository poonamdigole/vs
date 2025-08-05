// Competition

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Cog, 
  Settings, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Rocket,
  Cpu,
  Compass,
  Zap,
  Target,
  TrendingUp,
  Shield,
  School,
  NotebookPen,
  GraduationCap,
  Puzzle 
} from 'lucide-react';
import RoboticsLabGallery from '@/components/CompetitionGallery';

const IndustrialAutomation = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Fixed navigation function for request quote
  const handleRequestQuote = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Function to show video modal
  const handleScheduleDemo = () => {
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
                src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-400 via-white to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div> */}
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="mr-2">RoboRush STEM Fest </span><br></br>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mr-2">
                  Robotics - AI - IoT & More
                </span>
              </h1>
              <br></br>
              <br></br>
              <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build - Compete - Evolve<br></br>
                A platform for students to apply what they learn, compete with the best, and grow through experience.
              </p>
              <br></br>
              <br></br>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  onClick={handleRequestQuote}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                >
                  Connect
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleScheduleDemo}
                  className="border-2 border-gray-300 hover:border-orange-600 text-gray-700 hover:text-orange-600 px-8 py-4 text-lg rounded-full group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Competition Demo
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
                src="https://www.youtube.com/embed/5_s2hdCatWE"
                title="Industrial Automation Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              RoboRush Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VS Tech Horizon Presents RoboRush: A 3-Level Tech Challenge for Every Learner
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                icon: Compass,
                title: "Beginning",
                description: "For first-time participants or beginners in robotics and prototyping.",
                details: {
                  "📌 Entry Criteria": [
                    "Open to all students",
                    "No prior experience required"
                  ],
                  "📚 Course Focus": [
                    "Basics of Robotics",
                    "Introduction to Sensors & Actuators",
                    "Simple Prototyping Projects",
                    "Block-based Coding / Arduino",
                    "Hands-on activities using beginner-friendly kits"
                  ],
                  "🎁 Rewards": [
                    "Participation Certificates",
                    "Kits for winners (e.g., line follower kit or sensor pack)",
                    "Trophies & Medals"
                  ],
                  "✅ Eligibility for Next Level": [
                    "Must complete course & pass evaluation to move to Intermediate.",
                  ]
                },
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Cpu,
                title: "Intermediate",
                description: "For students with some experience, ready to explore IoT and advanced prototyping.",
                details: {
                  "📌 Entry Criteria": [
                    "Must complete Beginning Level"
                  ],
                  "📚 Course Focus": [
                    "Intermediate Robotics (Motor Drivers, IR, Ultrasonic Sensors)",
                    "Introduction to IoT - ESP32 & Bluetooth/WiFi Projects",
                    "Arduino IDE Programming",
                    "Intermediate Prototyping"
                  ],
                  "🎁 Rewards": [
                    "Intermediate Robotics/IoT kit for winners",
                    "Trophies + Digital Badges/Certificate",
                    " Internship/summer program opportunities "
                  ],
                  "✅ Eligibility for Next Level": [
                    "Must complete course & submit functional prototype/project.",
                  ]
                },
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Rocket,
                title: "Advanced",
                description: "For tech champs diving into AI, cloud, and full system integration.",
                details: {
                  "📌 Entry Criteria": [
                    "Only for students who have completed Level 2 "
                  ],
                  "📚 Course Focus": [
                    "Advanced AI in Robotics",
                    "IoT & Cloud Integration",
                    "Coding with real-time applications",
                    "Circuit Simulation",
                    "Prototyping using advanced tools",
                    "Final project with AI, Robotics and IoT integration"
                  ],
                  "🎁 Rewards": [
                    "AI + IoT Dev Kits",
                    "Certificate of Excellence",
                    "Trophy + chance to showcase at tech fests or industry events",
                    "Opportunity to mentor/join leadership in next fest"
                  ]
                },
                gradient: "from-green-500 to-emerald-500"
              }

            ].map((solution, index) => (
              <Card key={index} className="font-sans border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group">
                <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}>
                </div>

                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${solution.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>

                  <CardDescription className="text-base text-gray-700 text-center leading-relaxed group-hover:text-gray-900 transition-colors duration-300 mb-6">
                    {solution.description}
                  </CardDescription>
                  
                  <div className="space-y-5 mb-6">
                    {Object.entries(solution.details).map(([section, points], idx) => (
                      <div key={idx}>
                        <h4 className="text-sm text-gray-800 font-medium mb-1">
                          <strong>{section}</strong>
                        </h4>
                        <div className="space-y-2">
                          {points.map((point, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="min-w-[1rem] h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700 leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full">
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
        <section className="py-10 px-4 bg-gradient-to-br from-blue-400 via-white to-orange-400 relative overflow-hidden">
          <div className="mx-auto">
            <div className="text-center mb-5">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Competition Gallery
              </h3>
              <p className="text-xl text-gray-800">
                 A glimpse into the energy, innovation, and brilliance of our RoboRush competitions
              </p>
            </div>
            
            {/* Continuous Scrolling Gallery */}
              <div className="relative overflow-hidden will-change-transform">
                <div className="flex w-max animate-scroll gap-1 will-change-transform">
                  {/* Repeat the same image set twice for smooth loop */}
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <img src="/Competition/compet1.jpg" alt="Competition 1" className="h-48 rounded-md" />
                      <img src="/Competition/compet2.jpg" alt="Competition 2" className="h-48 rounded-md" />
                      <img src="/Competition/compet3.jpg" alt="Competition 3" className="h-48 rounded-md" />
                      <img src="/Competition/compet4.png" alt="Competition 4" className="h-48 rounded-md" />
                      <img src="/Competition/compet5.jpg" alt="Competition 5" className="h-48 rounded-md" />
                      <img src="/Competition/compet6.png" alt="Competition 6" className="h-48 rounded-md" />
                    </React.Fragment>
                  ))}
                </div>
                </div>
          </div>
        </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Impact for Students & Schools
            </h2>
            <p className="text-xl text-gray-600">
              
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-orange-600" />
                  Student Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Learn Robotics, IoT, AI & Prototyping hands-on",
                    "Kits provided at each level for real-world practice",
                    "Progress: Beginner → Intermediate → Advanced",
                    "Win certificates, trophies & awards",
                    "Develop coding, circuit, problem-solving & teamwork skills",
                    "Early exposure to STEM careers"
                  ].map((industry, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Puzzle  className="mr-3 h-6 w-6 text-blue-600" />
                  School Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "No lab needed – complete setup included",
                    "NEP 2020-aligned, promotes skill-based learning",
                    "Positions school as a tech-savvy institution",
                    "Fully managed by RoboRush – no staff involvement",
                    "Potential for future workshops & partnerships",
              
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "100+", label: "Schools Enrolled", icon: School },
              { number: "37+", label: "Innovate Products", icon: TrendingUp },
              { number: "750+", label: "Free Courses Beneficiaries", icon: NotebookPen },
              // { number: "24/7", label: "System Uptime", icon: Zap }
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-800 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get RoboRush Onboard
            </h2>
            <p className="text-xl mb-8 opacity-90">
             Turn your school into a tech innovation hub — host RoboRush today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleRequestQuote}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
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
                  src="/lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png"
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

export default IndustrialAutomation;