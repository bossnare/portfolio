import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { ThemeProvider } from '@/src/components/theme-provider';

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
    default: 'Christo Razafimanga — Full-stack Web Developer & Designer',
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
  givenName: 'Christo',
  familyName: 'Razafimanga',
  alternateName: ['Razafimanga Gervais Christo', 'BossNare'],
  url: 'https://christorazafimanga.is-a.dev',
  image: 'https://christorazafimanga.is-a.dev/images/christo.png',
  jobTitle: ['Full-Stack Web Developer', 'Designer'],
  sameAs: [
    'https://github.com/bossnare',
    'https://www.facebook.com/thebossnare',
    'https://facebook.com/theletsgochris',
    'https://www.instagram.com/thebossnare',
    'https://www.x.com/thebossnare',
    'https://www/tiktok.com/@thebossnare',
  ],
  knowsAbout: [
    'Web Development',
    'SaaS',
    'Full-Stack Development',
    'TypeScript',
    'React',
    'Next.js',
    'NestJS',
    'Symfony backend API',
    'PostegreSQL',
    'MySQL',
    'Prisma',
    'Web Design',
    'UI Design',
    'REST API',
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'E-media Madagascar',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Digital Training Center(DTC)',
    },
  ],
  knowsLanguage: ['English', 'French', 'Malagasy'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${clashDisplay.variable} ${generalSans.variable} antialiased`}
    >
      <body className="font-sans font-[optical-sizing:auto] flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center flex-1 min-h-screen">
            <Header />
            <main className="w-full pt-8 pb-20 md:pt-0">{children}</main>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
