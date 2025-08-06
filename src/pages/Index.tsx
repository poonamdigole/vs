import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Award, 
  Medal, 
  Users, 
  School, 
  Lightbulb, 
  Target, 
  Heart,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronRight,
  Cpu,
  Zap,
  Cog,
  Settings,
  Trophy,
  Crown,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Play,
  CheckCircle,
  Quote,
  Calendar,
  Clock,
  User,
  MessageSquare,
  TrendingUp,
  Shield,
  Rocket,
  Puzzle,
  BookOpen,
  Globe,
  ExternalLink
} from 'lucide-react';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

const [openDropdown, setOpenDropdown] = useState(null);

const toggleDropdown = (name) => {
  setOpenDropdown((prev) => (prev === name ? null : name));

  
};
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <img 
                src="./lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                alt="VS Tech Horizon Logo" 
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => scrollToSection('home')}
              />
              <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            {/* <Button className="bg-blue-00 hover:bg-blue-o00 text-white px-6 py-2 rounded-full">
              
            </Button> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-300 via-white to-blue-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div> */}
          {/* <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div> */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-200 opacity-30 blur-2xl z-0"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex justify-center items-center mb-8">
                <img 
                  src="./lovable-uploads/fdc0c3ef-d2b3-4ae6-b208-5aa7c1730f95.png" 
                  alt="VS Tech Horizon Logo" 
                  className="h-20 w-auto mr-4"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-gray-1000" style={{fontFamily: 'Times, serif'}}>
                  VS Tech Horizon Pvt. Ltd.
                </h1>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Leading the Future of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Robotics & AI
                </span>
              </h2>
              <br/>
              <br/>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
                Empowering education and industry through cutting-edge robotics, AI innovation, future-ready labs, 
                and comprehensive training programs that shape students for tomorrow's challenges.
              </p>
              <br/>
              <br/>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl group"
                  onClick={() => scrollToSection('services')}
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg rounded-full group"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
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
                src="https://www.youtube.com/embed/hbMqVF1OdS8"
                title="Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Section */}
              <section className="">
              <div className="">
                {/* Continuous Scrolling Gallery */}
                <div className="relative overflow-hidden">
                  <div className="flex w-max animate-scroll gap-0.5 will-change-transform">
                    {/* Repeat the same image set twice for smooth loop */}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex gap-0.5">
                        <img src="./assets/Workshop2.jpg" alt="Competition 1" className="h-48" />
                        <img src="./assets/Award2.jpg" alt="Competition 2" className="h-48" />
                        <img src="./assets/Workshop4.jpg" alt="Competition 3" className="h-48" />
                        <img src="./assets/Visit22.jpg" alt="Competition 4" className="h-48" />
                        <img src="./assets/workshop5.jpg" alt="Competition 5" className="h-48" />
                        <img src="./assets/lab4.png" alt="Competition 6" className="h-48" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

              {/* Gallery Section */}
              <section className="mt-0.5">
                <div className="">
                  
                  {/* Continuous Scrolling Gallery */}
                    <div className="relative overflow-hidden will-change-transform">
                      <div className="flex w-max animate-scroll gap-0.5  will-change-transform">
                        {/* Repeat the same image set twice for smooth loop */}
                        {[...Array(2)].map((_, i) => (
                          <React.Fragment key={i}>
                            <img src="./Competition/compet1.jpg" alt="Competition 1" className="h-48 " />
                            <img src="./Competition/compet2.jpg" alt="Competition 2" className="h-48 " />
                            <img src="./Competition/compet3.jpg" alt="Competition 3" className="h-48 " />
                            <img src="./Competition/compet4.png" alt="Competition 4" className="h-48 " />
                            <img src="./Competition/compet5.jpg" alt="Competition 5" className="h-48 "/>
                            <img src="./Competition/compet6.png" alt="Competition 6" className="h-48 " />
                          </React.Fragment>
                        ))}
                      </div>
                      </div>
                </div>
              </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose VS Tech Horizon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              We combine cutting-edge technology with practical education solutions to create meaningful impact
            </p>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  icon: Shield,
                  title: "Trusted by 100+ Institutions",
                  description: "Our proven track record speaks for itself with successful implementations across educational institutions worldwide.",
                  color: "text-green-600"
                },
                {
                  icon: Rocket,
                  title: "Cutting-Edge Technology",
                  description: "Lead the future with cutting-edge Robotics and AI, our Future-Ready STEM Labs equip your students with the tools of tomorrow, today.",
                  color: "text-blue-600"
                },
                {
                  icon: Users,
                  title: "Expert Support Team",
                  description: "From planning to execution, our team of robotics engineers, AI experts, and educational consultants ensures smooth setup, training, and long-term support.",
                  color: "text-purple-600"
                },
                {
                  icon: Puzzle,
                  title: "End-to-End Implementation",
                  description: "We handle everything, from lab setup and curriculum design to teacher training and maintenance, delivering a complete educational transformation.",
                  color: "text-orange-600"
                },
                {
                  icon: BookOpen,
                  title: "Curriculum-Aligned Solutions",
                  description: "Our programs and labs are designed to align with national education boards and NEP guidelines, helping institutions meet academic goals while promoting 21st-century skills.",
                  color: "text-yellow-600"
                },
                
                {
                  icon: Globe,
                  title: "Real-World Skill Development",
                  description: "We go beyond theory—hands-on labs and AI tools build real-world skills in coding, electronics, automation, and problem-solving for today’s tech-driven world.",
                  color: "text-pink-600"
                }

              ].map((feature, index) => (
                                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group animate-fade-in flex flex-col justify-between"
                  style={{ animationDelay: `${index * 200}ms`, minHeight: '50%' }}
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  {/* force content to align vertically */}
                  <CardContent className="flex-grow flex items-center justify-center px-4">
                    <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Education Through Real-World Innovation
              </h2>
              <br/>
              <br/>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               VS Tech Horizon is a high-performance tech company delivering practical solutions in robotics, AI, IoT, software development, automation, 
               and hands-on STEM labs. With every lab, product, and platform, we focus on quality, scalability, and relevance. Trusted by institutions across Globe, 
               we deliver solutions that work, right now, where it matters.
              </p>
              <br/>
              <br/>
              <div className="space-y-4 mb-8">
                {[
                  "We set up fully equipped Robotics, AI, IoT, Prototyping and STEM labs customized for schools, colleges, and universities worldwide.",
                  "We conduct structured workshops, seminars, and industrial visits focused on hands-on, project-based learning, backed by expert mentorship and ongoing support.",
                  "We actively work on R&D and innovation, delivering industry-relevant projects and real-world tech solutions across education and engineering domains."
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              {<Button
              onClick={() => navigate("/about-us")} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full" >
                Learn More About Us
              </Button>}
            </div>
              <div className="relative animate-fade-in delay-300">
                {/* <div className="rounded-3xl p-8 shadow-2xl"> */}
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <img
                      src="./assets/aster.jpeg"
                      alt="AI Robot Illustration"
                      className="w-full h-auto object-cover"
                    />
                  {/* </div> */}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Comprehensive robotics and AI solutions designed for educational and industrial excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: School,
                title: "Lab Setup",
                description: "Complete laboratory installation with cutting-edge robots, sensors, AI, drone technology, prototyping tools, and programming environments — all tailored for modern, hands-on educational excellence.",
                features: ["Robotics & IoT Lab", "Artificial Intelligence Lab", "Drone Lab", "Prototyping Lab"],
                link: "/services/robotics-lab",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Brain,
                title: "Workshop",
                description: "Comprehensive artificial intelligence workshops with hands-on robotics integration and machine learning applications.",
                features: ["Robotics & AI Workshop", "Programming Workshop", "Cloud DevOps Workshop", "IoT Workshop"],
                link: "/services/ai-training",
                gradient: "from-purple-500 to-green-500"
              },
              {
                icon: Trophy,
                title: "Competition",
                description: "The ROBORUSH STEM Fest isn't just a competition — it's a movement by VS Tech Horizon to inspire young minds, transform classrooms into innovation hubs, and nurture tomorrow’s tech leaders.",
                features: ["4th - 10th Grade Hackathon", "Robotics & STEM Competition", "Creativity | Coding | Innovation"],
                link: "/services/industrial-automation",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group overflow-hidden animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    {/* <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button> */}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-auto transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-300 to-blue-400">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 font-bold max-w-3xl mx-auto animate-fade-in delay-200">
              Explore our successful implementations and innovative projects across educational institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Master 2.0",
                slug: "master-2-0",
                description: "Master 2.0 is an advanced humanoid robot designed for education, offering hands-on learning in robotics, AI, and STEM.",
                image: `${process.env.PUBLIC_URL}/assets/Master.jpg`,
                category: "Project",
                // impact: "300% increase in STEM enrollment",
                link: "/services/master"
              },
              {
                title: "Bionic Hand",
                description: "An intelligent robotic hand designed to see, detect, and act, controlled entirely through AI and camera vision.",
                image: "../assets/Bionic.jpg",
                category: "Project",
                // impact: "500+ students trained",
                link: "/services/bionic_hand"
              },
              
              {
                title: "Workshops & Seminars",
                description: "Unlock real-world skills through hands-on workshops in AI, Robotics, IoT, and Prototyping. From one-day bootcamps to full-week build marathons, we turn learners into creators.",
                image: "../assets//Workshop2.jpg",
                category: "Workshop",
                // impact: "City-wide implementation",
                link: "/services/dof"
              },
              {
                title: "Competition",
                description: "Fueling innovation through national-level hackathons, tech challenges, and real-world problem-solving. From classroom concepts to podium finishes, we help students compete, win, and lead.",
                image: "../assets/Competition3.png",
                category: "Competition",
                // impact: "200+ participating teams",
                link: "/services/hourglass"
              },
              {
                title: "Industrial Visit",
                description: "Bridging the gap between academics and industry through real-time tech exposure and guided visits. From lab tours to live demos, we connect students directly with innovation in action.",
                image: "../assets/Visit.jpg",
                category: "Industrial Visit",
                // impact: "50+ AI specialists trained",
                link: "/services/otto"
              },

              {        
                title: "Awards",
                description: "Honored by leading tech organizations and industry experts for driving innovation in education. Recognized for excellence in tech education and hands-on learning through impactful initiatives.",
                image: "../assets/Award.jpg",
                category: "Award",
                // impact: "40% efficiency improvement",
                link: "/services/mhr"
              }
              
            ].map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-blue-500/40  transform hover:-translate-y-4 transition-all duration-500 group overflow-hidden animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`/Portfolio/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {/* <TrendingUp className="h-4 w-4 text-green-500" /> */}
                      {/* <span className="text-sm text-green-600 font-medium">{project.impact}</span> */}
                    </div>
                    <Link to={project.link}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Educational Institutions", icon: School },
              { number: "30000+", label: "Students Trained", icon: Users },
              { number: "50+", label: "Expert Trainers", icon: User },
              { number: "95%", label: "Success Rate", icon: TrendingUp }
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-200">
              Success stories from our educational partners
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
                  <Quote className="h-8 w-8 text-blue-200 mb-2" />
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in delay-200">
              Join the robotics revolution and prepare your students for the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Today
              </Button>
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-200">
              Ready to transform your educational institution with cutting-edge technology?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "support@vstechhorizon.com",
                    subtitle: "We'll respond within 24 hours"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 9325360357",
                    subtitle: "Mon-Fri, 9AM-6PM IST"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "Gat No. 621, KB Plaza, Wagholi, Kesnand, Tal. Haveli, Dist. Pune – 412207",
                    subtitle: "Visit our state-of-the-art facility"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                          <contact.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                          <p className="text-gray-800 font-medium mb-1">{contact.content}</p>
                          <p className="text-sm text-gray-500">{contact.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
                      
                      <Card className="border-0 shadow-xl animate-fade-in delay-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              <CardDescription>We'd love to hear about your project and how we can help</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/xkgzvaan"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="What can we help you with?"
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project and requirements..."
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
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
                <span className="text-xl font-bold" style={{fontFamily: 'Times, serif'}}>VS Tech Horizon Pvt. Ltd.</span>
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
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank" // open in new tab
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

           <ul className="space-y-3">
            {[
              { name: "About Us", action: () => scrollToSection('about') },
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
              { name: "Contact", action: () => scrollToSection('contact') },
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
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === link.name ? 'rotate-90' : ''
                      } ${link.children ? '' : 'opacity-0 group-hover:opacity-100'}`}
                    />
                    <span>{link.name}</span>
                  </button>
                </div>

                {/* Show dropdown only when clicked */}
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
                {[
                  "Lab Setup",
                  "Workshop", 
                  "Competition"
                ].map((service, index) => (
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

export default Index;

