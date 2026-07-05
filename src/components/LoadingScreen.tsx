/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Slight delay after 100% for smooth outro
          return 100;
        }
        // Random incremental progress
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#062A35] text-white">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] bg-[#00C853] opacity-5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] bg-[#00B8D9] opacity-10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Brand Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center mb-8 w-40 h-40"
        >
          {/* Pulsing ring aura */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-[#00B8D9] opacity-20 blur-xl"
          />

          <img
            src={PERSONAL_INFO.logo}
            alt="HACREATIVE Logo"
            className="w-32 h-32 object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(0,184,217,0.3)]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image doesn't load
              e.currentTarget.style.display = 'none';
              const sib = e.currentTarget.nextElementSibling as HTMLElement;
              if (sib) sib.style.display = 'flex';
            }}
          />

          {/* Inline SVG Fallback in case logo path has loading issues */}
          <div className="hidden absolute inset-0 items-center justify-center bg-[#0B0F14] rounded-2xl border border-[#00B8D9]/20 shadow-lg">
            <span className="font-display font-bold text-4xl text-[#00B8D9]">HA</span>
          </div>
        </motion.div>

        {/* Brand Text Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-display font-bold text-3xl tracking-widest text-white mb-1">
            HACREATIVE
          </h1>
          <p className="font-sans text-xs tracking-widest text-[#00B8D9]/80 uppercase mb-8">
            {PERSONAL_INFO.subtitle}
          </p>
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-48 h-[3px] bg-[#0B0F14]/60 rounded-full overflow-hidden relative border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00C853] to-[#00B8D9]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Percentage Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="mt-3 font-mono text-[10px] tracking-wider text-white"
        >
          {Math.min(progress, 100)}% LOADED
        </motion.div>
      </div>

      {/* Footer Branding in Loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 font-mono text-[10px] tracking-widest text-white/60 uppercase"
      >
        Muhamad Haidir • Portfolio 2026
      </motion.div>
    </div>
  );
}
