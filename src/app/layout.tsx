import type { Metadata } from 'next';
import '../index.css';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://suhailsubair.com'),
  title: {
    default: 'Suhail Subair — Lead Software Engineer',
    template: '%s | Suhail Subair',
  },
  description:
    'Lead Software Engineer specialising in scalable backend systems, full-stack web development, and React Native mobile apps.',
  keywords: [
    'Suhail Subair',
    'Lead Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'TypeScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Suhail Subair — Lead Software Engineer',
    description: 'Scalable backend systems, full-stack web development, and React Native apps.',
    url: 'https://suhailsubair.com',
    siteName: 'Suhail Subair Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Suhail Subair' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhail Subair — Lead Software Engineer',
    description: 'Scalable backend systems, full-stack web, React Native.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
