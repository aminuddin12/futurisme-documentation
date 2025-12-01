'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
// 1. Import LanguageProvider
import { LanguageProvider } from '@/context/LanguageContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* 2. Bungkus children dengan LanguageProvider di sini */}
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}