'use client';

import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Container from '../components/container';
import Image from "next/image"
import { FadeInComponent } from '../components/fadeInComponent'
import { WaitToRenderComponent } from '@/components/waitToRenderComponent';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingRight: '10vw'
};


function HelloSection() {
  return (
    <div>
      <FadeInComponent seconds={2}>
        <section className="bg-emerald-700/80 py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-6xl mb-6">Software Engineer & Hobby Hopper</h2>
                <p className="text-xl mb-8">Creating software that is hopefully used to make the world a better place.</p>
                <button className="bg-stone-900 text-stone-100 px-8 py-3 rounded-none hover:bg-stone-800">
                  <a href="/code-projects">View My Work</a>
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
  </div>
  );
}

export default HelloSection;