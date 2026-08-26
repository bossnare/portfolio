import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
// import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Christo Razafimanga',
  description: 'A Christo Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans flex flex-col">
        {children}

        <Analytics />
        {/* <GoogleAnalytics /> */}
      </body>
    </html>
  );
}
