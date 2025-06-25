"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  ArrowRight,
  Gavel,
  AlertTriangle,
  Handshake,
} from "lucide-react";
import Link from "next/link";

export default function Section1() {
  const router = useRouter();

  const domains = [
    {
      title: "Droit des sociétés",
      items: [
        "Création de société",
        "Structuration de groupe (Holding, Conventions intragroupe, gouvernance)",
        "Pactes d'associés",
        "Modification statutaire",
      ],
      icon: Briefcase,
      link: "/droit-des-sociétés",
    },
    {
      title: "Transactions & Levée de fonds ",
      items: [
        "Préparation et négociation",
        "Audit, Valorisation, Documentation intermédiaire",
        "Rédaction des actes",
        "Exécution de l'opération",
      ],
      icon: Handshake,
      link: "/cession-acquisition",
    },
    {
      title: "Contentieux - Recouvrement",
      items: [
        "Litiges commerciaux",
        "Conflits d'associés",
        "Recouvrement de créances",
        "Mesures d'exécution",
      ],
      icon: Gavel,
      link: "/contentieux-recouvrement",
    },
    {
      title: "Entreprises en difficulté",
      items: [
        "Amiable (Mandat ad hoc – Conciliation)",
        "Judiciaire (Sauvegarde, Redressement, Liquidation judiciaire)",
        "Accompagnement du débiteur (Négociations, Plan)",
        "Protection du créancier (Déclaration de créance, Contrats en cours, Revendication)",
      ],
      icon: AlertTriangle,
      link: "/entreprises-en-difficulté",
    },
  ];

  return (
    <motion.section
      id="section1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 bg-gradient-to-b from-primary to-[#0A0D1A] text-white relative overflow-hidden"
    >
      {/* Effet de fond organique */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 text-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className=" text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                Nos services
              </h2>
            </motion.div>

            {/* Grille de cartes avec effet flip */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group h-[400px] perspective-1000"
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Face avant (recto) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-accent/20 rounded-2xl mb-6">
                        {(() => {
                          const Icon = domain.icon;
                          return <Icon className="w-8 h-8 text-accent" />;
                        })()}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {domain.title}
                      </h3>
                      <p className="text-accent/80 text-sm">
                        Survolez pour voir les détails
                      </p>
                    </div>

                    {/* Face arrière (verso) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-xl">
                          {(() => {
                            const Icon = domain.icon;
                            return <Icon className="w-5 h-5 text-accent" />;
                          })()}
                        </div>
                        <h4 className="text-lg font-bold text-white">
                          {domain.title}
                        </h4>
                      </div>

                      <div className="flex-1 space-y-3 mb-6">
                        {domain.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-xl bg-accent/5 border border-accent/10"
                          >
                            <div className="min-w-2 w-2 h-2 rounded-full bg-accent mt-2" />
                            <span className="text-sm text-white/90 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={domain.link}
                        className="w-full flex items-center justify-center gap-2 bg-accent text-primary px-4 py-3 rounded-xl font-semibold text-sm hover:bg-accent/90 transition-all duration-300"
                      >
                        <span>Plus d'informations</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.section>
  );
}
