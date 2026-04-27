import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocialLinks } from "@/components/shared/FloatingSocialLinks";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

import { SmoothScrolling } from "@/components/shared/SmoothScrolling";

export const metadata: Metadata = {
  title: "Lintang Production | Vendor Multimedia & Lighting",
  description: "Penyedia jasa vendor multimedia, lighting panggung, videotron, dan dokumentasi acara profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${syne.variable} h-full antialiased`}>
      <body className="font-body min-h-screen flex flex-col pt-16">
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <FloatingSocialLinks />
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

