"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [queSubmenuOpen, setQueSubmenuOpen] = useState(false);
  const [pourSubmenuOpen, setPourSubmenuOpen] = useState(false);
  const [queSubmenuTimer, setQueSubmenuTimer] = useState<NodeJS.Timeout | null>(null);
  const [pourSubmenuTimer, setPourSubmenuTimer] = useState<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [0, mounted ? window.innerHeight * 0.05 : 0],
    [-100, 0]
  );

  const [isLightPage, setIsLightPage] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsLightPage(pathname === "/light");
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setIsVisible(scrollPercentage > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (queSubmenuTimer) clearTimeout(queSubmenuTimer);
      if (pourSubmenuTimer) clearTimeout(pourSubmenuTimer);
    };
  }, [queSubmenuTimer, pourSubmenuTimer]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto">
      <div
        className={`backdrop-blur-lg bg-black/10 border ${
          isVisible ? "border-accent/20" : "border-transparent"
        } rounded-full px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo-baseline.svg"
              alt="ADWIZ Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/cabinet"
              className={` hover:text-accent transition-colors ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}
            >
              Qui sommes-nous ?
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => {
                if (queSubmenuTimer) clearTimeout(queSubmenuTimer);
                setQueSubmenuOpen(true);
              }}
              onMouseLeave={() => {
                const timer = setTimeout(() => setQueSubmenuOpen(false), 150);
                setQueSubmenuTimer(timer);
              }}
            >
              <button className={`flex items-center gap-1 hover:text-accent transition-colors ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}>
                Que faisons-nous ? <ChevronDown className="w-4 h-4" />
              </button>
              
              {queSubmenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => {
                    if (queSubmenuTimer) clearTimeout(queSubmenuTimer);
                    setQueSubmenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timer = setTimeout(() => setQueSubmenuOpen(false), 150);
                    setQueSubmenuTimer(timer);
                  }}
                >
                  <div className="w-64 bg-black/90 backdrop-blur-lg border border-accent/20 rounded-2xl p-4">
                    <Link href="/droit-des-societes-droit-des-contrats" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Droit des Sociétés - Commercial
                    </Link>
                    <Link href="/transactions-levees-de-fonds" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Transaction - Levée de fonds
                    </Link>
                    <Link href="/contentieux-recouvrement" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Contentieux - Recouvrement
                    </Link>
                    <Link href="/entreprises-en-difficulte" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Entreprises en difficulté
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setPourSubmenuOpen(true)}
              onMouseLeave={() => setPourSubmenuOpen(false)}
            >
              <button className={`flex items-center gap-1 hover:text-accent transition-colors ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}>
                Pour qui ? <ChevronDown className="w-4 h-4" />
              </button>
              
              {pourSubmenuOpen && (
                <div className="absolute top-full right-0 z-50 mt-1">
                  <div 
                    className="w-52 bg-black/95 backdrop-blur-lg border border-accent/20 rounded-2xl p-4 shadow-xl"
                    onMouseEnter={() => setPourSubmenuOpen(true)}
                    onMouseLeave={() => setPourSubmenuOpen(false)}
                  >
                    <Link href="/dirigeants" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Dirigeants
                    </Link>
                    <Link href="/associes" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Associés
                    </Link>
                    <Link href="/fondateurs-repreneurs" className="block py-2 px-3 text-gray-300 hover:text-accent transition-colors rounded-lg">
                      Fondateurs - Repreneurs
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="https://app.lemcal.com/@fdw"
              target="_blank"
              className={` px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors ${
                isLightPage
                  ? "text-white bg-gradient-to-r from-[#879BEB] to-[#BAA080]/90 hover:bg-gradient-to-r hover:from-[#BAA080] hover:to-[#879BEB]/90 transition-all duration-300"
                  : "text-primary bg-accent"
              }`}
            >
              Prendre RDV
            </Link>
          </div>

          {/* Menu mobile */}
          <button
            className={`md:hidden ${isLightPage ? "text-[#373433]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.2 }}
        className={`md:hidden mt-2 backdrop-blur-md border rounded-2xl overflow-hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } ${isVisible ? "border-accent/20" : "border-transparent"}`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            href="/cabinet"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block hover:text-accent transition-colors ${
              isLightPage ? "text-[#373433]" : "text-gray-300"
            }`}
          >
            Qui sommes-nous ?
          </Link>
          
          <div className="space-y-2">
            <div className={`text-sm font-semibold ${isLightPage ? "text-[#373433]" : "text-gray-300"}`}>
              Que faisons-nous ?
            </div>
            <div className="pl-4 space-y-2">
              <Link href="/droit-des-societes-droit-des-contrats" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Droit des Sociétés - Commercial
              </Link>
              <Link href="/transactions-levees-de-fonds" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Transaction - Levée de fonds
              </Link>
              <Link href="/contentieux-recouvrement" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Contentieux - Recouvrement
              </Link>
              <Link href="/entreprises-en-difficulte" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Entreprises en difficulté
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className={`text-sm font-semibold ${isLightPage ? "text-[#373433]" : "text-gray-300"}`}>
              Pour qui ?
            </div>
            <div className="pl-4 space-y-2">
              <Link href="/dirigeants" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Dirigeants
              </Link>
              <Link href="/associes" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Associés
              </Link>
              <Link href="/fondateurs-repreneurs" onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm hover:text-accent transition-colors ${isLightPage ? "text-[#373433]" : "text-gray-400"}`}>
                Fondateurs - Repreneurs
              </Link>
            </div>
          </div>
          
          <Link
            href="https://app.lemcal.com/@fdw"
            target="_blank"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-center px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors ${
              isLightPage
                ? "text-white bg-gradient-to-r from-[#879BEB] to-[#BAA080]/90 hover:bg-gradient-to-r hover:from-[#BAA080] hover:to-[#879BEB]/90 transition-all duration-300"
                : "text-primary bg-accent"
            }`}
          >
            Prendre RDV
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
