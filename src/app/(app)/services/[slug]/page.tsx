import { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Settings } from "lucide-react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: resolvedParams.slug } },
    limit: 1,
  });
  if (!docs[0]) return { title: "Not Found" };
  return { title: `${docs[0].title} | Services` };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const payload = await getPayload({ config: configPromise });
  
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: resolvedParams.slug } },
    limit: 1,
  });

  const service = docs[0];
  if (!service) notFound();

  // Basic AST text mapping for Lexical UI
  const extractTextParts = (node: any): string[] => {
    if (!node) return [];
    if (node.text) return [node.text];
    if (node.children) return node.children.flatMap(extractTextParts);
    return [];
  };
  const descriptionText = extractTextParts(service.description?.root).join(" ");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-10 group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Semua Layanan
        </Link>
        
        <div className="flex items-center gap-6 mb-8">
           <div className="w-20 h-20 rounded-3xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shadow-[0_0_30px_rgba(245,158,11,0.2)]">
             <Settings className="w-10 h-10" />
           </div>
           <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">{service.title}</h1>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-16 text-white/70 leading-relaxed text-justify">
           {descriptionText}
        </div>

        {service.features && service.features.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-2xl font-bold font-heading text-white mb-8 border-b border-white/10 pb-4">Fitur & Keunggulan Layanan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {service.features.map((feat: any, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 shadow-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <p className="text-white/80">{feat.feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
