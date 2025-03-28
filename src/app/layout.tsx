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
  title: "Headhunter.ng | Coming Soon",
  description: "Nigeria's premier talent recruitment platform - Coming Soon",
  keywords: ["headhunter", "recruitment", "nigeria", "jobs", "talent"],
  authors: [{ name: "Headhunter.ng" }],
  openGraph: {
    title: "Headhunter.ng | Coming Soon",
    description: "Nigeria's premier talent recruitment platform - Coming Soon",
    url: "https://headhunter.ng",
    siteName: "Headhunter.ng",
    locale: "en_NG",
    type: "website",
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
