/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data';

interface ServicesProps {
  onOrderClick: () => void;
}

export default function Services({ onOrderClick }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-[#0B0F14] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-[30%] -left-[20%] w-[60%] h-[60%] bg-[#00C853]/5 dark:bg-[#00C853]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00B8D9] dark:text-[#00B8D9] uppercase font-bold">
            Layanan Desain
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight mt-2 mb-4">
            Jasa Desain Profesional
          </h2>
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Membantu kebutuhan visual konten digital, promosi cetak, hingga identitas branding bisnis Anda secara cepat dan rapi.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00C853] to-[#00B8D9] mx-auto rounded-full mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => {
            // Retrieve Icon Component dynamically
            let IconComponent = Icons.Sparkles; // Fallback
            if (service.iconName === 'Instagram') IconComponent = Icons.Instagram;
            if (service.iconName === 'Image') IconComponent = Icons.Image;
            if (service.iconName === 'Layers') IconComponent = Icons.Layers;
            if (service.iconName === 'Megaphone') IconComponent = Icons.Megaphone;
            if (service.iconName === 'Gamepad2') IconComponent = Icons.Gamepad2;
            if (service.iconName === 'Briefcase') IconComponent = Icons.Briefcase;

            // Formatted WhatsApp booking message
            const serviceWaUrl = `https://wa.me/${PERSONAL_INFO.phone}?text=Halo%20Muhamad%20Haidir,%20saya%20tertarik%20dengan%20jasa%20*${encodeURIComponent(service.title)}*%20Anda.`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#062A35]/10 border border-slate-200/50 dark:border-white/5 shadow-xs hover:shadow-xl hover:border-[#00C853]/20 dark:hover:shadow-[#00C853]/5 flex flex-col justify-between transition-all"
              >
                {/* Visual Top Decorative Accent Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00C853] to-[#00B8D9] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Dynamic Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-[#00B8D9] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-[#062A35] dark:text-[#00B8D9]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features / Tags bullet list */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] font-bold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer of the Card: Pricing & WhatsApp Link */}
                <div className="border-t border-slate-200/50 dark:border-white/5 pt-5 mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                      Price Range
                    </span>
                    <span className="font-sans text-sm font-bold text-slate-800 dark:text-[#00C853]">
                      {service.priceRange || 'Contact us'}
                    </span>
                  </div>

                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#062A35] hover:bg-[#00C853] text-white dark:bg-slate-800 dark:hover:bg-[#00C853] dark:hover:text-white transition-colors"
                    title={`Pesan Jasa ${service.title}`}
                  >
                    <Icons.ChevronRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
