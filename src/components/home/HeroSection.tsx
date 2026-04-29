"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Video } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThreeBackground } from "@/components/shared/ThreeBackground";
import { Play } from "lucide-react";

export function HeroSection({ headline, subheadline }: { headline?: string, subheadline?: string }) {
  const [showreelOpen, setShowreelOpen] = useState(false);
  // Variants for fade-up reveal animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background 3D Particles */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <ThreeBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-white tracking-wide">
              Vendor Multimedia & Event Specialist
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            {headline ? (
              <span dangerouslySetInnerHTML={{ __html: headline }} />
            ) : (
              <>Menghidupkan <span className="text-primary text-neon-blue">Momen</span>,<br />
              Menerangi <span className="text-secondary text-neon-amber">Karya</span></>
            )}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
            {subheadline || "Lintang Production (LP) menghadirkan dokumentasi acara, live streaming profesional, lighting, dan animasi videotron B2B berkualitas premium."}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Lihat Portofolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <button onClick={() => setShowreelOpen(true)} className="group inline-flex items-center justify-center text-base font-medium text-white hover:text-primary transition-colors">
              <div className="w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-primary/50 flex items-center justify-center mr-4 bg-white/5 backdrop-blur-sm group-hover:bg-primary/10 transition-all">
                <Play className="w-5 h-5 ml-1" fill="currentColor" />
              </div>
              Play Showreel
            </button>
            
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm sm:ml-4">
              Hubungi Kami
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Showreel Modal */}
      {showreelOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowreelOpen(false)} />
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] bg-black z-10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowreelOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-colors z-20"
            >
              ✕
            </button>
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder video
              className="w-full h-full" 
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
}
