import { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from '@payload-config';
import { PortfolioGrid } from "@/components/home/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Lintang Production",
  description: "Galeri karya dokumentasi, videotron, dan tata cahaya panggung terbaik kami.",
};

export default async function PortfolioArchivePage() {
  let portfolios: any[] = [];
  
  try {
    const payload = await getPayload({ config: configPromise });
    const res = await payload.find({ 
      collection: 'portfolios', 
      limit: 50, // Higher limit for the dedicated archive page
    });
    portfolios = res.docs;
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* We reuse the robust Grid Masonry UI with client-side tabs! */}
      <PortfolioGrid portfolios={portfolios} />
    </div>
  );
}
