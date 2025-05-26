"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      style={{ y }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto"
    >
      <div
        className={`backdrop-blur-md border border-accent/20 rounded-full px-6 py-3 ${
          isLightPage ? "bg-white/80" : "bg-primary/80"
        }`}
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
              href="#services"
              className={`hover:text-accent transition-colors ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}
            >
              Services
            </Link>
            <Link
              href="#apropos"
              className={` hover:text-accent transition-colors ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}
            >
              À propos
            </Link>
            <Link
              href="#contact"
              className={` hover:text-accent transition-colors ${
                isLightPage ? "text-[#373433]" : "text-gray-300"
              }`}
            >
              Contact
            </Link>
            <Link
              href="#rdv"
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
          <button className="md:hidden text-white">
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
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
