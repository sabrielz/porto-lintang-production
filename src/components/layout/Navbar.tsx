"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-heading font-bold text-xl tracking-wider text-white">
              LINTANG<span className="text-primary">.PRO</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#services" className="hover:text-primary transition-colors text-sm font-medium">Services</Link>
              <Link href="#portfolio" className="hover:text-primary transition-colors text-sm font-medium">Portfolio</Link>
              <Link href="#contact" className="hover:text-primary transition-colors text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary hover:bg-white/5 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" onClick={() => setIsOpen(false)} className="block hover:bg-white/5 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)} className="block hover:bg-white/5 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:bg-white/5 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
