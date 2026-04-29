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
import { PageTransition } from "@/components/shared/PageTransition";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Toaster } from "sonner";
import { getPayload } from "payload";
import configPromise from '@payload-config';

export const metadata: Metadata = {
  title: "Lintang Production | Vendor Multimedia & Lighting",
  description: "Penyedia jasa vendor multimedia, lighting panggung, videotron, dan dokumentasi acara profesional.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch Social Media globally
  let socialMediaLinks: any[] = [];
  try {
    const payload = await getPayload({ config: configPromise });
    const { docs } = await payload.find({
      collection: 'social-media',
      where: { isActive: { equals: true } },
      limit: 10
    });
    socialMediaLinks = docs;
  } catch (e) {
    console.error("Payload CMS is not yet initialized.", e);
  }

  return (
    <html lang="id" className={`${inter.variable} ${syne.variable} h-full antialiased`}>
      <body className="font-body min-h-screen flex flex-col pt-16 cursor-default">
        <CustomCursor />
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow flex flex-col">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <FloatingSocialLinks links={socialMediaLinks} />
          <Toaster theme="dark" position="bottom-right" richColors />
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

