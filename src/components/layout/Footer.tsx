import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-lg text-white">LINTANG<span className="text-primary">.PRO</span></span>
          <span className="text-white/50 text-sm">© {new Date().getFullYear()}</span>
        </div>
        
        <div className="text-sm text-white/50 text-center md:text-right">
          Designed & Engineered by{" "}
          <Link
            href="https://github.com/sabriel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors hover:underline"
          >
            Sabriel
          </Link>
        </div>
      </div>
    </footer>
  );
}
