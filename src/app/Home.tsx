"use client";
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart, Coffee, Globe } from 'lucide-react';
import { FadeInComponent } from '@/components/fadeInComponent'
import { WaitToRenderComponent } from '@/components/waitToRenderComponent';
import Container from '@mui/material/Container';

const Home = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      title: "Healthcare Scheduling Platform",
      description: "Built an intelligent scheduling system that reduced patient wait times by 40% and improved access to healthcare for underserved communities.",
      impact: "Helped 10,000+ patients get faster access to medical care",
      technologies: ["React", "Node.js", "MongoDB", "ML algorithms"],
      github: "#",
      demo: "#"
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
      title: "Sustainable Living App",
      description: "Developed an app that helps users track and reduce their carbon footprint through daily actions.",
      impact: "Contributed to 1,000+ tons of CO2 reduction",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Charts.js"],
      github: "#",
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
    { icon: <Globe className="w-6 h-6" />, text: "Sustainability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hello Section */}
      <header className="bg-gray min-h-[100vh]">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="text-center">
            <FadeInComponent seconds={2}>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 mb-4">
                Hi, I'm Jed
              </h1>
            </FadeInComponent>
            <WaitToRenderComponent seconds={2}>
              <FadeInComponent seconds={2}>
                <h2 className="text-2xl text-gray-600 mb-6">Software Engineer & Problem Solver</h2>
              </FadeInComponent>
            </WaitToRenderComponent>
            <WaitToRenderComponent seconds={4}>
              <FadeInComponent seconds={2}>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm passionate about creating technology that makes a positive difference in people's lives. 
                  Whether it's improving healthcare access, supporting education, or promoting sustainability, 
                  I love turning complex challenges into elegant solutions.
                </p>
            </FadeInComponent>
            </WaitToRenderComponent>
            
            {/* <div className="flex justify-center space-x-6">
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Github className="w-8 h-8 text-gray-600 hover:text-blue-600" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-8 h-8 text-gray-600 hover:text-blue-600" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Mail className="w-8 h-8 text-gray-600 hover:text-blue-600" />
              </a>
            </div> */}
          </div>
        </div>
      </header>

      {/* Passions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Drives Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.map(({ icon, text }) => (
              <div key={text} className="text-center p-6 bg-pink-50 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="inline-block p-3 bg-pink-100 rounded-full mb-4">
                  {React.cloneElement(icon, { className: "w-8 h-8 text-gray-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-600">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-emerald-700/40">
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Impact Through Code</h2>
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
                    <Github className="w-4 h-4 mr-1" />
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
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Create Impact Together</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have an interesting problem to solve? I'd love to hear about it!
          </p>
          <a
            href="mailto:john@example.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-lg hover:from-cyan-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Let's Connect
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;