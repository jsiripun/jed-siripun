'use client';
import React, { useState } from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Container from '../components/container';
import Image from "next/image"
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Mail, ExternalLink, Heart, Coffee, Lightbulb, Menu } from 'lucide-react';
import { FadeInComponent } from '../components/fadeInComponent'
import { WaitToRenderComponent } from '@/components/waitToRenderComponent';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingRight: '10vw'
};


function ProjectsSection() {
    const [activeProject, setActiveProject] = useState<string | null>(null);

    const projects = [
        {
          title: "PokeHelper",
          description: "A Pokedex that uses the PokeAPI to display information about Pokemon.",
          impact: "Supported 5,000+ students in their learning journey",
          technologies: ["Next.js", "Tailwind CSS", "PokeAPI"],
          github: "https://github.com/jsiripun/poke-helper",
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

  return (
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
  );
}

export default ProjectsSection;