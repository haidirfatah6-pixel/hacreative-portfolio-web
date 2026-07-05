/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Stat } from './types';

export const PERSONAL_INFO = {
  name: 'Haidir',
  brand: 'HACREATIVE',
  subtitle: 'Creative Studio',
  school: 'SMKN 2 Garut',
  major: 'Desain Komunikasi Visual (DKV)',
  role: 'Graphic Designer / Visual Designer Student',
  phone: '6281564691925', // Formatted from 081 654 691 925
  email: 'team.hacreative@gmail.com',
  instagram: 'hacreativee',
  website: 'https://hacreative.com',
  address: 'Garut, Jawa Barat, Indonesia',
  avatar: '/assets/input_file_0.png',
  logo: '/assets/input_file_3.png'
};

export const SERVICES: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Design',
    description: 'Desain feed Instagram, carousel, story, dan visual content promosi yang estetis, rapi, dan dirancang khusus untuk meningkatkan engagement audiens Anda.',
    iconName: 'Instagram',
    tags: ['Instagram Feed', 'Story', 'Carousel', 'Canva/PSD'],
    priceRange: 'Rp 50.000 - Rp 150.000 / post'
  },
  {
    id: 'banner-design',
    title: 'Banner Design',
    description: 'Header banner custom untuk WhatsApp Business, YouTube channel, Twitter/X, hingga banner cetak MMT/spanduk dengan layout modern dan informatif.',
    iconName: 'Image',
    tags: ['WhatsApp Banner', 'YouTube Header', 'MMT Spanduk'],
    priceRange: 'Rp 75.000 - Rp 200.000'
  },
  {
    id: 'logo-design',
    title: 'Logo & Identity',
    description: 'Pembuatan logo orisinal, modern, dan bermakna tinggi untuk identitas brand, bisnis personal, tim gaming esport, atau komunitas Anda.',
    iconName: 'Layers',
    tags: ['Logo Vector', 'Brand Identity', 'Business Card'],
    priceRange: 'Rp 150.000 - Rp 500.000'
  },
  {
    id: 'poster-design',
    title: 'Poster & Flyer',
    description: 'Poster promosi event, pamflet digital, desain brosur kreatif, hingga poster film fiksi DKV dengan tata letak visual dinamis dan penuh energi.',
    iconName: 'Megaphone',
    tags: ['Event Poster', 'Digital Flyer', 'DKV Poster'],
    priceRange: 'Rp 80.000 - Rp 250.000'
  },
  {
    id: 'gaming-design',
    title: 'Gaming Design',
    description: 'Visual gaming premium meliputi layout streaming, twitch overlay, thumbnail youtube gaming, maskot logo tim esport, dan media kit pendukung.',
    iconName: 'Gamepad2',
    tags: ['Esports Logo', 'Stream Overlay', 'Youtube Thumbnail'],
    priceRange: 'Rp 100.000 - Rp 350.000'
  },
  {
    id: 'branding-visual',
    title: 'Branding Visual',
    description: 'Paket lengkap visual identity untuk UMKM baru, meliputi kartu nama premium, mockup layout ruangan, desain packaging, serta panduan warna brand.',
    iconName: 'Briefcase',
    tags: ['Corporate Kit', 'Product Mockup', 'Visual Guide'],
    priceRange: 'Rp 300.000 - Rp 1.000.000'
  }
];

