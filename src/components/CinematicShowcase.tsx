/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Eye, ChevronRight, ChevronLeft, Sparkles, MoveRight, ArrowRight, RefreshCw, Compass } from 'lucide-react';
import { INITIAL_PROJECTS, PERSONAL_INFO } from '../data';

export default function CinematicShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const featuredProjects = INITIAL_PROJECTS.filter((p) => p.featured);

  // Scroll Parallax Hooks
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Spring smooth physics for parallax values
  const smoothYProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  const bgY = useTransform(smoothYProgress, [0, 1], [-60, 60]);
  const fgY = useTransform(smoothYProgress, [0, 1], [40, -40]);
  const rotationOffset = useTransform(smoothYProgress, [0, 1], [-15, 15]);
  const textParallax = useTransform(smoothYProgress, [0, 1], [-20, 20]);

  // Auto-play the featured slides after zoom
  useEffect(() => {
    if (!isZoomed || isTransitioning) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isZoomed, isTransitioning, featuredProjects.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // High-fidelity Camera Lens Hyper-zoom Transition handler
  const triggerZoomReveal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsZoomed(true);
      setIsTransitioning(false);
    }, 950); // Syncs with the length of shutter & zoom flash animation
  };

  const triggerResetShowcase = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsZoomed(false);
      setActiveSlide(0);
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-[#062A35] text-white py-24 px-4 sm:px-6 lg:px-8 transition-all duration-700"
    >
      {/* Background stars / constellation grid with parallax movement */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(rgba(0,184,217,0.18)_1px,transparent_1px)] [background-size:28px_28px] opacity-50 pointer-events-none select-none"
      />

      {/* Cybernetic geometric framing guidelines */}
      <div className="absolute inset-10 border border-white/[0.03] pointer-events-none select-none rounded-3xl" />
      <div className="absolute top-10 bottom-10 left-1/2 w-[1px] bg-white/[0.01] pointer-events-none" />
      <div className="absolute left-10 right-10 top-1/2 h-[1px] bg-white/[0.01] pointer-events-none" />

      {/* Atmospheric bottom & top premium gradient glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 dark:from-[#0B0F14] to-transparent opacity-100 pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-50 dark:from-[#0B0F14] to-transparent opacity-100 pointer-events-none transition-colors duration-500" />

      {/* Decorative Floating Tech Anchors */}
      <motion.div
        style={{ y: fgY, rotate: rotationOffset }}
        className="absolute top-[15%] left-[10%] w-16 h-16 border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-2xl flex items-center justify-center pointer-events-none hidden md:flex"
      >
        <Compass className="w-6 h-6 text-[#00B8D9] opacity-30 animate-spin-slow" />
      </motion.div>

      {/* Dramatic Cinematic Hyper-zoom Shutter Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-50 bg-[#0B0F14] flex items-center justify-center overflow-hidden pointer-events-auto"
          >
            {/* Shutter Blades Zoom animation */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 8, 25], rotate: [0, 180, 360] }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full border-[10px] border-[#00B8D9] bg-transparent opacity-80 flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00C853] to-[#00B8D9] blur-md" />
            </motion.div>

            {/* Glowing flash effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute inset-0 bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isZoomed ? (
            /* CINEMATIC BIRD REVEAL INTRO */
            <motion.div
              key="bird-intro"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full text-center flex flex-col items-center"
            >
              {/* Dynamic scroll-transform text indicator */}
              <motion.div style={{ y: textParallax }} className="space-y-4">
                <span className="font-mono text-xs tracking-[0.35em] text-[#00B8D9] uppercase block font-black">
                  EXPLORE CINEMATIC DESIGN VISION
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white max-w-2xl leading-tight">
                  The Shutter of Creative Mind
                </h2>
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#00C853] to-[#00B8D9] mx-auto rounded-full mt-2" />
              </motion.div>

              {/* Interactive Bird Silhouette & Pulsing Eye Grid */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center my-10 group">
                {/* Visual grid background circles */}
                <div className="absolute inset-0 rounded-full border border-white/[0.04] scale-[1.2] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-white/[0.04] scale-[1.4] pointer-events-none" />

                {/* Outer floating circle aura */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.15, 0.3, 0.15],
                    rotate: 360
                  }}
                  transition={{
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#00B8D9]/25"
                />

                {/* Pulsing visual glow core */}
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-[#00C853] to-[#00B8D9] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />

                {/* Custom Geometric Raven Silhouette from the original video style */}
                <svg
                  viewBox="0 0 120 120"
                  className="w-48 h-48 sm:w-56 sm:h-56 text-white fill-current transition-all duration-700 relative z-10 drop-shadow-[0_8px_32px_rgba(0,184,217,0.3)] hover:scale-103 cursor-pointer"
                  onClick={triggerZoomReveal}
                >
                  {/* Styled Raven / Bird Profile (Sleek geometry) */}
                  <path d="M15,60 Q45,35 75,48 Q95,30 108,18 Q100,50 88,62 Q92,65 97,62 Q88,80 70,86 Q52,92 35,83 L15,60 Z" />
                  <path d="M45,66 Q58,54 70,62 Q64,72 45,66 Z" className="text-[#062A35]" />
                </svg>

                {/* Highly aesthetic coordinates HUD box around eye */}
                <div className="absolute top-[34%] left-[64%] pointer-events-none font-mono text-[8px] text-[#00B8D9]/75 bg-slate-950/80 px-1.5 py-0.5 rounded border border-[#00B8D9]/20 tracking-wider">
                  F_0.95 / FOCUS
                </div>

                {/* Glowing Cybernetic Eye Target button */}
                <motion.button
                  onClick={triggerZoomReveal}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.85 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(0, 184, 217, 0.5)",
                      "0 0 0 20px rgba(0, 184, 217, 0)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut",
                    },
                  }}
                  className="absolute top-[42%] left-[60%] z-20 w-10 h-10 rounded-full bg-gradient-to-r from-[#00C853] to-[#00B8D9] border-[3px] border-[#062A35] shadow-[0_0_20px_rgba(0,184,217,0.8)] flex items-center justify-center cursor-pointer"
                  title="Click to hyper-focus"
                >
                  <Eye className="w-4 h-4 text-white animate-pulse" />
                </motion.button>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md mt-4 mb-8 leading-relaxed">
                Tekan <strong>Target Fokus Mata Burung</strong> atau logo di atas untuk menembus batas visual dan merajut kreasi sinematik terbaik HACREATIVE.
              </p>

              <motion.button
                onClick={triggerZoomReveal}
                whileHover={{ x: 6 }}
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-xs font-mono tracking-[0.2em] text-[#00B8D9] font-bold uppercase transition-colors cursor-pointer"
              >
                <span>INITIATE LENS ZOOM</span>
                <MoveRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ) : (
            /* PREMIUM PARALLAX PORTFOLIO SHOWCASE SLIDER */
            <motion.div
              key="showcase-content"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl w-full flex flex-col justify-between min-h-[65vh] space-y-8"
            >
              {/* Premium Top Bar of Showcase */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/20 animate-pulse">
                    <Sparkles className="w-4 h-4 text-[#00C853]" />
                  </div>
                  <div>
                    <span className="font-display font-black tracking-widest text-white uppercase text-xs block">
                      HACREATIVE SELECTIONS
                    </span>
                    <span className="font-mono text-[9px] text-slate-400 tracking-wider block uppercase">
                      Curated Premium Showroom
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={triggerResetShowcase}
                  className="font-mono text-[10px] tracking-widest text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>RESET LENS</span>
                </button>
              </div>

              {/* Interactive Slide Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-4">
                {/* Details Card (Left Column) */}
                <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="space-y-6"
                    >
                      {/* Index Tag */}
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-[10px] font-black tracking-widest text-white bg-[#00B8D9] px-3 py-1 rounded-lg">
                          {featuredProjects[activeSlide].category}
                        </span>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <span className="font-mono text-xs text-[#00C853] font-bold">
                          SHOWROOM 0{activeSlide + 1} / 0{featuredProjects.length}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-black text-3xl sm:text-4xl text-white leading-none tracking-tight">
                        {featuredProjects[activeSlide].title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-slate-300 leading-relaxed">
                        {featuredProjects[activeSlide].description}
                      </p>

                      {/* Tools & Specifications */}
                      <div className="space-y-3 pt-2">
                        <span className="font-mono text-[10px] text-[#00B8D9] tracking-widest block font-bold uppercase">
                          DESIGN STACK & TOOLS
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {featuredProjects[activeSlide].tools.map((tool) => (
                            <span
                              key={tool}
                              className="font-mono text-[10px] bg-white/5 border border-white/10 hover:border-[#00C853]/50 rounded-lg px-3 py-1.5 transition-all"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Direct Booking CTA */}
                      <div className="pt-4">
                        <a
                          href={`https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(
                            featuredProjects[activeSlide].whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00C853] to-[#00B8D9] hover:from-[#00C853]/90 hover:to-[#00B8D9]/90 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(0,200,83,0.2)] hover:shadow-[0_4px_25px_rgba(0,200,83,0.35)] cursor-pointer"
                        >
                          <span>Pesan Desain Serupa</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Immersive Photo Preview (Right Column) with 3D tilted card movement */}
                <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
                  <motion.div
                    whileHover={{ scale: 1.015, rotateY: 1.5, rotateX: -1.5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-white/10 bg-[#0B0F14] group cursor-pointer"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        {/* Dynamic colorful backing glow linked to project color */}
                        <div
                          className="absolute inset-0 opacity-25 pointer-events-none z-0"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${featuredProjects[activeSlide].colorHex} 0%, transparent 80%)`,
                          }}
                        />

                        {/* Visual guidelines cross overlay */}
                        <div className="absolute inset-0 border border-white/[0.04] m-4 pointer-events-none z-10 rounded-xl" />

                        <img
                          src={featuredProjects[activeSlide].image}
                          alt={featuredProjects[activeSlide].title}
                          className="w-full h-full object-cover relative z-10 transition-transform duration-[1500ms] group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />

                        {/* Top banner visual HUD inside card */}
                        <div className="absolute top-4 left-4 z-20 font-mono text-[9px] bg-slate-950/80 px-2 py-1 rounded border border-white/10 text-slate-300 pointer-events-none">
                          ASSET_REF: {featuredProjects[activeSlide].id.toUpperCase()}
                        </div>

                        {/* Brand watermark badge */}
                        <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity">
                          <img src={PERSONAL_INFO.logo} alt="HACREATIVE" className="w-full h-full object-contain" />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>

              {/* Slider Bottom Controls & Dots Indicators */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                {/* Dots indicator list */}
                <div className="flex items-center space-x-2">
                  {featuredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeSlide === idx ? 'w-8 bg-[#00B8D9]' : 'w-2.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow navigation triggers */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrev}
                    className="p-3.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
