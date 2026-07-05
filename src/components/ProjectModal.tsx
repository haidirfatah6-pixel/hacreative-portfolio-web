/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Sparkles, Calendar, User, Hammer, Palette } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Formatted whatsapp link for ordering
  const orderLink = `https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(project.whatsappMessage)}`;
  const chatLink = `https://wa.me/${PERSONAL_INFO.phone}?text=Halo%20Muhamad%20Haidir,%20saya%20tertarik%20untuk%20diskusi%20desain%20kreatif.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Sheet Container */}
        <motion.div
          // Responsive entry style: bottom sheet on mobile, centered card on desktop
          initial={{
            y: window.innerWidth < 768 ? '100%' : 20,
            scale: window.innerWidth < 768 ? 1 : 0.95,
            opacity: window.innerWidth < 768 ? 1 : 0,
          }}
          animate={{
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          exit={{
            y: window.innerWidth < 768 ? '100%' : 20,
            scale: window.innerWidth < 768 ? 1 : 0.95,
            opacity: window.innerWidth < 768 ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-white dark:bg-[#0B0F14] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#062A35]/10 dark:border-white/10 max-h-[90vh] md:max-h-[85vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors border border-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Area */}
          <div className="relative w-full md:w-1/2 bg-slate-900 flex items-center justify-center overflow-hidden aspect-video md:aspect-auto min-h-[250px]">
            {/* Background ambient glow matching the project color */}
            <div
              className="absolute inset-0 opacity-20 filter blur-xl"
              style={{
                background: `radial-gradient(circle, ${project.colorHex} 0%, transparent 80%)`,
              }}
            />

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
            {/* Dominant Color Badge */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: project.colorHex }}
              />
              <span className="font-mono text-[10px] text-slate-200 capitalize">
                Color: {project.color}
              </span>
            </div>
          </div>

          {/* Right Column: Information details */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Category tag & Date */}
              <div className="flex items-center space-x-3 mb-3">
                <span className="font-mono text-xs font-semibold text-[#00B8D9] bg-[#00B8D9]/10 px-2.5 py-1 rounded-lg">
                  {project.category}
                </span>
                {project.date && (
                  <span className="font-mono text-xs text-slate-400 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {project.date}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <div className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-300 mb-6 font-sans text-sm leading-relaxed">
                <p>{project.description}</p>
              </div>

              {/* Meta Fields (Tools & Clients) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-white/5 pt-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase flex items-center mb-1.5">
                    <Hammer className="w-3 h-3 mr-1" />
                    Tools Used
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.client && (
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase flex items-center mb-1.5">
                      <User className="w-3 h-3 mr-1" />
                      Client / Partner
                    </span>
                    <span className="font-sans text-xs text-slate-700 dark:text-slate-200 font-medium">
                      {project.client}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="mb-6">
                <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase flex items-center mb-1.5">
                  <Palette className="w-3 h-3 mr-1" />
                  Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-2 py-1 rounded-lg border border-slate-200/50 dark:border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
              <a
                href={orderLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00C853] hover:bg-[#00C853]/90 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Order Similar Design</span>
              </a>

              <a
                href={chatLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-[#00B8D9]" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
