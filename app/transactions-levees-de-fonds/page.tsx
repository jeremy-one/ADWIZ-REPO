"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  CheckCircle,
  Handshake,
  Clock,
  RefreshCw,
  Store,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DroitDesSocietesDroitDesContrats() {
  const timelineSteps = [
    {
      title: "La définition de l’opération",
      description:
        "Contexte et objectifs (cession, reprise, investissement), audit du projet (marché, cible, calendrier, financement), enjeux personnels (entreprenariat, investissement, exit, retraite)",
      position: "left",
      step: 1,
    },
    {
      title: "La préparation et la négociation de l’opération",
      description:
        "Audit juridique, valorisation, préparation ou revue de la documentation transactionnelle (teaser, info-mémo, Q&A), négociations de la transaction",
      position: "right",
      step: 2,
    },
    {
      title: "La rédaction de la documentation juridique",
      description:
        "Accord de confidentialité, lettre d’offre et d’intention, compromis de cession, acte définitif de cession, garantie d’actif et de passif, pactes d’associés",
      position: "left",
      step: 3,
    },
    {
      title: "La finalisation de l’opération",
      description:
        "Signing, closing, appels de fonds, formalités et enregistrements",
      position: "right",
      step: 4,
    },
  ];

  const phases = [
    {
      title: "Céder ou acquérir les titres d'une société",
      items: [
        "Audit des cibles, valorisation, négociations",
        "Décisions des organes sociaux validant l'opération",
        "Rédaction de la documentation contractuelle (NDA, LOI, SPA, GAP...)",
        "Closing, signing, appel de fonds",
      ],
      icon: RefreshCw,
    },
    {
      title: "Céder ou acquérir un fonds de commerce",
      items: [
        "Définition des actifs à céder ou reprendre, valorisation, négociations",
        "Décisions des organes sociaux validant l'opération",
        "Rédaction de la documentation contractuelle (NDA, LOI, acte de cession, GAP...)",
        "Closing, signing, appel de fonds, séquestre",
      ],
      icon: Store,
    },
    {
      title: "Procéder à une levée de fonds",
      items: [
        "Définition des conditions de l'augmentation de capital (DPS, prime d'émission)",
        "Décisions des organes sociaux validant la souscription au capital",
        "Organisation et constatation de la souscription au capital",
        "Mise à jour de la table capitalistique, modifications des statuts",
      ],
      icon: TrendingUp,
    },
    {
      title: "Encadrez l'activité et les relations entre associés",
      items: [
        "Structuration du véhicule d'acquisition",
        "Organisation de l'activité post transaction (accompagnement, management)",
        "Rédaction du pacte d'associés, management package",
      ],
      icon: Handshake,
    },
  ];

  const advantages = [
    {
      icon: Handshake,
      title: "Une approche orientée selon vos enjeux business et personnels",
      description:
        "Nous ne traitons pas l’opération comme une série de documents juridiques mais comme un projet dans son ensemble.",
    },
    {
      icon: FileText,
      title: "Des livrables directement exploitables",
      description:
        "Clairs, bien rédigés, rassurant pour vos partenaires (investisseurs, banques, clients, fournisseurs…).",
    },
    {
      icon: Clock,
      title: "Une tarification transparente",
      description:
        "Chaque mission fait l’objet d’une tarification fixée à l’avance et calibrée selon l’enjeux économique du dossier ",
    },
  ];

  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D1A] to-primary text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl justify-center flex flex-col mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col gap-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest"
            >
              Avocat en droit des affaires
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]"
            >
              Céder, reprendre ou investir dans une entreprise avec ADWIZ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              La cession, l'acquisition ou l’investissement dans une entreprise
              nécessitent d’être sécurisés par la rédaction d’une documentation
              juridique claire et valide.
              <br />
              <br />
              Mais ces opérations mobilisent des enjeux humains, financiers et
              patrimoniaux qu’ADWIZ intègre à son accompagnement, en relation
              avec vos partenaires (experts-comptables, banquier, M&A...).
            </motion.p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
              >
                Vision gratuite (25 min)
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Flèche de scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 !cursor-pointer -translate-x-1/2"
        >
          <p className="text-sm text-gray-300 max-w-3xl mx-auto text-center ">
            Découvrez notre accompagnement
          </p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center !cursor-pointer group"
          >
            <ChevronDown className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section Expertise */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 hidden md:block" />

            {/* Timeline steps */}
            <div className="space-y-16 md:space-y-12">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: step.position === "left" ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    step.position === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent z-10 hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      step.position === "left" ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Étape {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
            >
              Échangeons sur votre projet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Accompagnement */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]">
              ADWIZ vous propose son expertise en droit des affaires si vous
              souhaitez
            </h2>
          </motion.div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-300">
                  {/* Accordion Header */}
                  <button
                    onClick={() =>
                      setSelectedPhase(selectedPhase === index ? -1 : index)
                    }
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                          <phase.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedPhase === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-accent" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedPhase === index ? "auto" : 0,
                      opacity: selectedPhase === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-white/10 pt-6">
                        <div className="grid gap-4">
                          {phase.items.map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: selectedPhase === index ? 1 : 0,
                                x: selectedPhase === index ? 0 : -20,
                              }}
                              transition={{
                                duration: 0.3,
                                delay:
                                  selectedPhase === index ? itemIndex * 0.1 : 0,
                              }}
                              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group/item"
                            >
                              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation hints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm">
              Cliquez sur chaque phase pour découvrir les détails de notre
              accompagnement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Profils */}
      {/* <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]">
              Vous souhaitez en savoir plus ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />

                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <profile.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                    {profile.title}
                  </h3>

                  
                  <p className="text-gray-300 flex-grow">
                    {profile.description}
                  </p>

                  
                  <div className="absolute inset-0 rounded-2xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section Pourquoi ADWIZ */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]">
              Pourquoi se faire accompagner par ADWIZ?
            </h2>
          </motion.div>

          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative space-y-12">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl overflow-hidden">
                    {/* Left side - Icon and decorative elements */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <advantage.icon className="w-12 h-12 text-accent transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-300 max-w-2xl">
                        {advantage.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Connecting line (except for last item) */}
                  {index < advantages.length - 1 && (
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-1 h-12 bg-accent/20 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]">
              Discutons de votre projet
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Créer, structurer et développer son activité nécessite un conseil
              juridique adapté.
              <br />
              Prenons rendez-vous pour un premier échange confidentiel et sans
              engagement
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
            >
              Vision gratuite (25 min)
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
