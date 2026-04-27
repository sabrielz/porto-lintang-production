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
      <TrioServices />
      <PortfolioGrid portfolios={portfolios} />
    </>
  );
}
