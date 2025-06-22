import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code2,
  Database,
  Server,
  Palette,
  Award,
  Calendar,
  Users,
  Zap,
  Target,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  // const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Python', 'JavaScript (ES6)', 'SQL'],
    frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'],
    backend: ['Django', 'Django REST Framework', 'WebSockets', 'RESTful APIs'],
    database: ['PostgreSQL'],
    tools: ['Git', 'Docker', 'Postman', 'GitHub'],
    cloud: ['AWS (EC2, S3)']
  };

  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "Cisco Systems",
      location: "Bangalore, India",
      period: "August 2024 - Present",
      achievements: [
        "Spearheaded Employee Management System using Django REST Framework and PostgreSQL, reducing HR response time by 40%",
        "Developed SprintSync AI-based workflow optimizer, improving project planning efficiency by 30%",
        "Won 'People's Choice Award' at Cisco Hackathon",
        "Optimized frontend performance, reducing latency by 25%"
      ]
    },
    {
      title: "Web Developer",
      company: "Michelle Salins Athletica",
      location: "Bangalore, India", 
      period: "Jan 2024 - July 2024",
      achievements: [
        "Built dynamic React dashboard, reducing load times by 50% and boosting user retention by 20%",
        "Enhanced SEO optimization, increasing organic traffic by 35%",
        "Implemented responsive layouts using Tailwind CSS and Material UI",
        "Integrated analytics for improved user tracking and engagement"
      ]
    }
  ];

  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Scalable chat platform supporting 1:1 and group messaging with real-time indicators and presence tracking.",
      tech: "Django, Channels, Redis, WebSockets, PostgreSQL",
      achievements: [
        "99.9% uptime in test environments",
        "20% latency optimization through connection pooling",
        "Efficient query handling and message storage"
      ],
      link: "https://github.com/EktaUrane/real-time-chat-application"
    },
    {
      title: "AI-Powered Resume Analyzer", 
      description: "Responsive web app delivering instant, role-specific resume feedback using OpenAI's API.",
      tech: "React, OpenAI API, Tailwind CSS",
      achievements: [
        "Integrated keyword extraction and readability analysis",
        "40% improvement in feedback speed",
        "Modern, intuitive user interface"
      ],
      link: "https://github.com/EktaUrane/ai-resume-analyzer"
    },
    {
      title: "Object Detection Machine",
      description: "Vision-based sorting system using TensorFlow for industrial applications.",
      tech: "Python, TensorFlow, OpenCV, Data Logging",
      achievements: [
        "25% improvement in classification accuracy",
        "30% reduction in false positives", 
        "35% increase in system reliability"
      ],
    }
  ];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-white/70" />
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            EU
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700/50 mt-4 pt-4">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-slate-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ekta Urane
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
              Software Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Backend Developer with hands-on experience designing scalable REST APIs, 
              optimizing performance, and deploying production-grade applications. 
              Skilled in real-time systems and cloud-ready architecture.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:ektaurane669@gmail.com"
              className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="#projects"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Code2 className="w-5 h-5" />
              View Projects
            </a>
          </div>
        </div>
        
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                As a Software Developer at Cisco Systems, I specialize in building scalable 
                backend systems and intuitive frontend experiences. My expertise spans from 
                Django REST APIs to React applications, with a focus on performance optimization 
                and user experience.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm passionate about solving complex problems through clean, efficient code 
                and have successfully delivered projects that improved operational efficiency 
                by up to 40% and won recognition at company hackathons.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-sm text-slate-400">Response Time Improvement</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm text-slate-400">System Uptime</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 9206007001</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>ektaurane669@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Award className="w-5 h-5 text-blue-400" />
                <span>CCNA Certified (2025)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  {category === 'languages' && <Code2 className="w-6 h-6 text-blue-400" />}
                  {category === 'frontend' && <Palette className="w-6 h-6 text-green-400" />}
                  {category === 'backend' && <Server className="w-6 h-6 text-purple-400" />}
                  {category === 'database' && <Database className="w-6 h-6 text-orange-400" />}
                  {category === 'tools' && <Zap className="w-6 h-6 text-yellow-400" />}
                  {category === 'cloud' && <Target className="w-6 h-6 text-pink-400" />}
                  <h3 className="text-xl font-semibold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-600/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/30 p-8 rounded-xl hover:bg-slate-800/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="text-lg font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-blue-400 mb-2">Technologies:</div>
                    <div className="text-sm text-slate-400">{project.tech}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certification */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xl font-semibold text-blue-400">B.Tech (Electronics Engineering)</div>
                  <div className="text-slate-300">DKTE Society's Textile and Engineering Institute</div>
                  <div className="text-slate-400">2019 - 2023</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/30 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-lg font-semibold text-yellow-400">Cisco Certified Network Associate (CCNA)</div>
                    <div className="text-slate-300">Cisco Systems</div>
                    <div className="text-slate-400">2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to create amazing software solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:ektaurane669@gmail.com"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/ekta-urane-882753221/"
              className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/EktaUrane"
              className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Ekta Urane. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;