export const STATS: Stat[] = [
  { label: 'Project Selesai', value: '45+', iconName: 'CheckCircle' },
  { label: 'Klien Puas', value: '25+', iconName: 'Users' },
  { label: 'Tahun Pengalaman', value: '2+', iconName: 'Award' },
  { label: 'Nilai Kreativitas', value: '100%', iconName: 'Sparkles' }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Business Card & Corporate Stationery HACREATIVE',
    category: 'Branding',
    color: 'blue',
    colorHex: '#00B8D9',
    tags: ['Logo', 'Business Card', 'Stationery', 'Identity'],
    image: '/assets/input_file_1.png',
    description: 'Desain kartu nama resmi dan branding kit korporat untuk HACREATIVE. Mengedepankan struktur tata letak minimalis, modern, dan profesional dengan dominasi warna biru gelap gelap dan logo ikonik di setiap sisi media cetak.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    whatsappMessage: 'Halo Muhamad Haidir, saya melihat portofolio *Business Card & Corporate Stationery HACREATIVE* Anda dan ingin memesan desain identitas branding serupa.',
    featured: true,
    date: 'Februari 2026',
    client: 'HACREATIVE Studio'
  },
  {
    id: 'p2',
    title: 'Official Team Meeting Room Signage Mockup',
    category: 'Branding',
    color: 'black',
    colorHex: '#0B0F14',
    tags: ['Signage', 'Wall Mockup', 'Corporate', '3D Render'],
    image: '/assets/input_file_2.png',
    description: 'Implementasi logo HACREATIVE dalam bentuk wall signage 3D premium di ruang pertemuan formal. Menampilkan pencahayaan ambient warm-glow di belakang logo, dipadukan dengan meja kayu oak mewah dan kursi ergonomis putih abu-abu, memberikan kesan prestisius dan profesional.',
    tools: ['Adobe Photoshop', 'Blender 3D', 'Lightroom'],
    whatsappMessage: 'Halo Muhamad Haidir, saya tertarik dengan portofolio *Official Team Meeting Room Signage Mockup* Anda. Bisakah Anda membuatkan visual mockup ruangan 3D dengan logo saya?',
    featured: true,
    date: 'Maret 2026',
    client: 'Official HACREATIVE Team'
  },
  {
    id: 'p3',
    title: 'Banner WhatsApp Business DKV Exhibition',
    category: 'Banner WhatsApp',
    color: 'green',
    colorHex: '#00C853',
    tags: ['WhatsApp', 'Banner', 'Event', 'DKV'],
    image: 'https://picsum.photos/seed/whatsapp-banner/800/600',
    description: 'Desain banner promosi vertikal dan horizontal yang ramah mobile untuk akun WhatsApp Business. Dibuat khusus untuk promosi pameran karya DKV SMKN 2 Garut dengan paduan teks tebal yang terbaca jelas dan layout modern.',
    tools: ['Adobe Photoshop', 'Illustrator'],
    whatsappMessage: 'Halo Muhamad Haidir, saya butuh jasa pembuatan *Banner WhatsApp Business* untuk promosi produk/event saya.',
    featured: false,
    date: 'Januari 2026',
  },
  {
    id: 'p4',
    title: 'YouTube Tech & Design Banner Theme 2026',
    category: 'Banner YouTube',
    color: 'yellow',
    colorHex: '#FFC107',
    tags: ['YouTube', 'Banner', 'Graphic Design', 'Clean'],
    image: 'https://picsum.photos/seed/youtube-banner/800/600',
    description: 'Desain header YouTube responsive untuk channel tutorial desain grafis dengan penekanan pada harmoni warna kuning neon dan charcoal. Dilengkapi grid kosmik dan tekstur abstrak yang memberikan vibes tech-forward.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    whatsappMessage: 'Halo Muhamad Haidir, saya ingin memesan *Banner YouTube* keren dengan tema modern minimalis seperti di portofolio Anda.',
    featured: false,
    date: 'Desember 2025',
    client: 'PixelCraft Channel'
  },
  {
    id: 'p5',
    title: 'Instagram Carousel - 10 Golden Rules of Typography',
    category: 'Feed Instagram',
    color: 'purple',
    colorHex: '#9C27B0',
    tags: ['Instagram', 'Carousel', 'Educational', 'Layout'],
    image: 'https://picsum.photos/seed/instagram-feed/800/600',
    description: 'Visual edukatif 5-slide carousel Instagram yang membahas dasar-dasar pemilihan font untuk desainer pemula. Menggunakan grid asimetris, kontras warna tinggi, dan panduan transisi slide yang mulus secara visual.',
    tools: ['Adobe Photoshop', 'Figma'],
    whatsappMessage: 'Halo Muhamad Haidir, saya menyukai *Instagram Carousel Rules of Typography* Anda. Saya ingin memesan jasa desain konten edukasi carousel.',
    featured: true,
    date: 'April 2026',
    client: 'DKV Community'
  },
  {
    id: 'p6',
    title: 'Poster Film DKV SMKN 2 Garut - Goresan Karya',
    category: 'Poster',
    color: 'red',
    colorHex: '#E53935',
    tags: ['Poster', 'Movie', 'DKV', 'Artistic'],
    image: 'https://picsum.photos/seed/movie-poster/800/600',
    description: 'Desain poster promosi film dokumenter karya siswa SMKN 2 Garut. Menggabungkan teknik photo manipulation, double exposure, serta tipografi retro-modern yang dramatis untuk menciptakan ketegangan emosional.',
    tools: ['Adobe Photoshop', 'Lightroom'],
    whatsappMessage: 'Halo Muhamad Haidir, poster film *Goresan Karya* sangat impresif. Saya tertarik untuk memesan poster event bertema sinematik.',
    featured: false,
    date: 'Maret 2026',
    client: 'Sineas SMKN 2 Garut'
  },
  {
    id: 'p7',
    title: 'Logo Maskot Esports - Garuda Cyber Elite',
    category: 'Gaming Design',
    color: 'orange',
    colorHex: '#FF5722',
    tags: ['Gaming', 'Esports', 'Logo', 'Mascot'],
    image: 'https://picsum.photos/seed/esports-logo/800/600',
    description: 'Logo tim esport profesional bermotif burung Garuda futuristik dengan helm cybernetic. Menggunakan shading warna orange-cyan kontras tinggi, garis vector tegas, dan shadow dinamis untuk menegaskan kekuatan kompetitif.',
    tools: ['Adobe Illustrator'],
    whatsappMessage: 'Halo Muhamad Haidir, saya ingin membuat *Logo Maskot Esports* untuk tim saya, dengan konsep keren seperti logo Garuda Cyber Elite Anda.',
    featured: false,
    date: 'Mei 2026',
    client: 'Garuda Esports Team'
  },
  {
    id: 'p8',
    title: 'Brand Logo HACREATIVE Visual Core',
    category: 'Logo',
    color: 'pink',
    colorHex: '#E91E63',
    tags: ['Logo', 'Branding', 'Minimalist', 'Symbol'],
    image: '/assets/input_file_3.png',
    description: 'Desain logo inti HACREATIVE. Melambangkan inisial H dan A dalam sudut miring dinamis 3D yang dipadukan dengan hexagonal prism melayang di sisi kanan. Desain ini mewakili visi tak terbatas dari kreativitas desain visual modern.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    whatsappMessage: 'Halo Muhamad Haidir, saya ingin mendiskusikan pembuatan *Logo Brand Minimalis* yang memiliki makna filosofis kuat seperti logo HACREATIVE Anda.',
    featured: true,
    date: 'Maret 2026',
    client: 'HACREATIVE Studio'
  }
];
