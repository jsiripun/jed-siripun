"use client";
import React, { useState } from 'react';
import { Mail, ExternalLink, Heart, Coffee, Lightbulb, Menu } from 'lucide-react';
import { FadeInComponent } from '@/components/fadeInComponent'
import { WaitToRenderComponent } from '@/components/waitToRenderComponent';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Home = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState<Boolean | null>(false);
  const [showWave, setShowWave] = React.useState<Boolean | null>(false);

  const projects = [
    {
      title: "Atylr",
      description: "A platform that allows people to find craft instructors and classes in their area.",
      impact: "Still in the works!",
      technologies: ["Typescript", "React", "Tailwind CSS", "Python", "FastAPI", "Alembic", "Supabase (Postgres)"],
      github: "secret",
      demo: ""
    },
    {
      title: "Educational Resource Hub",
      description: "Created a platform connecting students with free educational resources and tutoring services in STEM subjects.",
      impact: "Supported 5,000+ students in their learning journey",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "#",
      demo: "#"
    },
    {
      title: "Tipsuwan Ice Factory",
      description: "Tipsuwan Ice Factory is an Ice Factory located in Bangkok, Thailand that was looking into a new POS system. Below are screenshots of a quick mock up that I created for them.",
      impact: "",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/jsiripun/TipsuwanIce",
      demo: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "SQL", "Snowflake", "Postgres", "Terraform", "AWS", "Git"
  ];

  const passions = [
    { icon: <Heart className="w-6 h-6" />, text: "Social Impact" },
    { icon: <Coffee className="w-6 h-6" />, text: "Problem Solving" },
    { icon: <Lightbulb className="w-6 h-6" />, text: "Creativity" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
  
      <FadeInComponent seconds={2}>
        <section className="bg-emerald-700/80 py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-6xl mb-6">Software Engineer & Hobby Hopper</h2>
                <p className="text-xl mb-8">Creating software that is hopefully used to make the world a better place.</p>
                <button className="bg-stone-900 text-stone-100 px-8 py-3 rounded-none hover:bg-stone-800">
                  View My Work
                </button>
              </div>
              <div className="hidden md:block">
                <div className="bg-stone-900 h-64 w-64 rounded-full mx-auto overflow-hidden transition-all duration-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-6xl">
                    👋
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInComponent>

      {/* Hello Section */}
      <header className="bg-white min-h-[70vh]">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="text-center">
            <WaitToRenderComponent seconds={1}>
              <FadeInComponent seconds={2}>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 mb-4">
                Hi, I'm Jed
              </h1>
              </FadeInComponent>
            </WaitToRenderComponent>
            <WaitToRenderComponent seconds={2}>
              <FadeInComponent seconds={2}>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I am currently a software engineer at the <a href="https://demexchange.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Democratic Data Exchange</a>.
                I believe technology should improves lives, foster connection, and drive positive change.
                <br/>
                <br/>
                If you're looking for someone who can do a little of everything, you're in the right place!
                
                While I might not know every framework or library, I know my way around the internet and can figure things out quickly.
                </p>
            </FadeInComponent>
            </WaitToRenderComponent>
          </div>
        </div>
      </header>

      {/* Passions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Drives Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.map(({ icon, text }) => (
              <div key={text} className="text-center p-6 bg-pink-100 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="inline-block p-3 bg-pink-200 rounded-full mb-4">
                  {React.cloneElement(icon, { className: "w-8 h-8 text-gray-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-600">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-emerald-700/80">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-blue-50 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects </h2>
          <div className="grid gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer
                  ${activeProject === project.title ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setActiveProject(activeProject === project.title ? null : project.title)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className={`overflow-hidden transition-all duration-300
                  ${activeProject === project.title ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="bg-pink-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 font-medium">Impact: {project.impact}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <GitHub className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Chit Chat</h2>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to contact me whether it's about a new opportunity, a fun idea, or just to say hi!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/jsiripun" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
              <GitHub className="w-8 h-8 text-gray-600 hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/jed-siripun/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
              <LinkedIn className="w-8 h-8 text-gray-600 hover:text-blue-600" />
            </a>
            <a href="mailto:jsiripun@gmail.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
              <Mail className="w-8 h-8 text-gray-600 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;