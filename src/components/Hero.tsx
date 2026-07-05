/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageSquare, Palette, Shield, Award, MapPin, MousePointerClick, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOrderClick: () => void;
  onViewPortfolioClick: () => void;
}

export default function Hero({ onOrderClick, onViewPortfolioClick }: HeroProps) {
  // WhatsApp redirect link
  const waLink = `https://wa.me/${PERSONAL_INFO.phone}?text=Halo%20Muhamad%20Haidir,%20saya%20tertarik%20dengan%20jasa%20desain%20kreatif%20Anda.`;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0B0F14] transition-colors duration-500"
    >
      {/* Premium Technical Design Grid & Glowing Ambiences */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00B8D9_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] dark:opacity-[0.08]" />
        
        {/* Subtle horizontal design guidelines */}
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />
        
        {/* Vertical alignment marks */}
        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 dark:via-white/5 to-transparent" />
        <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 dark:via-white/5 to-transparent" />

        {/* Ambient colored high-fidelity glow orbs */}
        <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#00C853]/10 to-transparent blur-[140px] dark:from-[#00C853]/5" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#00B8D9]/15 to-transparent blur-[140px] dark:from-[#00B8D9]/10" />
        
        {/* Glowing circuit-like trace vector line */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -50 150 L 250 150 L 300 200 L 600 200 L 650 150 L 1200 150 L 1250 250 L 2000 250"
            fill="none"
            stroke="#00B8D9"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Designer Crosshair & Blueprint Annotations */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none hidden xl:block">
        <span className="absolute top-36 left-8 font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          SYS_LOC: GARUT / IDN
        </span>
        <span className="absolute top-36 right-8 font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          EST_STUDIO: HACREATIVE 2024
        </span>
        <div className="absolute bottom-12 left-8 flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
          <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            ENGINE STATUS: ONLINE [V2.6]
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copy/Intro (Left) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Small Premium Interactive Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white dark:bg-[#062A35]/15 border border-slate-200/80 dark:border-white/10 shadow-[0_2px_12px_rgba(0,184,217,0.05)]"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C853]"></span>
              </div>
              <span className="font-mono text-[10px] font-bold text-slate-700 dark:text-[#00B8D9] tracking-widest uppercase">
                PORTFOLIO • CLASS OF 2026
              </span>
              <div className="h-3 w-[1px] bg-slate-300 dark:bg-white/20" />
              <span className="font-mono text-[9px] text-slate-400 dark:text-slate-400">
                DKV SMKN 2 GARUT
              </span>
            </motion.div>

            {/* Premium Typographic Block */}
            <div className="space-y-4 w-full">
              <h1 className="leading-[1.1] tracking-tight">
                {/* Intro Title */}
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-sans text-xs sm:text-sm font-bold tracking-[0.25em] text-[#00C853] dark:text-[#00C853] uppercase mb-1"
                >
                  GRAPHIC & VISUAL DESIGNER
                </motion.span>
                
                {/* Name Heading with elegant high-fidelity text effect */}
                <span className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-none"
                  >
                    Muhamad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#062A35] via-[#00B8D9] to-[#00C853] dark:from-[#00B8D9] dark:via-[#00C853] dark:to-[#00B8D9]">{PERSONAL_INFO.name}</span>
                  </motion.span>
                </span>

                {/* Subtitle with premium visual design theme */}
                <span className="block overflow-hidden py-1 mt-1">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-display font-bold text-xl sm:text-2xl text-[#062A35] dark:text-slate-300"
                  >
                    Siswa DKV Penggagas Ide Kreatif Digital.
                  </motion.span>
                </span>
              </h1>

              {/* Redesigned Description with premium editorial layout */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Menggabungkan teori komposisi, estetika modern, dan ketepatan visual untuk melahirkan karya-karya desain orisinal yang berkarakter kuat. Melalui <strong className="text-[#00B8D9] font-semibold">{PERSONAL_INFO.brand}</strong>, saya siap membantu mengomunikasikan identitas brand, promosi, dan bisnis Anda agar tampil menawan di ekosistem digital.
              </motion.p>
            </div>

            {/* Premium Designer Specializations Bento-grid/List Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-2"
            >
              {[
                { title: "Social Media", label: "Optimized Visuals", icon: Palette },
                { title: "Logo & Brand", label: "Vector Standard", icon: Shield },
                { title: "Banner Promo", label: "Commercial Ready", icon: Award }
              ].map((spec, i) => (
                <div
                  key={spec.title}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#0B0F14]/40 border border-slate-200/75 dark:border-white/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:border-[#00B8D9]/40 group"
                >
                  <spec.icon className="w-4 h-4 text-[#00B8D9] mb-1.5 transition-transform group-hover:scale-110" />
                  <span className="font-display font-bold text-xs text-slate-800 dark:text-white block">
                    {spec.title}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500 block uppercase tracking-wide mt-0.5">
                    {spec.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Refined Actions toolbar with floating tooltips and magnetic physics style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-4"
            >
              {/* Primary Action */}
              <button
                onClick={onViewPortfolioClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#062A35] dark:bg-white text-white dark:text-[#0B0F14] font-bold text-sm hover:bg-[#00B8D9] dark:hover:bg-[#00B8D9] dark:hover:text-white shadow-[0_4px_20px_rgba(6,42,53,0.15)] dark:shadow-[0_4px_20px_rgba(0,184,217,0.15)] transition-all flex items-center justify-center space-x-2 group cursor-pointer relative overflow-hidden"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Order Design Button */}
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold text-sm bg-white/50 dark:bg-white/5 hover:border-[#00C853] hover:text-[#00C853] dark:hover:border-[#00C853] dark:hover:text-[#00C853] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#00C853] animate-pulse" />
                <span>Order Design</span>
              </button>

              {/* Chat WhatsApp Quick Access */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#00C853] text-white font-bold text-sm hover:bg-[#00C853]/95 transition-all flex items-center justify-center space-x-2 shadow-[0_4px_15px_rgba(0,200,83,0.15)] hover:shadow-[0_4px_20px_rgba(0,200,83,0.3)] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>
            </motion.div>

          </div>

          {/* Column 2: Personal Photo (Right) with Masterpiece Multilayer Tech Framing */}
          <div className="lg:col-span-5 flex justify-center items-center w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[360px]"
            >
              {/* Layer 1: Ambient Backdrop glow ring */}
              <div className="absolute inset-0 -m-5 rounded-3xl bg-gradient-to-tr from-[#00C853] via-[#00B8D9] to-indigo-500 opacity-20 blur-xl pointer-events-none animate-pulse" />

              {/* Layer 2: Futuristic Rotating Border Ring (Visual Design Workbench accent) */}
              <div className="absolute -inset-2 rounded-3xl border border-dashed border-[#00B8D9]/40 pointer-events-none animate-spin-slow" />

              {/* Layer 3: Tech corner brackets */}
              <div className="absolute -top-4 -left-4 w-10 h-10 border-t-[3px] border-l-[3px] border-[#00B8D9] rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-[3px] border-r-[3px] border-[#00C853] rounded-br-lg pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-4 h-4 border-t-[2px] border-r-[2px] border-[#00C853]/50 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-[2px] border-l-[2px] border-[#00B8D9]/50 pointer-events-none" />

              {/* Photo Container Frame Card */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-[#0B0F14] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[5px] border-white dark:border-slate-800/80 flex items-center justify-center aspect-[3/4] group transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
                {/* Visual grid paper texture lines inside frame */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Muhamad Haidir"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 filter group-hover:brightness-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback avatar if not loaded
                    e.currentTarget.src = "https://picsum.photos/seed/haidir/600/800";
                  }}
                />

                {/* Cybernetic details overlay - HUD bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-extrabold text-lg leading-none tracking-wide text-white">
                      {PERSONAL_INFO.name}
                    </span>
                    <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#00C853] text-[9px] font-mono font-extrabold tracking-widest uppercase text-white animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white block animate-ping" />
                      <span>DKV MASTERMIND</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[9px] text-slate-300">
                    <span>{PERSONAL_INFO.major}</span>
                    <span className="text-[#00B8D9]">ID: HAC_V2.6</span>
                  </div>
                </div>

                {/* Glare effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating Badge Left: Projects count */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-white dark:bg-[#0B0F14] shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-2xl p-3 border border-slate-200/80 dark:border-white/10 flex items-center space-x-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-[#00C853]/15 flex items-center justify-center text-[#00C853]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col pr-1">
                  <span className="font-display font-black text-xs text-slate-800 dark:text-white leading-none">
                    45+ Pro
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">
                    Completed
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge Right: EST logo brand */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -right-6 bg-[#062A35] text-white shadow-[0_8px_32px_rgba(6,42,53,0.25)] rounded-2xl p-4 border border-white/5 flex items-center space-x-3 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center p-1 border border-white/10">
                  <img src={PERSONAL_INFO.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-xs tracking-wider text-[#00B8D9] leading-none">
                    HACREATIVE
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 mt-0.5">
                    STUDIO EST. 2024
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
