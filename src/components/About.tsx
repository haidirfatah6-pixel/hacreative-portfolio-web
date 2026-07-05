/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Clock, Eye, Sparkles, CheckSquare, Zap, Target, Award, Users } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data';

export default function About() {
  const highlights = [
    {
      title: 'Fast Design',
      description: 'Pengerjaan desain yang efisien, cepat, dan responsif terhadap dateline promosi digital Anda.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Modern Visual',
      description: 'Estetika premium yang kekinian, berkarakter kuat, dan relevan dengan tren visual terkini.',
      icon: Sparkles,
      color: 'text-[#00B8D9] bg-[#00B8D9]/10'
    },
    {
      title: 'Social Media Ready',
      description: 'Desain yang dioptimalkan sesuai rasio platform (Instagram, WA, YouTube) agar tajam dan profesional.',
      icon: Target,
      color: 'text-purple-500 bg-purple-500/10'
    },
    {
      title: 'Custom Request',
      description: 'Fleksibilitas penuh menerima revisi dan penyesuaian khusus demi kepuasan identitas visual brand Anda.',
      icon: CheckSquare,
      color: 'text-[#00C853] bg-[#00C853]/10'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-[#062A35]/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Main Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text/Intro Column (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[#00C853] uppercase font-bold block">
              TENTANG HACREATIVE
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
              Mewujudkan Ide Anda Menjadi Karya Visual Menakjubkan
            </h2>
            
            <div className="w-12 h-1 bg-gradient-to-r from-[#00C853] to-[#00B8D9] rounded-full" />
            
            <p className="font-sans text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>HACREATIVE</strong> adalah portfolio kreatif yang menampilkan berbagai karya desain visual untuk kebutuhan promosi digital, social media, banner, logo, gaming content, dan identitas brand. Saya membantu individu, komunitas, dan bisnis menciptakan visual yang modern, rapi, dan siap digunakan.
            </p>

            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Sebagai siswa jurusan <strong>Desain Komunikasi Visual (DKV) di {PERSONAL_INFO.school}</strong>, saya dibekali dengan pemahaman teori komposisi warna, tata letak, grid sistem, dan tipografi yang kuat. Setiap proyek diolah dengan standar estetika tinggi agar dapat bersaing di ekosistem digital masa kini.
            </p>

            {/* Micro Badges for School Identity */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm border border-slate-150">
                School: SMKN 2 Garut
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm border border-slate-150">
                Major: Desain Komunikasi Visual
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm border border-slate-150">
                Focus: Graphic Designer
              </span>
            </div>
          </div>

          {/* Experience Statistics Column (Right) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => {
              // Determine Lucide Icon based on iconName
              let IconComponent = Award;
              if (stat.iconName === 'CheckCircle') IconComponent = Clock;
              if (stat.iconName === 'Users') IconComponent = Users;
              if (stat.iconName === 'Sparkles') IconComponent = Sparkles;

              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0B0F14] border border-slate-200/60 dark:border-white/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00B8D9]/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-[#00B8D9]" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-3xl text-slate-900 dark:text-white block">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs text-slate-400 dark:text-slate-500 block mt-1">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Highlights Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0B0F14] border border-slate-200/60 dark:border-white/5 shadow-xs hover:shadow-lg hover:border-[#00B8D9]/20 transition-all flex flex-col"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
