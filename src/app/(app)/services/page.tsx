import { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Lintang Production",
  description: "Layanan dokumentasi, videotron, dan tata cahaya unggulan dari Lintang Production.",
};

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise });
  let services: any[] = [];
  
  try {
    const res = await payload.find({
      collection: 'services',
      limit: 10,
    });
    services = res.docs;
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
            Our <span className="text-secondary text-neon-amber">Services</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Kami menghadirkan paket jasa penyedia tata panggung hingga permesinan digital untuk memaksimalkan acara B2B dan Mega-Concert Anda.
          </p>
        </div>
        
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link 
                href={`/services/${svc.slug}`} 
                key={svc.id}
                className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-primary transition-colors">{svc.title}</h2>
                <div className="flex-grow text-white/50 text-sm leading-relaxed mb-8">
                  {/* Rendering a snippet if we parsed it, or just a static prompt. We'll show the features limit 2 */}
                  <ul className="space-y-2">
                    {svc.features?.slice(0,2).map((feat: any, idx: number) => (
                      <li key={idx} className="flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:mr-2">{feat.feature}</li>
                    ))}
                    {svc.features?.length > 2 && <li className="text-xs italic text-white/30 pt-2">+ {(svc.features.length - 2)} keunggulan lainnya...</li>}
                  </ul>
                </div>
                
                <div className="flex items-center text-primary font-medium text-sm mt-auto">
                  Pelajari Rincian <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/40 border border-white/10 rounded-3xl p-16 bg-white/5">
            Belum ada layanan yang didaftarkan di CMS.
          </div>
        )}
      </div>
    </div>
  );
}
