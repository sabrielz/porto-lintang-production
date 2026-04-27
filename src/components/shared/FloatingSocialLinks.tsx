import { MessageCircle } from "lucide-react";
import Link from "next/link";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

export function FloatingSocialLinks({ links = [] }: { links?: any[] }) {
  // If CMS data is empty, we show a fallback.
  const displayLinks = links && links.length > 0 ? links : [
    { platformName: 'WhatsApp Us', url: 'https://wa.me/6280000000000', iconName: 'MessageCircle' },
    { platformName: 'Instagram', url: 'https://instagram.com', iconName: 'Instagram' },
    { platformName: 'YouTube', url: 'https://youtube.com', iconName: 'Youtube' },
  ];

  const getThemeVars = (iconStr: string) => {
    const str = iconStr.toLowerCase();
    if (str.includes("insta")) {
      return { 
        bgClass: "bg-pink-500/10 border-pink-500/30 text-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500",
        shadow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]",
        icon: <InstagramIcon className="w-6 h-6" />
      };
    }
    if (str.includes("you") || str.includes("yt")) {
      return { 
        bgClass: "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-600",
        shadow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]",
        icon: <YoutubeIcon className="w-6 h-6" />
      };
    }
    return {
      bgClass: "bg-green-500/10 border-green-500/30 text-green-500 hover:bg-green-500",
      shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]",
      icon: <MessageCircle className="w-6 h-6" />
    };
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {displayLinks.map((link, j) => {
        const theme = getThemeVars(link.iconName);
        return (
          <Link 
            key={j}
            href={link.url} 
            target="_blank"
            className={`group relative flex items-center justify-center w-14 h-14 rounded-full border hover:text-white hover:border-transparent backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${theme.bgClass} ${theme.shadow}`}
          >
            {theme.icon}
            <span className="absolute right-16 bg-background border border-white/10 text-white font-medium text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap shadow-xl">
              {link.platformName}
            </span>
          </Link>
        )
      })}
    </div>
  );
}

