"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Users, Building2, Scale, AlertTriangle, FileText, TrendingUp } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);
  const [servicesTimer, setServicesTimer] = useState<NodeJS.Timeout | null>(null);
  const [clientsTimer, setClientsTimer] = useState<NodeJS.Timeout | null>(null);
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


  const handleServicesEnter = () => {
    if (servicesTimer) clearTimeout(servicesTimer);
    if (clientsTimer) clearTimeout(clientsTimer);
    setClientsOpen(false); // Fermer l'autre menu
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timer = setTimeout(() => setServicesOpen(false), 200);
    setServicesTimer(timer);
  };

  const handleClientsEnter = () => {
    if (clientsTimer) clearTimeout(clientsTimer);
    if (servicesTimer) clearTimeout(servicesTimer);
    setServicesOpen(false); // Fermer l'autre menu
    setClientsOpen(true);
  };

  const handleClientsLeave = () => {
    const timer = setTimeout(() => setClientsOpen(false), 200);
    setClientsTimer(timer);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setIsVisible(scrollPercentage > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (servicesTimer) clearTimeout(servicesTimer);
      if (clientsTimer) clearTimeout(clientsTimer);
    };
  }, [servicesTimer, clientsTimer]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto">
      <div
        className={`backdrop-blur-lg bg-black/10 border ${
          isVisible ? "border-accent/20" : "border-transparent"
        } rounded-full px-4 md:px-6 py-2.5 md:py-3`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo-baseline.svg"
              alt="ADWIZ Logo"
              width={120}
              height={40}
              className="h-6 md:h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/cabinet"
              className={`font-semibold hover:text-accent transition-all duration-300 ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}
            >
              Qui sommes-nous ?
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className={`font-semibold flex items-center gap-1 hover:text-accent transition-all duration-300 ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              } ${servicesOpen ? 'text-accent' : ''}`}>
                Que faisons-nous ? 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2 z-50"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <div className="w-80 bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-xl border border-accent/30 rounded-2xl p-6 shadow-2xl shadow-black/50">
                      <div className="space-y-1">
                        <Link 
                          href="/droit-des-societes-droit-des-contrats" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Droit des Sociétés - Commercial</span>
                        </Link>
                        <Link 
                          href="/transactions-levees-de-fonds" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Transaction - Levée de fonds</span>
                        </Link>
                        <Link 
                          href="/contentieux-recouvrement" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Contentieux - Recouvrement</span>
                        </Link>
                        <Link 
                          href="/entreprises-en-difficulte" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Entreprises en difficulté</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative group"
              onMouseEnter={handleClientsEnter}
              onMouseLeave={handleClientsLeave}
            >
              <button className={`font-semibold flex items-center gap-1 hover:text-accent transition-all duration-300 ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              } ${clientsOpen ? 'text-accent' : ''}`}>
                Pour qui ? 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${clientsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {clientsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 pt-2 z-50"
                    onMouseEnter={handleClientsEnter}
                    onMouseLeave={handleClientsLeave}
                  >
                    <div className="w-64 bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-xl border border-accent/30 rounded-2xl p-6 shadow-2xl shadow-black/50">
                      <div className="space-y-1">
                        <Link 
                          href="/dirigeants" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Dirigeants</span>
                        </Link>
                        <Link 
                          href="/associes" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Associés</span>
                        </Link>
                        <Link 
                          href="/fondateurs-repreneurs" 
                          className="group/item flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 transition-all duration-300 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300"></div>
                          <span className="font-medium">Fondateurs - Repreneurs</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            className={`block font-semibold hover:text-accent transition-colors ${
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
