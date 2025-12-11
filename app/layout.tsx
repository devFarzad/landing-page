import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ASCO Village - Modern Villa Project | Coming Soon',
  description: 'ASCO is a construction company behind ASCO VILLAGE, a modern villa project offering strong engineering, premium finishes, and a peaceful community for families. Located in Erbil, Iraq.',
  keywords: ['ASCO Village', 'villa project', 'construction', 'Erbil', 'Iraq', 'modern villas', 'real estate', 'premium construction', 'family community'],
  authors: [{ name: 'ASCO Village' }],
  creator: 'ASCO Village',
  publisher: 'ASCO Village',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ascovillage.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASCO Village - Modern Villa Project',
    description: 'ASCO is a construction company behind ASCO VILLAGE, a modern villa project offering strong engineering, premium finishes, and a peaceful community for families.',
    url: 'https://ascovillage.com',
    siteName: 'ASCO Village',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos/logo-brown.jpg',
        width: 1200,
        height: 630,
        alt: 'ASCO Village Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASCO Village - Modern Villa Project',
    description: 'ASCO is a construction company behind ASCO VILLAGE, a modern villa project offering strong engineering, premium finishes, and a peaceful community for families.',
    images: ['/logos/logo-brown.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'apple-mobile-web-app-title': 'Asco',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional Favicon Links for Compatibility */}
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#D2AE72" />
        <meta name="msapplication-TileColor" content="#D2AE72" />
        <meta name="application-name" content="ASCO Village" />
        <meta name="geo.region" content="IQ-AR" />
        <meta name="geo.placename" content="Erbil" />
        <meta name="geo.position" content="36.1911;44.0092" />
        <meta name="ICBM" content="36.1911, 44.0092" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ASCO Village',
              alternateName: 'ASCO',
              url: 'https://ascovillage.com',
              logo: 'https://ascovillage.com/logos/logo-brown.jpg',
              description: 'ASCO is a construction company behind ASCO VILLAGE, a modern villa project offering strong engineering, premium finishes, and a peaceful community for families.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Piramam Road - Opposite Grand Majidi Mall',
                addressLocality: 'Erbil',
                addressRegion: 'Erbil',
                addressCountry: 'IQ',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+964-770-611-0181',
                contactType: 'Customer Service',
                email: 'info@ascovillage.com',
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'ASCO Village',
              description: 'Modern villa project offering strong engineering, premium finishes, and a peaceful community for families.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Piramam Road - Opposite Grand Majidi Mall',
                addressLocality: 'Erbil',
                addressRegion: 'Erbil',
                addressCountry: 'IQ',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

