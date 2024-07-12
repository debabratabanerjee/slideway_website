import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
}
);

export const metadata: Metadata = {
  title: "Comprehensive IT Solutions: SEO, Website Design, Google Business & More | Slideway.dev",
  description: "Slideway.dev offers a full suite of IT services, including SEO optimization, website design, logo creation, and Google Business management. Our expert team is dedicated to enhancing your online presence and driving business growth. Visit us to learn more about our innovative solutions!",
  keywords: "IT solutions, SEO, website design, logo creation, Google Business management, online presence, business growth",
  authors: [{ name: "Slideway.dev" }],
  viewport: { width: "device-width", initialScale: 1 },
  robots: "index, follow",
  openGraph: {
    title: "Comprehensive IT Solutions: SEO, Website Design, Google Business & More | Slideway.dev",
    description: "Slideway.dev offers a full suite of IT services, including SEO optimization, website design, logo creation, and Google Business management. Our expert team is dedicated to enhancing your online presence and driving business growth. Visit us to learn more about our innovative solutions!",
    url: "https://www.slideway.dev",
    type: "website",
    images: [
      {
        url: "https://www.slideway.dev/logo/logo.svg",
        width: 800,
        height: 600,
        alt: "Slideway.dev Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive IT Solutions: SEO, Website Design, Google Business & More | Slideway.dev",
    description: "Slideway.dev offers a full suite of IT services, including SEO optimization, website design, logo creation, and Google Business management. Our expert team is dedicated to enhancing your online presence and driving business growth. Visit us to learn more about our innovative solutions!",
    images: ["https://www.slideway.dev/logo/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
        className={font.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
