"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PortfolioGrid({ portfolios = [], previewMode = false }: { portfolios?: any[], previewMode?: boolean }) {
  const [activeTab, setActiveTab] = useState("semua");

  const tabs = [
    { id: "semua", label: "Semua" },
    { id: "live_streaming", label: "Live Streaming" },
    { id: "lighting", label: "Lighting" },
    { id: "videotron", label: "Videotron" },
    { id: "animation", label: "Animation" },
  ];

  const filteredPortfolios = activeTab === "semua" 
    ? portfolios 
    : portfolios.filter(p => p.category === activeTab);

  const displayItems = previewMode 
    ? (portfolios.length > 0 ? filteredPortfolios.slice(0, 3) : [1, 2, 3]) 
    : (portfolios.length > 0 ? filteredPortfolios : [1, 2, 3, 4, 5, 6]);

  return (
    <section id="portfolio" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Karya & <span className="text-secondary text-neon-amber">Portofolio</span>
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
              Eksplorasi dokumentasi event dan tata panggung terbaik yang pernah kami kerjakan.
            </p>
          </div>
          
          {!previewMode && (
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-background shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayItems.map((item: any, idx: number) => {
            const isDummy = typeof item === 'number';
            const title = isDummy ? `Corporate Event #${item}` : item.title;
            const category = isDummy ? (item % 2 === 0 ? "Lighting" : "Live_Streaming") : item.category;
            const thumbnailObj = isDummy ? null : item.thumbnail;
            const eventDate = isDummy ? "2026" : new Date(item.eventDate).getFullYear();
            const formatCategory = (cat: string) => cat.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <Link 
                href={isDummy ? "/portfolio" : `/portfolio/${item.slug}`}
                key={isDummy ? item : item.id} 
                className="block group relative rounded-3xl overflow-hidden border border-white/10 break-inside-avoid bg-white/5 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className={`w-full ${idx % 2 === 0 ? "h-64" : "h-96"} bg-neutral-900 relative`}>
                  
                  {thumbnailObj?.url ? (
                    <Image src={thumbnailObj.url} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10" />
                  
                  {(isDummy ? (item % 3 === 0) : !!item.youtubeUrl) && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 rounded-full bg-primary/80 text-white flex items-center justify-center backdrop-blur-md transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md mb-4 inline-block border border-white/10">
                      {formatCategory(category)}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-white/60">Jakarta, {eventDate}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {previewMode && (
          <div className="mt-16 text-center">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              Jelajahi Semua Portofolio
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
