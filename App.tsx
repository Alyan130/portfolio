import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Download, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Copy,
  Phone,
  Github,
  ArrowLeft,
  X,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { 
  PROJECTS, 
  EXPERIENCE, 
  EDUCATION, 
  STACK, 
  AWARDS, 
  RECOMMENDATIONS, 
  ARTICLES 
} from './constants';
import { Project } from './types';

const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void }> = ({ project, onSelect }) => (
  <div className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col h-full">
    <div className="aspect-[16/10] bg-zinc-800 relative overflow-hidden shrink-0">
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between">
      <div className="flex items-start justify-between mb-3">
        <div className="pr-2">
          <h3 className="font-medium text-sm sm:text-base text-primary group-hover:text-white transition-colors line-clamp-1">{project.title}</h3>
          <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">{project.category}</p>
        </div>
      </div>
      
      <div className="mt-1">
        <button 
          onClick={(e) => {
            e.preventDefault();
            onSelect(project);
          }}
          className="w-full py-1.5 sm:py-2 px-3 bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white rounded-lg transition-all duration-200 border border-border/60 hover:border-zinc-700"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

const HOME_PROJECT_TITLES = [
  "Medicare Data Pipeline",
  "Multi-tenant Podcast Content System",
  "Logistics Operations System",
  "HR Sales Recruitment Agent"
];

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [view, setView] = useState<'home' | 'projects'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectTab, setProjectTab] = useState<'automation' | 'custom'>('automation');

  const homeProjects = HOME_PROJECT_TITLES.map(title => 
    PROJECTS.find(p => p.title.toLowerCase() === title.toLowerCase())
  ).filter((p): p is Project => p !== undefined);

  const filteredAllProjects = PROJECTS.filter(project => {
    return project.category === (projectTab === 'automation' ? 'Automation' : 'Custom Built');
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const scrollToContact = () => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById('lets-talk');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('lets-talk');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-zinc-800 selection:text-white font-sans overflow-x-hidden">
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 text-primary">
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[85vh]">
            <div className="absolute top-5 right-5 z-10">
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1.5 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-secondary hover:text-white transition-colors border border-border/60"
                aria-label="Close details"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
            
            {/* Header Content */}
            <div className="p-5 sm:p-6 border-b border-border/50 shrink-0 select-none">
              <div className="flex flex-col items-start gap-2 pr-10">
                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest bg-zinc-900 border border-border px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Scrollable details view */}
            <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar space-y-6 sm:space-y-8 pb-8">
              {/* Problem */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest px-0.5">
                  Problem
                </h3>
                <div className="p-4 bg-zinc-900/30 rounded-xl border border-border/80 text-secondary text-sm sm:text-base leading-relaxed">
                  {selectedProject.problem}
                </div>
              </div>

              {/* What I Built */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest px-0.5">
                  What I Built
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {selectedProject.whatIBuilt.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest px-0.5">
                  Outcome
                </h3>
                <div className="p-4 bg-zinc-900/30 rounded-xl border border-border/80 text-secondary text-sm sm:text-base leading-relaxed">
                  {selectedProject.outcome}
                </div>
              </div>

              {/* Tech Stack Tools */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest px-0.5">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-zinc-900 border border-border rounded-lg text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors cursor-default select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'projects' ? (
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col gap-8">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors w-fit group p-2 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">All Projects</h1>
            <p className="text-base sm:text-lg text-secondary">A collection of my work in automation and AI solutions.</p>
          </div>

          {/* Tab Buttons as chips */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            <button 
              onClick={() => setProjectTab('automation')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 border ${
                projectTab === 'automation' 
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-200' 
                  : 'bg-zinc-900/40 text-zinc-400 border-border/60 hover:text-white hover:border-zinc-700'
              }`}
            >
              Automation
            </button>
            <button 
              onClick={() => setProjectTab('custom')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 border ${
                projectTab === 'custom' 
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-zinc-200' 
                  : 'bg-zinc-900/40 text-zinc-400 border-border/60 hover:text-white hover:border-zinc-700'
              }`}
            >
              Custom Built
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredAllProjects.map((project, index) => (
              <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
            ))}
          </div>

          <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-tertiary pt-8 border-t border-border mt-auto">
            <p>© Copyright 2025 Alyan Ali</p>
          </footer>
        </div>
      ) : (
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 py-8 sm:py-20 flex flex-col gap-12 sm:gap-16">
          
          {/* Header Section */}
          <header className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-zinc-800 shrink-0">
                  <img src="https://qygyhb50bt.ufs.sh/f/YxSUBdKLte16Vn9id8W9xAr5HeoI1YKEGf3wRLnFh8XsigPC" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">Alyan Ali</h1>
                  <p className="text-base sm:text-lg text-secondary">AI Engineer</p>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-secondary mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs text-green-500 font-medium bg-green-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">Available for work</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col justify-center gap-3 shrink-0">
                <button 
                  onClick={scrollToContact}
                  className="flex flex-1 md:flex-none items-center justify-center md:justify-start gap-2 text-sm text-secondary hover:text-white transition-colors group p-2 bg-zinc-900 md:bg-transparent border border-border md:border-none rounded-lg"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
                <a 
                  href="https://drive.google.com/file/d/1sUXnZ6nMn21eDMYRCprIZIt_LsZZUykR/view?usp=drivesdk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 md:flex-none items-center justify-center md:justify-start gap-2 text-sm text-secondary hover:text-white transition-colors p-2 bg-zinc-900 md:bg-transparent border border-border md:border-none rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm border-t border-border pt-6">
              <a href="mailto:alyankhi124@gmail.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors p-1">
                <Copy className="w-4 h-4" />
                <span className="truncate max-w-[200px] sm:max-w-none">alyankhi124@gmail.com</span>
              </a>
              <div className="flex items-center gap-6 sm:gap-4">
                <a href="https://www.linkedin.com/in/alyan-ali-560910268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-secondary hover:text-white transition-colors p-1" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-1.5 text-secondary hover:text-white transition-colors p-1" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                  <span className="hidden sm:inline">X</span>
                </a>
                <a href="https://github.com/Alyan130" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-secondary hover:text-white transition-colors p-1" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </header>

          {/* About Me */}
          <section>
            <h2 className="text-lg sm:text-xl font-medium mb-4">About me</h2>
            <div className="text-secondary text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I build practical AI systems and automations that helps you save time, improve operations, and scale efficiently.
              </p>
            </div>
          </section>

          {/* Projects */}
          {PROJECTS.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-medium">Recent Projects</h2>
                <button 
                  onClick={() => setView('projects')}
                  className="text-sm text-secondary hover:text-white flex items-center gap-1 transition-colors p-1"
                >
                  View all <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {homeProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {EXPERIENCE.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-medium mb-8">Experience</h2>
              <div className="space-y-12">
                {EXPERIENCE.map((job, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 sm:gap-4">
                      <div>
                        <p className="text-xs text-secondary mb-1 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</p>
                        <h3 className="font-medium text-primary text-lg leading-tight">{job.company}</h3>
                        <p className="text-sm sm:text-base text-secondary">{job.role}</p>
                      </div>
                      <span className="text-xs text-tertiary font-mono sm:pt-1">{job.period}</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base text-secondary marker:text-tertiary">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {EDUCATION.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-medium mb-8">Education</h2>
              <div className="space-y-10">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 sm:gap-4">
                      <div>
                        <p className="text-xs text-secondary mb-1 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {edu.location}</p>
                        <h3 className="font-medium text-lg text-primary leading-tight">{edu.degree}</h3>
                        <p className="text-sm sm:text-base text-secondary">{edu.institution}</p>
                      </div>
                      <span className="text-xs text-tertiary font-mono sm:pt-1">{edu.period}</span>
                    </div>
                    <p className="text-sm sm:text-base text-secondary">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Stack */}
          {STACK.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-medium mb-6">Technical Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {STACK.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/30 sm:bg-transparent hover:bg-zinc-900/50 transition-colors group">
                    <div className={`p-2.5 rounded-md bg-zinc-900 border border-border group-hover:border-zinc-700 transition-colors shrink-0 ${item.iconColor}`}>
                      <item.icon className="w-5 h-5 sm:w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm sm:text-base font-medium text-primary">{item.name}</h3>
                        <ArrowUpRight className="w-3 h-3 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs sm:text-sm text-secondary">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Let's Talk */}
          <section id="lets-talk" className="scroll-mt-12 sm:scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-medium mb-8">Let's talk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <span className="text-xs text-tertiary block mb-1 uppercase tracking-wider">Local Time</span>
                  <p className="text-lg sm:text-xl font-medium text-primary">{currentTime}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                  <div>
                    <span className="text-xs text-tertiary block mb-1 uppercase tracking-wider">Email</span>
                    <a href="mailto:alyankhi124@gmail.com" className="text-sm sm:text-base text-secondary hover:text-white flex items-center gap-2 transition-colors break-all">
                      <Copy className="w-4 h-4 shrink-0" /> alyankhi124@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-tertiary block mb-1 uppercase tracking-wider">Phone</span>
                    <a href="tel:03178384793" className="text-sm sm:text-base text-secondary hover:text-white flex items-center gap-2 transition-colors">
                      <Phone className="w-4 h-4 shrink-0" /> 03178384793
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-tertiary block mb-3 uppercase tracking-wider">Social Channels</span>
                  <div className="flex flex-wrap gap-4 sm:flex-col sm:gap-3">
                    <a href="https://www.linkedin.com/in/alyan-ali-560910268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm sm:text-base text-secondary hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4 shrink-0" /> LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm sm:text-base text-secondary hover:text-white transition-colors">
                      <Twitter className="w-4 h-4 shrink-0" /> X (Twitter)
                    </a>
                    <a href="https://github.com/Alyan130" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm sm:text-base text-secondary hover:text-white transition-colors">
                      <Github className="w-4 h-4 shrink-0" /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-tertiary block uppercase tracking-wider">Message Me</span>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm sm:text-base text-primary placeholder:text-tertiary focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm sm:text-base text-primary placeholder:text-tertiary focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                  <textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm sm:text-base text-primary placeholder:text-tertiary focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                  ></textarea>
                  <button className="w-full bg-white text-black font-semibold text-sm sm:text-base py-3.5 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-tertiary pt-8 border-t border-border mb-8">
            <p>© Copyright 2025 Alyan Ali</p>
          </footer>

        </div>
      )}
    </div>
  );
}

export default App;