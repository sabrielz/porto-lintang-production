"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Camera } from "lucide-react";

export function PortfolioDetailClient({ portfolio }: { portfolio: any }) {
  const { title, clientName, eventDate, category, thumbnail, gallery, equipmentUsed, youtubeUrl, description, testimonial } = portfolio;
  
  const formatCategory = (cat: string) => cat?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const dateObj = eventDate ? new Date(eventDate) : new Date();
  
  // Custom simple AST parser specifically for Lexical basic text extraction
  const extractTextParts = (node: any): string[] => {
    if (!node) return [];
    if (node.text) return [node.text];
    if (node.children) return node.children.flatMap(extractTextParts);
    return [];
  };
  const descriptionText = extractTextParts(description?.root).join(" ") || "Tidak ada deskripsi rinci untuk dokumentasi acara ini.";

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-end">
        {thumbnail?.url && (
          <Image src={thumbnail.url} alt={title} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link href="/portfolio" className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Portofolio
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-primary/20 text-neon-blue border border-primary/30 backdrop-blur-md mb-6 inline-block shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              {formatCategory(category)}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/70 mt-6">
              {clientName && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-white/90">Client: {clientName}</span>
                </div>
              )}
              {eventDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-white/90">{dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <h2 className="text-3xl font-heading font-bold text-white mb-6">Tentang <span className="text-primary text-neon-blue">Proyek</span></h2>
           <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white/70 text-lg leading-relaxed whitespace-pre-line text-justify">
             {descriptionText}
           </motion.p>
           
           {testimonial && (
             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mt-10 p-8 border-l-4 border-secondary bg-secondary/5 rounded-r-3xl relative">
                <span className="absolute top-4 right-6 text-6xl text-secondary/10 font-heading">"</span>
                <p className="text-white/90 italic text-xl leading-relaxed relative z-10">"{extractTextParts(testimonial?.root).join(" ")}"</p>
                {clientName && <p className="mt-4 font-bold text-secondary flex items-center">— {clientName}</p>}
             </motion.div>
           )}
           
           {youtubeUrl && (
             <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 aspect-video relative group shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                <iframe src={youtubeUrl.replace("watch?v=", "embed/")} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" allowFullScreen></iframe>
             </div>
           )}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-24 backdrop-blur-lg hover:border-secondary/30 transition-colors shadow-2xl">
             <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
               <Camera className="text-secondary" /> Equipment Used
             </h3>
             {equipmentUsed && equipmentUsed.length > 0 ? (
               <ul className="space-y-3">
                 {equipmentUsed.map((eq: any, i: number) => (
                   <li key={i} className="flex items-start text-white/70">
                     <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(245,158,11,0.8)] mt-2 mr-3 flex-shrink-0" />
                     {eq.item}
                   </li>
                 ))}
               </ul>
             ) : (
               <p className="text-white/40 italic text-sm">Tidak ada detail alat khusus tercatat untuk event ini.</p>
             )}
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      {gallery && gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Event <span className="text-secondary text-neon-amber">Gallery</span></h2>
            <p className="text-white/50 mt-3">Dokumentasi di balik layar dan jepretan panggung estetik.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img: any, idx: number) => {
              const url = img?.image?.url;
              const alt = img?.image?.alt || `Gallery Photo ${idx + 1}`;
              if (!url) return null;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group cursor-crosshair shadow-lg"
                >
                  <Image src={url} alt={alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  );
}
