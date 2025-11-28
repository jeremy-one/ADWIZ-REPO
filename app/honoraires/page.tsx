"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Clock,
  TrendingUp,
  Check,
  X,
  CreditCard,
  AlertCircle
} from "lucide-react";

export default function HonorairesPage() {
  const modesFacturation = [
    {
      icon: FileText,
      title: "Honoraires au forfait",
      description: [
        "Cette formule consiste en la fixation d'un montant global et définitif pour l'accomplissement d'une prestation déterminée.",
        "Elle offre une visibilité financière complète et convient particulièrement aux missions dont le périmètre est clairement identifié dès l'origine (rédaction d'actes, consultations juridiques, formalités spécifiques)."
      ],
    },
    {
      icon: Calendar,
      title: "Honoraires par abonnement",
      description: [
        "Le Cabinet propose également une formule d'abonnement mensuel ou annuel, particulièrement adaptée aux entreprises souhaitant bénéficier d'un accompagnement juridique régulier et d'une assistance permanente.",
        "Cette formule permet de lisser les coûts dans le temps et d'établir une relation de conseil privilégiée, avec un volume d'interventions prédéfini ou un nombre d'heures inclus par période."
      ],
    },
    {
      icon: Clock,
      title: "Honoraires au taux horaire",
      description: [
        "La rémunération est calculée sur la base du temps effectivement consacré au traitement du dossier, selon un taux horaire convenu préalablement.",
        "Cette méthode s'avère adaptée aux missions dont l'ampleur et la durée sont difficiles à évaluer initialement.",
        "Des points d'étape sont réalisés et un décompte détaillé des diligences accomplies est communiqué pour garantir la visibilité."
      ],
      tarif: "Le taux horaire du cabinet est de 260 € H.T.",
    },
    {
      icon: TrendingUp,
      title: "Honoraires de résultat",
      description: [
        "Il s'agit d'une rémunération complémentaire, conditionnée à l'obtention d'un résultat favorable.",
        "Ces honoraires peuvent s'ajouter aux honoraires de base et sont strictement encadrés par les règles déontologiques de la profession d'avocat.",
        "Ils ne peuvent constituer l'unique mode de rémunération."
      ],
    },
  ];

  const fraisInclus = [
    "Frais de gestion courante et de vie du dossier",
    "Frais administratifs",
    "Correspondance électronique",
    "Photocopies",
    "Recherches documentaires",
  ];

  const fraisNonInclus = [
    "Frais de déplacement, d'hébergement, de restauration",
    "Frais postaux pour envois recommandés",
    "Débours (huissiers, experts, traducteurs)",
    "Frais de greffes et d'enregistrement",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D1A] to-primary text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6"
          >
            Honoraires
          </motion.h1>
        </div>
      </motion.section>

      {/* Section Nos principes */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-24 px-4 bg-gradient-to-b from-primary to-[#0A0D1A]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-white text-center"
          >
            Principe
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/70 text-base md:text-lg max-w-5xl mx-auto"
          >
            <p>
              Nos honoraires sont fixés conformément aux dispositions de l'article 10 de la loi n° 71-1130 du 31 décembre 1971 et dans le respect des règles déontologiques en vigueur, notamment l'article 11 du Règlement intérieur national de la profession d'avocat.
            </p>
            <p>
              Ils font l'objet d'un accord avec nos clients en fonction de critères objectifs tels que la complexité du dossier, le temps consacré, l'urgence de la situation, la notoriété du cabinet, les enjeux financiers et l'expertise particulière requise.
            </p>
            <p>
              Ils font systématiquement l'objet d'une convention écrite préalable.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Modes de facturation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-24 px-4 bg-gradient-to-b from-[#0A0D1A] to-primary"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
          >
            Modes de facturation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {modesFacturation.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="h-full bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-accent/20 rounded-xl mb-6">
                    <mode.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {mode.title}
                  </h3>

                  {Array.isArray(mode.description) ? (
                    <div className="space-y-4 mb-4">
                      {mode.description.map((paragraph, i) => (
                        <p key={i} className="text-white/70 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/70 leading-relaxed mb-4">
                      {mode.description}
                    </p>
                  )}

                  {'note' in mode && mode.note && (
                    <p className="text-accent/80 text-sm italic mt-4">
                      {mode.note}
                    </p>
                  )}

                  {mode.tarif && (
                    <div className="mt-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                      <p className="text-accent font-semibold">
                        {mode.tarif}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Modalités */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-24 px-4 bg-gradient-to-b from-primary to-[#0A0D1A]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
          >
            Modalités
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Inclus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-xl">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Inclus dans les honoraires
                </h3>
              </div>

              <ul className="space-y-3">
                {fraisInclus.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Non inclus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-xl">
                  <X className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Non inclus : Frais et débours
                </h3>
              </div>

              <ul className="space-y-3">
                {fraisNonInclus.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="min-w-2 w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/70 text-sm mt-6 pt-6 border-t border-accent/20">
                Ces débours sont refacturés au client à leur coût réel, sans majoration. Une information détaillée sur ces frais et débours prévisibles est communiquée au client en amont de chaque mission.
              </p>
            </motion.div>

            {/* TVA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">TVA</h3>
              </div>
              <p className="text-white/70">
                Les honoraires et frais sont soumis à la taxe sur la valeur ajoutée au taux en vigueur.
              </p>
            </motion.div>

            {/* Règlement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-xl">
                  <CreditCard className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Règlement
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Les factures sont payables à réception, sauf modalités spécifiques convenues par écrit.
                <br /><br />
                Le Cabinet peut demander le versement d'une provision avant d'entreprendre toute démarche, cette provision étant déduite de la facture finale.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
