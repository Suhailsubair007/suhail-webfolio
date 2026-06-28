'use client';

import React from 'react';
import ThemeContextProvider from '../context/theme-context';
import LanguageContextProvider from '../context/language-context';
import ActiveSectionContextProvider from '../context/active-section-context';

export default function Providers({ children }: { children: React.ReactNode }) {
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
