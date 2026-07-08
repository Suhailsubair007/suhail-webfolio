import type { Metadata } from 'next';
import '../index.css';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://suhailsubair.online'),
  title: {
    default: 'Suhail Subair — Senior Full Stack Developer',
    template: '%s | Suhail Subair',
  },
  description:
    'Senior Full Stack Developer specialising in scalable backend systems, full-stack web development, and React Native mobile apps.',
  keywords: [
    'Suhail Subair',
    'Senior Full Stack Developer',
    'React Developer',
    'Node.js',
    'TypeScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Suhail Subair — Senior Full Stack Developer',
    description: 'Scalable backend systems, full-stack web development, and React Native apps.',
    url: 'https://suhailsubair.online',
    siteName: 'Suhail Subair Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Suhail Subair' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhail Subair — Senior Full Stack Developer',
    description: 'Scalable backend systems, full-stack web, React Native.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
