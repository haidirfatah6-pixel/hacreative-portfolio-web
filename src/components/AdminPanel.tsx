/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Edit, Trash2, X, Database, Save, AlertCircle, Info, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onAddProject: (project: Project) => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
}

const COLOR_OPTIONS = [
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
  'Banner WhatsApp',
  'Banner YouTube',
  'Feed Instagram',
  'Logo',
  'Poster',
  'Gaming Design',
  'Branding'
];

export default function AdminPanel({
  isOpen,
  onClose,
  projects,
  onAddProject,
  onEditProject,
  onDeleteProject
}: AdminPanelProps) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Banner WhatsApp');
  const [color, setColor] = useState<'red' | 'yellow' | 'blue' | 'green' | 'orange' | 'purple' | 'pink' | 'black' | 'brown' | 'grey'>('blue');
  const [tagsInput, setTagsInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [featured, setFeatured] = useState(false);

  if (!isOpen) return null;

  const openAddForm = () => {
    setEditingProject(null);
    setTitle('');
    setCategory('Banner WhatsApp');
    setColor('blue');
    setTagsInput('Logo, Branding');
    setToolsInput('Adobe Illustrator, Photoshop');
    setImage('https://picsum.photos/seed/hacreative/800/600');
    setDescription('Desain visual premium dengan tata letak bersih dan fungsional.');
    setWhatsappMessage('');
    setFeatured(false);
    setIsFormOpen(true);
  };

  const openEditForm = (proj: Project) => {
    setEditingProject(proj);
    setTitle(proj.title);
    setCategory(proj.category);
    setColor(proj.color);
    setTagsInput(proj.tags.join(', '));
    setToolsInput(proj.tools.join(', '));
    setImage(proj.image);
    setDescription(proj.description);
    setWhatsappMessage(proj.whatsappMessage);
    setFeatured(proj.featured || false);
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedColorHex = COLOR_OPTIONS.find((c) => c.name === color)?.hex || '#00B8D9';
    const tags = tagsInput.split(',').map((t) => t.trim()).filter((t) => t.length > 0);
    const tools = toolsInput.split(',').map((t) => t.trim()).filter((t) => t.length > 0);
    const finalWaMsg = whatsappMessage.trim() || `Halo Muhamad Haidir, saya tertarik dengan portofolio *${title}* Anda dan ingin memesan desain serupa.`;

    const projectData: Project = {
      id: editingProject ? editingProject.id : `custom-${Date.now()}`,
      title,
      category,
      color,
      colorHex: selectedColorHex,
      tags,
      tools,
      image,
      description,
      whatsappMessage: finalWaMsg,
      featured,
      date: editingProject?.date || 'Juli 2026',
      client: editingProject?.client || 'Klien Mandiri'
    };

    if (editingProject) {
      onEditProject(projectData);
    } else {
      onAddProject(projectData);
    }

    setIsFormOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
      />

      {/* Admin Panel Sliding Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        className="relative z-10 w-full max-w-lg h-full bg-white dark:bg-[#0B0F14] shadow-2xl border-l border-slate-200 dark:border-white/5 flex flex-col justify-between"
      >
        {/* Header bar */}
        <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-[#062A35]/15">
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-[#00B8D9]" />
            <span className="font-display font-bold text-base text-slate-900 dark:text-white uppercase tracking-wider">
              HACREATIVE Database Manager
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Sidebar Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Firestore Connection Guidance Box */}
          <div className="p-4 rounded-xl bg-cyan-50 dark:bg-[#00B8D9]/10 border border-[#00B8D9]/30 flex items-start space-x-3 text-cyan-800 dark:text-cyan-200">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="font-sans text-xs space-y-1">
              <p className="font-bold">Informasi Koneksi Database Permanen</p>
              <p className="leading-relaxed">
                Saat ini data disimpan sementara di <strong>localStorage</strong> browser Anda. Untuk menghubungkannya ke cloud database permanen:
              </p>
              <ul className="list-disc pl-4 space-y-1 pt-1 font-mono text-[10px]">
                <li>Integrasikan Firebase SDK (Firestore) di file `/src/App.tsx`.</li>
                <li>Ganti callback `handleAddProject` dkk dengan Firestore queries `addDoc` dan `setDoc`.</li>
                <li>Gunakan instruksi lengkap di berkas `/skills/system_skills/firebase-skill/SKILL.md`.</li>
              </ul>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isFormOpen ? (
              /* PANEL LIST VIEW */
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider">
                    Daftar Portofolio ({projects.length})
                  </h4>
                  <button
                    onClick={openAddForm}
                    className="px-3 py-1.5 rounded-lg bg-[#00C853] hover:bg-[#00C853]/90 text-white font-semibold text-xs flex items-center space-x-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Project</span>
                  </button>
                </div>

                <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3 rounded-xl border border-slate-150 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-10 h-10 object-cover rounded-lg flex-shrink-0 bg-slate-200"
                        />
                        <div className="overflow-hidden">
                          <span className="font-display font-semibold text-xs text-slate-800 dark:text-white block truncate">
                            {proj.title}
                          </span>
                          <span className="font-mono text-[9px] text-[#00B8D9] block uppercase">
                            {proj.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5 ml-4 flex-shrink-0">
                        {proj.featured && (
                          <span className="p-1 rounded bg-[#00C853]/10 text-[#00C853]" title="Featured Showcase">
                            <Sparkles className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <button
                          onClick={() => openEditForm(proj)}
                          className="p-1.5 rounded bg-slate-200/50 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 cursor-pointer"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteProject(proj.id)}
                          className="p-1.5 rounded bg-red-100 hover:bg-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* FORM ENTRY VIEW */
              <motion.form
                key="form-view"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="text-xs font-mono text-slate-500 hover:underline cursor-pointer"
                  >
                    ← Back to List
                  </button>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 gap-4 font-sans text-xs sm:text-sm">
                  {/* Title */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300">Project Title</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Esports Jersey Visual Design"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                    />
                  </div>

                  {/* Row 2: Category & Color */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-slate-300">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-slate-300">Dominant Color</label>
                      <select
                        value={color}
                        onChange={(e) => setColor(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                      >
                        {COLOR_OPTIONS.map((c) => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Image Path */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300">Image URL or Asset Path</label>
                    <input
                      type="text"
                      required
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="e.g. https://picsum.photos/seed/test/800/600"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9] font-mono text-xs"
                    />
                  </div>

                  {/* Tags & Tools */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-slate-300">Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                        placeholder="e.g. Esports, Gaming"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-slate-300">Tools (comma-separated)</label>
                      <input
                        type="text"
                        value={toolsInput}
                        onChange={(e) => setToolsInput(e.target.value)}
                        placeholder="e.g. Photoshop, Blender"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300">Description</label>
                    <textarea
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Type details about this work..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                    />
                  </div>

                  {/* Pre-filled WA Msg */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-slate-300">WhatsApp Message (optional)</label>
                    <input
                      type="text"
                      value={whatsappMessage}
                      onChange={(e) => setWhatsappMessage(e.target.value)}
                      placeholder="Let blank for automatic draft..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[#00B8D9]"
                    />
                  </div>

                  {/* Featured toggle */}
                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="rounded border-slate-300 text-[#00C853] focus:ring-[#00C853]"
                    />
                    <label htmlFor="featured" className="font-semibold text-slate-700 dark:text-slate-300 select-none cursor-pointer">
                      Featured in Cinematic Showcase Slider
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#00C853]/90 text-white font-semibold text-sm flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Project</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5"
                  >
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>

        {/* Footer info banner */}
        <div className="p-4 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#062A35]/15 text-center font-mono text-[9px] text-slate-400">
          Muhamad Haidir • DKV SMKN 2 Garut • © 2026
        </div>
      </motion.div>
    </div>
  );
}
