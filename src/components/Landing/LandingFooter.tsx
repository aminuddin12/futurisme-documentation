'use client';

import { Icon } from '@iconify/react';
import LogoDefault from '@/components/LogoDefault';

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-0 overflow-hidden min-h-[600px] flex flex-col justify-between">
      
      {/* Background Giant Logo Watermark */}
      <div className="absolute pt-45 inset-0 flex justify-center items-center pointer-events-none z-0 select-none overflow-hidden">
        {/* PERBAIKAN:
            1. Mengurangi scale menjadi [4]-[6] agar teks "Futurisme Docs" muat di layar dan terbaca.
            2. Membungkus LogoDefault dengan div class="dark" untuk memaksa teks render sebagai Putih.
            3. Filter 'invert' membalik Putih -> Hitam di Light Mode.
        */}
        <div className="transform scale-[5] sm:scale-[6] md:scale-[7] opacity-7 dark:opacity-20 grayscale invert dark:invert-0">
           {/* Force dark mode local agar teks & icon awalnya berwarna PUTIH semua */}
           <div className="dark">
              <LogoDefault className="cursor-default" showText={true} />
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LogoDefault className="h-8 w-8" showText={true} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              Dokumentasi resmi untuk tim pengembang Futurisme Store. Dibangun untuk memudahkan skalabilitas dan perawatan kode.
            </p>
            <div className="flex gap-4">
              {/* Social / Repo Links */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Icon icon="mdi:github" className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Icon icon="mdi:slack" className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="/documentation/getting-started" className="text-gray-500 hover:text-primary transition-colors">Getting Started</a></li>
              <li><a href="/documentation/structure" className="text-gray-500 hover:text-primary transition-colors">Folder Structure</a></li>
              <li><a href="/documentation/components" className="text-gray-500 hover:text-primary transition-colors">UI Components</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-20 w-full border-t border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            © {year} Futurisme Store Development Team. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Powered by</span>
            <Icon icon="logos:nextjs-icon" />
            <span className="font-semibold text-gray-700 dark:text-gray-200">Next.js 14</span>
          </div>
        </div>
      </div>
    </footer>
  );
}