'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import ThemeSwitcher from '@/components/Theme/ThemeSwitcher'; 
import LangSwitcher from '@/lang/LangSwitcher';
import LogoDefault from '@/components/LogoDefault'; // 1. Import komponen LogoDefault

export default function LandingNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
              <LogoDefault /> 
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/documentation/getting-started" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Panduan Awal
            </Link>
            <Link href="/documentation/components" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Komponen
            </Link>
            <Link href="/documentation/api" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              API Reference
            </Link>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <div className="h-10 w-px bg-gray-200 dark:bg-gray-800"></div>
            <LangSwitcher />
            <div className="h-10 w-px bg-gray-200 dark:bg-gray-800"></div>
            <a 
              href="https://store.futurisme.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span>Live Store</span>
              <Icon icon="solar:arrow-right-up-linear" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}