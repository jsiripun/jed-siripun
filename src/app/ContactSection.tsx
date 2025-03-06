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


function ContactSection() {

  return (
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
  );
}

export default ContactSection;