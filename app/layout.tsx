import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

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
  metadataBase: new URL('https://christorazafimanga.is-a.dev'),
  title: {
    default: 'Christo Razafimanga — Full-stack Web Developer',
    template: '%s | Christo Razafimanga',
  },
  description:
    'Full-stack web developer building high-impact digital products, scalable systems, and polished user experiences from concept to deployment.',
  alternates: {
    canonical: '/',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christo Razafimanga',
  url: 'https://christorazafimanga.is-a.dev',
  image: 'https://christorazafimanga.is-a.dev/images/christo.png',
  jobTitle: 'Full-Stack Web Developer',
  sameAs: [
    'https://github.com/bossnare',
    'https://www.facebook.com/thebossnare',
    'https://www.instagram.com/thebossnare',
    'https://www.x.com/thebossnare',
    'https://www/tiktok.com/@thebossnare',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} antialiased`}
    >
      <body className="font-sans font-[optical-sizing:auto] flex flex-col">
        <div className="flex flex-col items-center justify-center flex-1">
          <Header />
          <main className="w-full pt-8 md:pt-0">{children}</main>
          <Footer />
        </div>

        {/* <GoogleAnalytics /> */}
        <Analytics />
        {/* jsonLd - SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </body>
    </html>
  );
}
