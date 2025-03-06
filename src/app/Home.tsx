"use client";
import React, { useState } from 'react';
import WorkHistory from '../app/about/WorkHistory';
import HelloSection from './HelloSection';
import ProjectsSection from './ProjectsSection';
import PassionsSection from './PassionsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">

      {/* Hello Section */}
      <header className="bg-white min-h-[70vh]">
        <HelloSection />
      </header>

      {/* Passions Section */}
      <section className="py-16 bg-white">
        <PassionsSection />
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-emerald-700/80">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <ProjectsSection />
      </section>

      {/* Work History Section */}
      <section className="py-16 bg-gray-500">
        <WorkHistory />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-pink-50">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;