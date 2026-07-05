/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Instagram, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface CTAProps {
  onOrderClick: () => void;
}

export default function CTA({ onOrderClick }: CTAProps) {
  // Direct Instagram url
  const igUrl = `https://instagram.com/${PERSONAL_INFO.instagram}`;
  // Direct WhatsApp url
  const waUrl = `https://wa.me/${PERSONAL_INFO.phone}?text=Halo%20Muhamad%20Haidir,%20saya%20tertarik%20dengan%20jasa%20desain%20kreatif%20HACREATIVE.`;

  return (
    <section className="py-24 bg-[#062A35] text-white relative overflow-hidden">
      {/* Background Decorative Circles and Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#00C853]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00B8D9]/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#00B8D9] uppercase">
            Start Your Project Today
          </span>
        </motion.div>

        {/* Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
          Need a clean and modern design?
        </h2>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Let’s create visuals that make your brand, content, or promotion look more professional. Konsultasikan ide Anda sekarang secara gratis!
        </p>

        {/* Interactive Action Button Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto pt-4">
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOrderClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00B8D9] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Order Design</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-all flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-[#00B8D9]" />
            <span>Chat WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={igUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 transition-all flex items-center justify-center space-x-2"
          >
            <Instagram className="w-4 h-4 text-[#E91E63]" />
            <span>View Instagram</span>
          </motion.a>

        </div>

        {/* Subtle helper text */}
        <p className="font-mono text-[9px] text-slate-400 tracking-wider pt-2 uppercase">
          Muhamad Haidir • Fast Response • 100% Original Artwork
        </p>

      </div>
    </section>
  );
}
