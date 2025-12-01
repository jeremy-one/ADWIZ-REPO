"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
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
                  href="/entreprises-en-difficulte"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Entreprises en difficulté
                </Link>
              </li>
              <li>
                <Link
                  href="/contentieux-recouvrement"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Contentieux des affaires
                </Link>
              </li>
              <li>
                <Link
                  href="/transactions-levees-de-fonds"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Transactions - Levées de fonds
                </Link>
              </li>
              <li>
                <Link
                  href="/droit-des-societes-droit-des-contrats"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Droit des sociétés - Droit commercial
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
                  href="/cabinet"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Qui sommes-nous ?
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
              <li>
                <Link
                  href="/honoraires"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Honoraires
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
            <ul className="space-y-2" style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li className="text-gray-400 text-sm flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=12+Place+de+la+Bourse+33000+Bordeaux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <span className="block">12, PLACE DE LA BOURSE</span>
                  <span>33000 - BORDEAUX</span>
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+33633540320"
                  className="hover:text-accent transition-colors"
                >
                  +33 6 33 54 03 20
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:contact@adwiz.fr"
                  className="hover:text-accent transition-colors"
                >
                  contact@adwiz.law
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Lun-Ven 9h-18h</span>
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
