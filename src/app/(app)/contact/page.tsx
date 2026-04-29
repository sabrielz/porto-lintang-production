import { ContactForm } from "@/components/contact/ContactForm";
import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Lintang Production",
  description: "Hubungi Lintang Production untuk kebutuhan acara dan multimedia Anda.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Abstract background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left CTA */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
              Let's Create <br/> <span className="text-primary text-neon-blue">Magic Together.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-12">
              Berikan kami gambaran kasar event Anda, dan tim *expert* kami akan merancang skenario dokumentasi & visualisasi tanpa kompromi.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Hubungi Langsung</h4>
                  <p className="text-white/50 text-sm">+62 812-3456-7890 (WhatsApp Available)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Pertanyaan Bisnis</h4>
                  <p className="text-white/50 text-sm">hello@lintang.pro</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Basecamp</h4>
                  <p className="text-white/50 text-sm">Jl. Multimedia No. 8, Jakarta Selatan<br/>DKI Jakarta 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-zinc-900/40 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-3xl pointer-events-none" />
             <div className="relative z-10">
               <h3 className="text-2xl font-bold font-heading text-white mb-8">Kirimkan *Brief* Singkat</h3>
               <ContactForm />
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}
