import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gkb-textiles.vercel.app'),
  title: {
    default: 'GKB Textiles | Premium Cotton Grey Fabric Manufacturer | Erode, Tamil Nadu',
    template: '%s | GKB Textiles'
  },
  description:
    'GKB Textiles - Leading manufacturer and exporter of premium cotton grey fabrics using advanced Picanol Air Jet Loom technology. Based in Erode, Tamil Nadu, India.',
  keywords: [
    'cotton grey fabric',
    'textile manufacturer',
    'Picanol Air Jet Loom',
    'Erode textiles',
    'dobby fabrics',
    'double cloth',
    'seersucker',
    'cotton fabric manufacturer',
    'fabric exporter India',
    'Erode weaving mill',
  ],
  authors: [{ name: 'GKB Textiles' }],
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'GKB Textiles | Premium Cotton Grey Fabric Manufacturer | Erode',
    description: 'Leading cotton grey fabric manufacturer in Erode, Tamil Nadu. Specialized in dobby fabrics, double cloth, and seersucker using Picanol Air Jet Looms.',
    url: 'https://gkb-textiles.vercel.app',
    siteName: 'GKB Textiles',
    images: [
      {
        url: '/images/hero-home-landscape.png',
        width: 1200,
        height: 630,
        alt: 'GKB Textiles Weaving Factory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GKB Textiles | Premium Cotton Grey Fabric Manufacturer',
    description: 'Premium Cotton Grey Fabrics manufactured using advanced Picanol Air Jet Loom technology in Erode, India.',
    images: ['/images/hero-home-landscape.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gkb-textiles.vercel.app/#organization",
        "name": "GKB Textiles",
        "url": "https://gkb-textiles.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://gkb-textiles.vercel.app/#logo",
          "url": "https://gkb-textiles.vercel.app/images/logo.png",
          "caption": "GKB Textiles Logo"
        },
        "image": {
          "@id": "https://gkb-textiles.vercel.app/#logo"
        },
        "sameAs": [
          "https://www.linkedin.com/company/gkb-textiles"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://gkb-textiles.vercel.app/#localbusiness",
        "name": "GKB Textiles",
        "image": "https://gkb-textiles.vercel.app/images/hero-home-landscape.png",
        "telephone": "+91-9080157410",
        "email": "gkbbalu@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 53/8, Pudhuvalasu Main Road, Lakkapuram",
          "addressLocality": "Erode",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.341036",
          "longitude": "77.56372"
        },
        "url": "https://gkb-textiles.vercel.app",
        "priceRange": "$$"
      }
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollObserver />
      </body>
    </html>
  );
}
