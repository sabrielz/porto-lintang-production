import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { PortfolioDetailClient } from "@/components/portfolio/PortfolioDetailClient";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  
  try {
    const { docs } = await payload.find({
      collection: "portfolios",
      where: { slug: { equals: resolvedParams.slug } },
      limit: 1,
    });
    
    if (!docs || docs.length === 0) return { title: "Not Found" };
    return { 
      title: \`\${docs[0].title} | Lintang Production\`,
      description: \`Detail proyek dan dokumentasi event \${docs[0].title} oleh Lintang Production.\`
    };
  } catch (e) {
    return { title: "Portfolio" };
  }
}

export default async function PortfolioDetailPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  
  let portfolio = null;
  
  try {
    const { docs } = await payload.find({
      collection: "portfolios",
      where: { slug: { equals: resolvedParams.slug } },
      limit: 1,
      depth: 2, // Ensure gallery and thumbnail relationships are populated deeply
    });
    portfolio = docs[0];
  } catch (e) {
    console.error("Payload fetch error: ", e);
  }

  if (!portfolio) {
    return notFound();
  }

  return <PortfolioDetailClient portfolio={portfolio} />;
}
