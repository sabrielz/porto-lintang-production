"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Video } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const DustParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate static values only once on the client to avoid hydration mismatch
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 30 + 30, // 30s to 60s very slow
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` } as any}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export function HeroSection({ headline, subheadline }: { headline?: string, subheadline?: string }) {
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
      {/* Background Video Placeholder & Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <DustParticles />
        {/* Intentionally left blank for <video> payload injection later. */}
        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video> */}
        <div className="w-full h-full object-cover flex items-center justify-center opacity-20">
          <Video size={120} className="text-primary" />
        </div>
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
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Lihat Portofolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
              Hubungi Kami
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
