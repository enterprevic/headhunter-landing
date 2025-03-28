import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Headhunter.ng | Nigeria's Premier Talent Recruitment Platform",
  description: "Connect with top Nigerian talent across diverse industries. Headhunter.ng is Nigeria's authentic recruitment platform celebrating our rich cultural heritage while connecting professionals with opportunities that matter.",
  keywords: [
    "headhunter", "recruitment", "nigeria", "jobs", "talent", 
    "nigerian jobs", "lagos recruitment", "abuja jobs", "port harcourt careers",
    "nigerian professionals", "african talent", "west african recruitment",
    "nigerian culture", "nigerian companies", "nigerian employment"
  ],
  authors: [{ name: "Headhunter.ng" }],
  creator: "Headhunter.ng",
  publisher: "Headhunter.ng",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL('https://headhunter.ng'),
  alternates: {
    canonical: '/',
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
    title: "Headhunter.ng | Nigeria's Premier Talent Recruitment Platform",
    description: "Connect with top Nigerian talent across diverse industries. Headhunter.ng is Nigeria's authentic recruitment platform celebrating our rich cultural heritage while connecting professionals with opportunities that matter.",
    url: "https://headhunter.ng",
    siteName: "Headhunter.ng",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Headhunter.ng - Nigeria\'s Premier Recruitment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Headhunter.ng | Nigeria's Premier Talent Recruitment Platform",
    description: "Connect with top Nigerian talent across diverse industries. Headhunter.ng celebrates Nigeria's rich cultural heritage.",
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
