'use client';

import React, { useEffect } from 'react';
import ThemeContextProvider from '../context/theme-context';
import LanguageContextProvider from '../context/language-context';
import ActiveSectionContextProvider from '../context/active-section-context';
import { printDevConsoleBanner } from '../assets/lib/devConsole';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    printDevConsoleBanner();
  }, []);

  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}
