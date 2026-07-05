/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { INITIAL_PROJECTS, PERSONAL_INFO } from './data';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import CinematicShowcase from './components/CinematicShowcase';
import PortfolioSection from './components/PortfolioSection';
import ProjectModal from './components/ProjectModal';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Initialize and load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('hacreative_projects');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (e) {
        setProjects(INITIAL_PROJECTS);
      }
    } else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('hacreative_projects', JSON.stringify(INITIAL_PROJECTS));
    }

    // Default theme check
    const savedTheme = localStorage.getItem('hacreative_theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Sync dark mode class on DOM node
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('hacreative_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('hacreative_theme', 'light');
    }
  }, [isDarkMode]);

  // Database actions
  const handleAddProject = (newProj: Project) => {
    const updated = [newProj, ...projects];
    setProjects(updated);
    localStorage.setItem('hacreative_projects', JSON.stringify(updated));
  };

  const handleEditProject = (editedProj: Project) => {
    const updated = projects.map((p) => (p.id === editedProj.id ? editedProj : p));
    setProjects(updated);
    localStorage.setItem('hacreative_projects', JSON.stringify(updated));
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem('hacreative_projects', JSON.stringify(updated));
  };

  // Helper smooth scrolling targets
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleOrderClick = () => {
    // Redirects directly to WhatsApp order desk
    const defaultMsg = `Halo Muhamad Haidir, saya melihat portofolio HACREATIVE Anda dan ingin memesan desain kustom.`;
    window.open(`https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F7F9FB] dark:bg-[#0B0F14] text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      
      {/* Dynamic Header */}
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onOrderClick={handleOrderClick}
        onAdminClick={() => setIsAdminOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero Introduction */}
        <Hero
          onOrderClick={handleOrderClick}
          onViewPortfolioClick={() => scrollToSection('#portfolio')}
        />

        {/* Section 2: Cinematic Bird Showcase */}
        <CinematicShowcase />

        {/* Section 3: About Brand & Designer */}
        <About />

        {/* Section 4: Interactive Portfolio with Search, Category & Color filters */}
        <PortfolioSection
          projects={projects}
          onProjectSelect={(proj) => setSelectedProject(proj)}
        />

        {/* Section 5: DKV Design Services List */}
        <Services onOrderClick={handleOrderClick} />

        {/* Section 6: Action CTA Callbox */}
        <CTA onOrderClick={handleOrderClick} />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating detail modal sheet */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Sliding custom database editor admin panel */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        onEditProject={handleEditProject}
        onDeleteProject={handleDeleteProject}
      />
    </div>
  );
}
