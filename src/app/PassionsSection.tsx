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


function PassionsSection() {
    const passions = [
        { icon: <Heart className="w-6 h-6" />, text: "Social Impact" },
        { icon: <Coffee className="w-6 h-6" />, text: "Problem Solving" },
        { icon: <Lightbulb className="w-6 h-6" />, text: "Creativity" }
      ];

  return (
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
  );
}

export default PassionsSection;