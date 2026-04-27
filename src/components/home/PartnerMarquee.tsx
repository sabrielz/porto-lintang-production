"use client";

import { Lightbulb, MonitorPlay, Camera } from "lucide-react";
import Image from "next/image";

export function PartnerMarquee({ partners = [] }: { partners?: any[] }) {
  // Use CMS data if available, otherwise fallback to dummy data
  const fallbackPartners = [
    { id: 1, name: "Lintang Production", color: "text-primary" },
    { id: 2, name: "AM Lighting", color: "text-secondary" },
    { id: 3, name: "Vendor Videotron", color: "text-blue-400" },
  ];

  const displayList = partners.length > 0 
    ? [...partners, ...partners, ...partners] 
    : [...fallbackPartners, ...fallbackPartners, ...fallbackPartners];

  const getFallbackIcon = (name: string, color: string) => {
    if (name === "AM Lighting") return <Lightbulb className={`w-8 h-8 md:w-10 md:h-10 text-white/30 group-hover:${color} transition-colors duration-300 grayscale group-hover:grayscale-0`} />;
    if (name === "Vendor Videotron" || name === "Vendor Videotron & Animasi") return <MonitorPlay className={`w-8 h-8 md:w-10 md:h-10 text-white/30 group-hover:${color} transition-colors duration-300 grayscale group-hover:grayscale-0`} />;
    return <Camera className={`w-8 h-8 md:w-10 md:h-10 text-white/30 group-hover:${color} transition-colors duration-300 grayscale group-hover:grayscale-0`} />;
  }

  return (
    <section className="py-12 bg-background border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-medium text-white/50 tracking-widest uppercase">
          Trio Layanan Terintegrasi
        </p>
      </div>
      
      <div className="relative flex w-full max-w-full overflow-hidden">
        <div className="flex w-full animate-marquee whitespace-nowrap min-w-max">
          {displayList.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center mx-8 md:mx-16 gap-3 transition-all duration-300 cursor-default"
            >
              {partner.logo?.url ? (
                <div className="relative w-10 h-10 md:w-12 md:h-12 opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0">
                  <Image src={partner.logo.url} alt={partner.name} fill className="object-contain" />
                </div>
              ) : (
                getFallbackIcon(partner.name, partner.color || "text-white")
              )}
              <span className="font-heading text-lg md:text-xl font-semibold text-white/30 group-hover:text-white transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient fades for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
