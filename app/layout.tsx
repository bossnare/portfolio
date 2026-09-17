import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
// import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

// const dmSans = DM_Sans({
//   variable: '--font-dm-sans',
//   subsets: ['latin'],
//   display: 'swap',
// });

// const dmMono = DM_Mono({
//   variable: '--font-dm-mono',
//   subsets: ['latin'],
//   weight: ['400', '500'],
// });

const clashDisplay = localFont({
  src: './fonts/ClashDisplay-Variable.woff2',
  variable: '--font-clash-display',
  display: 'swap',
});

const generalSans = localFont({
  src: './fonts/GeneralSans-Variable.woff2',
  variable: '--font-general-sans',
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
    <html
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans font-[optical-sizing:auto] flex flex-col">
        {children}

        <Analytics />
        {/* <GoogleAnalytics /> */}
      </body>
    </html>
  );
}
