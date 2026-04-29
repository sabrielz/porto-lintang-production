import { HeroSection } from "@/components/home/HeroSection";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { TrioServices } from "@/components/home/TrioServices";
import { PortfolioGrid } from "@/components/home/PortfolioGrid";
import { getPayload } from "payload";
import configPromise from '@payload-config';

export default async function Home() {
  let portfolios: any[] = [];
  let partners: any[] = [];
  let siteSettings: any = null;

  try {
    const payload = await getPayload({ config: configPromise });
    const [portfoliosReq, partnersReq, settingsReq] = await Promise.all([
      payload.find({ collection: 'portfolios', limit: 20 }),
      payload.find({ collection: 'partners', limit: 20 }),
      payload.findGlobal({ slug: 'site-settings' }),
    ]);
    portfolios = portfoliosReq.docs;
    partners = partnersReq.docs;
    siteSettings = settingsReq;
  } catch (e) {
    console.error("Failed to fetch Payload data. Check DB setup.", e);
  }

  return (
    <>
      <HeroSection headline={siteSettings?.heroHeadline} subheadline={siteSettings?.heroSubheadline} />
      <PartnerMarquee partners={partners} />
      
      <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Lebih Dari Sekadar <span className="text-primary text-neon-blue">Dokumentasi</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Lintang Production berdedikasi untuk menciptakan ekstasi visual. Dengan gabungan tim profesional dan equipment elit, kami mengorkestrasi sorot lampu, sudut kamera, dan animasi layar menjadi simfoni pengalaman yang memukau.
            </p>
            <a href="/about" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
              Kenali Kru & Perlengkapan Kami
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-40 md:h-64 rounded-3xl bg-white/5 border border-white/10" />
            <div className="h-40 md:h-64 rounded-3xl bg-white/5 border border-white/10 mt-8" />
          </div>
        </div>
      </section>

      <TrioServices />
      <PortfolioGrid portfolios={portfolios} previewMode={true} />
    </>
  );
}
