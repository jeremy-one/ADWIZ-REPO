"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [isLightPage, setIsLightPage] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsLightPage(pathname === "/light");
  }, [pathname]);

  return (
    <footer
      className={`bg-[#0A0D1A] border-t border-accent/20 ${
        isLightPage ? "bg-white" : "bg-[#0A0D1A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Colonne Logo et description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-baseline.svg"
                alt="ADWIZ Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p
              className={` text-sm ${
                isLightPage ? "text-[#373433]" : "text-gray-400"
              }`}
            >
              ADWIZ accompagne les entreprises dans leurs problématiques
              juridiques, en faisant du droit des affaires un outil de
              développement.
            </p>
          </div>

          {/* Colonne Services */}
          <div>
            <h3
              className={` font-semibold mb-4 ${
                isLightPage ? "text-[#373433]" : "text-white"
              }`}
            >
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Droit des sociétés
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Transactions & Levée de fonds
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Contentieux & Recouvrement
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Entreprises en difficulté
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Entreprise */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isLightPage ? "text-[#373433]" : "text-white"
              }`}
            >
              ADWIZ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/le-cabinet"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Réseaux
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h3
              className={`font-semibold mb-4 ${
                isLightPage ? "text-[#373433]" : "text-white"
              }`}
            >
              Nous trouver
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                <span className="block">12 Place de la Bourse</span>
                <span>33000 Bordeaux</span>
              </li>
              <li className="text-gray-400 text-sm">
                <a
                  href="tel:+33123456789"
                  className="hover:text-accent transition-colors"
                >
                  +33 (0)5 54 52 95 07
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <a
                  href="mailto:contact@adwiz.fr"
                  className="hover:text-accent transition-colors"
                >
                  contact@adwiz.law
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-accent/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ADWIZ. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
