import { Metadata } from "next";
import { Camera, Lightbulb, MonitorPlay, Speaker, Zap } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Lintang Production",
  description: "Lintang Production telah bertahun-tahun dipercaya sebagai vendor multimedia dan lighting profesional.",
};

export default function AboutPage() {
  const gearItems = [
    { title: "Kamera Sinematik", desc: "Sony FX3 & A7S III untuk tangkapan resolusi 4K dengan dynamic range tak tertandingi.", icon: Camera, color: "text-neon-blue" },
    { title: "Modul Videotron P3.9", desc: "Ratusan panel LED raksasa yang responsif dan menyala terang meski di siang hari.", icon: MonitorPlay, color: "text-neon-amber" },
    { title: "Lighting Moving Head", desc: "Beam 230W & Par LED premium untuk atmosfer panggung menembus langit.", icon: Lightbulb, color: "text-secondary" },
    { title: "Audio Capture", desc: "Sistem perekaman tata suara digital tanpa noise untuk broadcasting dan streaming.", icon: Speaker, color: "text-gray-400" },
    { title: "Broadcasting Switcher", desc: "ATEM Television Studio Pro untuk eksekusi perpindahan kamera zero-delay.", icon: Zap, color: "text-red-500" },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight">
              Di Balik <span className="text-primary text-neon-blue">Lintang Production</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl text-justify">
              Berangkat dari dedikasi mendalam pada seni pertunjukan panggung dan tayangan visual, Lintang Production hadir bukan hanya sebagai vendor, melainkan sebagai partner strategis. Kami menggabungkan ketelitian dokumentasi dengan kemewahan desain tata cahaya untuk memastikan setiap acara Anda berkesan, mahal, dan abadi.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="border border-white/10 bg-white/5 px-6 py-4 rounded-2xl backdrop-blur-lg">
                <span className="block text-3xl font-heading font-bold text-white">50+</span>
                <span className="text-sm text-white/50">Proyek Selesai</span>
              </div>
              <div className="border border-white/10 bg-white/5 px-6 py-4 rounded-2xl backdrop-blur-lg">
                <span className="block text-3xl font-heading font-bold text-secondary text-neon-amber">Elite</span>
                <span className="text-sm text-white/50">Technical Crew</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)] group">
             <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold tracking-widest text-xl rotate-45 pointer-events-none">LINTANG.PRO</div>
             {/* Note: Jika ada image statis, letakkan Image src="..." di sini. Menggunakan fallback UI abstract karena belum ada image statis. */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Gear Section (Bento Grid) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Our <span className="text-secondary text-neon-amber">Equipment</span></h2>
             <p className="text-white/50 max-w-2xl mx-auto">Senjata mutlak di balik visual tanpa kompromi kami.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {gearItems.map((gear, idx) => {
              const Icon = gear.icon;
              const isLarge = idx === 0 || idx === 1;
              return (
                <div key={idx} className={`relative group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}>
                   <Icon className={`absolute -right-4 -bottom-4 w-32 h-32 opacity-5 scale-110 group-hover:scale-125 transition-transform duration-700 ${gear.color}`} />
                   <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                     <Icon className={`w-10 h-10 ${gear.color} mb-4`} />
                     <div>
                       <h3 className="text-2xl font-bold font-heading text-white mb-2">{gear.title}</h3>
                       <p className="text-white/60 text-sm leading-relaxed">{gear.desc}</p>
                     </div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
