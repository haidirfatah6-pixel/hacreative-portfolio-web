/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, MessageSquare, Menu, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOrderClick: () => void;
  onAdminClick: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode, onOrderClick, onAdminClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-[#0B0F14]/80 shadow-md backdrop-blur-md border-b border-[#062A35]/5 dark:border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity / Left Side */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-3 group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-[#062A35] flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105 border border-[#00B8D9]/20">
            <img
              src={PERSONAL_INFO.logo}
              alt="HACREATIVE Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,184,217,0.3)]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none tracking-wider text-slate-900 dark:text-white transition-colors duration-200">
              {PERSONAL_INFO.brand}
            </span>
            <span className="font-sans text-[10px] tracking-widest text-[#00B8D9] font-medium uppercase mt-0.5">
              {PERSONAL_INFO.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation / Center */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#00B8D9] dark:hover:text-[#00B8D9] transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00B8D9] transition-all duration-300 group-hover:with group-hover:w-full" />
            </a>
          ))}
          {/* Admin shortcut button */}
          <button
            onClick={onAdminClick}
            className="font-mono text-xs text-[#00C853] dark:text-[#00C853] hover:underline px-2 py-1 rounded bg-[#00C853]/5 border border-[#00C853]/15 transition-all"
          >
            Manage Data
          </button>
        </nav>

        {/* Action Group / Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </motion.button>

          {/* Core CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOrderClick}
            className="px-5 py-2.5 rounded-xl bg-[#062A35] dark:bg-[#00B8D9] text-white dark:text-[#0b0f14] font-sans font-semibold text-sm shadow-md hover:bg-[#00B8D9] hover:text-white dark:hover:bg-white hover:shadow-lg transition-all flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Order Design</span>
          </motion.button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Admin toggle shortcut on mobile */}
          <button
            onClick={onAdminClick}
            className="font-mono text-[10px] text-[#00C853] px-2 py-1 rounded bg-[#00C853]/10"
          >
            DB
          </button>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0B0F14] border-b border-[#062A35]/5 dark:border-white/5 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-xl font-sans text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#00B8D9] dark:hover:text-[#00B8D9] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="w-full py-3 rounded-xl bg-[#062A35] dark:bg-[#00B8D9] text-white dark:text-[#0b0f14] font-semibold text-center text-sm shadow flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Order Design</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
