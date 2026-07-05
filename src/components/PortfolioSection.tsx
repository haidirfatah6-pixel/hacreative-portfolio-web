/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Palette, RotateCcw, ArrowUpRight, FolderOpen } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data';

interface PortfolioSectionProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const COLORS_MAP = [
  { name: 'red', hex: '#E53935' },
  { name: 'yellow', hex: '#FFC107' },
  { name: 'blue', hex: '#00B8D9' },
  { name: 'green', hex: '#00C853' },
  { name: 'orange', hex: '#FF5722' },
  { name: 'purple', hex: '#9C27B0' },
  { name: 'pink', hex: '#E91E63' },
  { name: 'black', hex: '#0B0F14' },
  { name: 'brown', hex: '#795548' },
  { name: 'grey', hex: '#9AA3AF' }
] as const;

const CATEGORIES = [
  'All Categories',
  'Banner WhatsApp',
  'Banner YouTube',
  'Feed Instagram',
  'Logo',
  'Poster',
  'Gaming Design',
  'Branding'
];

export default function PortfolioSection({ projects, onProjectSelect }: PortfolioSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Filter computation
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search match (title, category, tags)
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category match
      const matchesCategory =
        selectedCategory === 'All Categories' ||
        project.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Logo' && project.category.toLowerCase().includes('logo')) ||
        (selectedCategory === 'Branding' && project.category.toLowerCase().includes('branding'));

      // Color match
      const matchesColor = !selectedColor || project.color === selectedColor;

      return matchesSearch && matchesCategory && matchesColor;
    });
  }, [projects, searchQuery, selectedCategory, selectedColor]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedColor(null);
  };

  // Container variants for staggered grid reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-white dark:bg-[#0B0F14] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00B8D9] dark:text-[#00B8D9] uppercase font-bold">
            Showcase Kreatif DKV
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight mt-2 mb-4">
            Galeri Portofolio Pilihan
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00C853] to-[#00B8D9] mx-auto rounded-full" />
        </div>

        {/* Filters Controls Toolbar Card */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#062A35]/20 border border-slate-200/60 dark:border-white/5 shadow-sm mb-12 space-y-6">
          
          {/* Row 1: Search & Reset */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by title, tag, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-[#00B8D9] focus:ring-1 focus:ring-[#00B8D9] font-sans text-sm shadow-sm transition-all"
              />
            </div>

            {/* Clear Filters Button (Visible when any filter is active) */}
            {(searchQuery || selectedCategory !== 'All Categories' || selectedColor) && (
              <button
                onClick={handleResetFilters}
                className="w-full md:w-auto px-4 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider text-slate-500 hover:text-[#00B8D9] dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET FILTERS</span>
              </button>
            )}
          </div>

          {/* Row 2: Category chips */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center">
              <FolderOpen className="w-3.5 h-3.5 mr-1" />
              Kategori Karya
            </span>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 max-w-full">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
                return (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-sans text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[#00C853] text-white shadow-md'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-[#00C853] dark:hover:border-[#00C853]'
                    }`}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Color Filter dots */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center">
                <Palette className="w-3.5 h-3.5 mr-1" />
                Filter Warna Dominan
              </span>
              {selectedColor && (
                <button
                  onClick={() => setSelectedColor(null)}
                  className="font-mono text-[10px] text-[#00B8D9] hover:underline cursor-pointer"
                >
                  Clear color filter
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {COLORS_MAP.map((color) => {
                const isActive = selectedColor === color.name;
                return (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(isActive ? null : color.name)}
                    className="relative w-7 h-7 rounded-full cursor-pointer flex items-center justify-center border border-slate-200/50 dark:border-white/5"
                    style={{ backgroundColor: color.hex }}
                    title={`Filter: Dominant ${color.name}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeColorRing"
                        className="absolute inset-[-4px] rounded-full border-2 border-[#00C853] dark:border-[#00B8D9] pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Portfolio Results Stats Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
            Menampilkan <strong className="text-slate-900 dark:text-white">{filteredProjects.length}</strong> karya dari total {projects.length}
          </p>
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  onClick={() => onProjectSelect(project)}
                  className="group relative flex flex-col h-full bg-slate-50 dark:bg-[#062A35]/10 rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-xs hover:shadow-xl dark:hover:shadow-[#00B8D9]/5 hover:border-[#00B8D9]/20 transition-all cursor-pointer overflow-hidden"
                >
                  {/* Card Thumbnail Area */}
                  <div className="relative w-full aspect-square sm:aspect-video md:aspect-square bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow inside thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Dominant Color Accent Pill */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.colorHex }} />
                      <span className="font-mono text-[8px] text-white uppercase tracking-wider">{project.color}</span>
                    </div>

                    {/* View overlay icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="p-3 rounded-full bg-[#062A35]/90 dark:bg-white/90 text-white dark:text-[#0b0f14] shadow-lg border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card Info Area */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Category Tag */}
                      <span className="font-mono text-[9px] font-bold text-[#00B8D9] tracking-wider uppercase block mb-1">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight group-hover:text-[#00B8D9] transition-colors line-clamp-1 mb-1.5">
                        {project.title}
                      </h4>

                      {/* Snippet Description */}
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Card Footer: Tags list */}
                    <div className="flex flex-wrap gap-1 border-t border-slate-100 dark:border-white/5 pt-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[10px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-slate-50 dark:bg-[#062A35]/15 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800"
            >
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Karya Tidak Ditemukan
              </h3>
              <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1 mb-6">
                Tidak ada desain dengan kriteria pencarian atau warna yang Anda pilih. Coba sesuaikan filter Anda.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#062A35] dark:bg-[#00B8D9] text-white dark:text-[#0b0f14] font-semibold text-xs"
              >
                Reset Semua Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
