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


function SkillsSection() {
    const skills = [
        "JavaScript", "TypeScript", "React", "Node.js", "Python",
        "SQL", "Snowflake", "Postgres", "Terraform", "AWS", "Git"
      ];

  return (
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
  );
}

export default SkillsSection;