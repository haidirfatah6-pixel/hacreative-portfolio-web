/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, MessageSquare, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#0B0F14] border-t border-slate-200/60 dark:border-white/5 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Col 1: Logo & Tagline (Left side, covers 5 columns on desktop) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 overflow-hidden rounded-lg bg-[#062A35] flex items-center justify-center p-1 border border-[#00B8D9]/20">
                <img
                  src={PERSONAL_INFO.logo}
                  alt="HACREATIVE Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,184,217,0.3)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none tracking-wider text-slate-900 dark:text-white">
                  {PERSONAL_INFO.brand}
                </span>
                <span className="font-sans text-[10px] tracking-widest text-[#00B8D9] font-medium uppercase mt-0.5">
                  {PERSONAL_INFO.subtitle}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Portfolio desain profesional dan layanan jasa desain kreatif oleh Muhamad Haidir. Dibuat khusus untuk membantu mengomunikasikan identitas brand Anda secara modern, rapi, dan dinamis.
            </p>
          </div>

          {/* Col 2: Navigation Links (Middle, covers 3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Showcase', href: '#showcase' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About Me', href: '#about' },
                { label: 'Services', href: '#services' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-sm text-slate-500 hover:text-[#00B8D9] dark:text-slate-400 dark:hover:text-[#00B8D9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location details (Right, covers 4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            
            <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#00B8D9] flex-shrink-0" />
                <span>{PERSONAL_INFO.address} ({PERSONAL_INFO.school})</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#00C853] flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#00C853] transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Social Icon links toolbar */}
              <div className="flex items-center space-x-4 pt-3">
                <a
                  href={`https://instagram.com/${PERSONAL_INFO.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-pink-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-[#E91E63] dark:text-slate-300 transition-all"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-[#00C853] dark:text-slate-300 transition-all"
                  title="Contact via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line, Copyright, Scroll to Top */}
        <div className="border-t border-slate-200/60 dark:border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left">
            © {currentYear} {PERSONAL_INFO.brand}. All rights reserved. Created for Muhamad Haidir - {PERSONAL_INFO.school} DKV.
          </p>

          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#00B8D9] hover:text-white dark:hover:bg-[#00B8D9] dark:hover:text-white transition-all text-xs font-mono font-semibold tracking-wider cursor-pointer shadow-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
