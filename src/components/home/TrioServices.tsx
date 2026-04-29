"use client";

import { Camera, Lightbulb, MonitorPlay } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

function GlowCard({ children, className = "", glowColor = "rgba(59, 130, 246, 0.15)" }: { children: React.ReactNode, className?: string, glowColor?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `
        } as any}
      />
      {children}
    </div>
  );
}

export function TrioServices() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            The Trio <span className="text-primary text-neon-blue">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Solusi multimedia komprehensif dari dokumentasi hingga tata cahaya panggung yang spektakuler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Lintang Production - Big Card */}
          <GlowCard className="md:col-span-2 md:row-span-1 flex flex-col justify-end hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" glowColor="rgba(59, 130, 246, 0.2)">
            <Camera className="absolute top-8 right-8 w-24 h-24 text-white/5 group-hover:text-primary/20 transition-colors duration-500" />
            <div className="relative z-10 pointer-events-none">
              <h3 className="font-heading text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Lintang Production</h3>
              <p className="text-white/70 max-w-md transform translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 md:opacity-100 md:translate-y-0">
                Dokumentasi acara (foto/video), rekaman komersial, dan live streaming profesional termasuk multi-cam YouTube broadcasting.
              </p>
            </div>
          </GlowCard>

          {/* AM Lighting */}
          <GlowCard className="md:col-span-1 md:row-span-1 flex flex-col justify-end hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]" glowColor="rgba(245, 158, 11, 0.2)">
            <Lightbulb className="absolute top-8 right-8 w-16 h-16 text-white/5 group-hover:text-secondary/20 transition-colors duration-500" />
            <div className="relative z-10 pointer-events-none">
              <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">AM Lighting</h3>
              <p className="text-sm text-white/70 transform translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 md:opacity-100 md:translate-y-0">
                Penyedia jasa lighting panggung, tata cahaya ambient, dan rigging equipment untuk acara indoor maupun outdoor.
              </p>
            </div>
          </GlowCard>

          {/* Vendor Videotron */}
          <GlowCard className="md:col-span-3 md:row-span-1 flex flex-col md:flex-row items-center gap-8 justify-between hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]" glowColor="rgba(96, 165, 250, 0.2)">
            <MonitorPlay className="hidden md:block w-32 h-32 text-white/5 group-hover:text-blue-400/10 transition-colors duration-500 absolute left-8" />
            <div className="relative z-10 md:ml-40 flex-1 pointer-events-none">
              <h3 className="font-heading text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors text-center md:text-left">Vendor Videotron & Animasi</h3>
              <p className="text-white/70 max-w-2xl transform lg:translate-y-4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 md:opacity-100 md:translate-y-0 text-center md:text-left">
                Penyewaan modul videotron resolusi tinggi (P3.9, P2.9) beserta pembuatan aset visual animasi dinamis khusus layar panggung. Memberikan visual menakjubkan bagi audiens B2B.
              </p>
            </div>
          </GlowCard>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/services" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            Jelajahi Paket Layanan
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
