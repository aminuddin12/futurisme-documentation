'use client';

import { Icon } from '@iconify/react';

const features = [
  {
    icon: 'solar:structure-bold-duotone',
    title: 'Arsitektur Project',
    description: 'Pahami struktur folder Next.js App Router, manajemen state, dan konfigurasi environment.',
    link: '/documentation/structure'
  },
  {
    icon: 'solar:pallete-2-bold-duotone',
    title: 'Design System',
    description: 'Koleksi komponen UI reusable, palet warna, dan tipografi menggunakan Tailwind CSS.',
    link: '/documentation/components'
  },
  {
    icon: 'solar:shield-keyhole-bold-duotone',
    title: 'Autentikasi & Keamanan',
    description: 'Implementasi login, register, proteksi route, dan manajemen sesi pengguna.',
    link: '/documentation/auth'
  },
  {
    icon: 'solar:cart-large-2-bold-duotone',
    title: 'Alur Transaksi',
    description: 'Dokumentasi logic keranjang belanja, checkout, dan integrasi payment gateway.',
    link: '/documentation/orders'
  },
  {
    icon: 'solar:database-bold-duotone',
    title: 'Data Fetching',
    description: 'Standarisasi pengambilan data menggunakan Server Actions dan MSW untuk mocking.',
    link: '/documentation/api'
  },
  {
    icon: 'solar:chat-round-dots-bold-duotone',
    title: 'Modul Chat Real-time',
    description: 'Dokumentasi teknis sistem chat, websocket, dan manajemen pesan.',
    link: '/documentation/chat'
  }
];

export default function LandingFeatures() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Jelajahi Topik Utama
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Semua yang Anda butuhkan untuk mengembangkan dan memelihara Futurisme Store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <a 
              key={index}
              href={feature.link}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={feature.icon} className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}