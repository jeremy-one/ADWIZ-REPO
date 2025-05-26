"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  FileText,
  Handshake,
  Users,
  CheckCircle,
  ChevronDown,
  Star,
  Shield,
  Target,
  Clock,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CessionAcquisition() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      title: "Phase de préparation et de négociation initiale",
      items: [
        "Rédaction des accords de confidentialité (NDA)",
        "Encadrement des lettres d'intention (LOI indicatives ou engageantes)",
        "Appui à la rédaction ou la revue du teaser, de l'info-mémo et de la term-sheet",
        "Définition du calendrier de l'opération, des points de vigilance, et des modalités de dialogue entre les parties",
      ],
      icon: FileText,
    },
    {
      title: "Audit, valorisation, documentation intermédiaire",
      items: [
        "Audit juridique côté vendeur ou acquéreur : corporate, contrats, RH, contentieux",
        "Traitement des Q&A et analyse des documents clés",
        "Appréciation des méthodes d'évaluation : comparables, actifs, rentabilité, multiples…",
        "Identification des engagements à documenter",
      ],
      icon: CheckCircle,
    },
    {
      title: "Rédaction des actes et exécution de l'opération",
      items: [
        "Rédaction du term-sheet, du protocole de cession (SPA), garanties de passif, pactes d'associés",
        "Intégration des conditions suspensives",
        "Organisation juridique du signing et du closing",
        "Production de l'ensemble de la documentation contractuelle définitive",
      ],
      icon: Handshake,
    },
  ];

  const profiles = [
    {
      title: "Dirigeants cédants",
      description:
        "Préparez votre transmission avec rigueur, en gardant la main sur le tempo et les conditions.",
      icon: Users,
    },
    {
      title: "Repreneurs ou investisseurs",
      description:
        "Accédez à un accompagnement clair, sans angles morts, adapté aux contraintes de chaque opération.",
      icon: Target,
    },
    {
      title: "Directions juridiques",
      description:
        "Renforcez le travail de vos équipes avec un cabinet autonome, structuré et rodé aux opérations sensibles.",
      icon: Shield,
    },
  ];

  const advantages = [
    {
      icon: Handshake,
      title: "Une approche orientée projet",
      description:
        "Nous ne traitons pas l'opération comme une série d'actes à enchaîner, mais comme une trajectoire à construire.",
    },
    {
      icon: FileText,
      title: "Des documents conçus pour durer",
      description:
        "Bien rédigés, compréhensibles, intégrables dans vos process, et acceptés par toutes les parties.",
    },
    {
      icon: Clock,
      title: "Un cadre clair dès le départ",
      description:
        "Chaque mission fait l'objet d'un devis détaillé, avec une logique de forfait adaptée à la complexité réelle.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D1A] to-primary text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-[#0A0D1A]/50 via-[#0A0D1A]/60 to-primary/70"
          />
        </div>

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
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]"
            >
              Céder ou acquérir une entreprise avec un avocat en droit des
              affaires
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Un accompagnement juridique en lien avec vos partenaires de
              confiance, pour mener à bien votre opération.
            </motion.p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
              >
                Prendre rendez-vous
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
      <section className="py-20 px-4">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]">
          Une expertise juridique intégrée à vos opérations
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-center">
          Une opération de cession ou d'acquisition mobilise des enjeux
          juridiques, financiers, humains et patrimoniaux.
        </p>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-center font-bold">
          ADWIZ intervient à vos cotés pour :
        </p>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 items-center gap-4 flex flex-col justify-center"
          >
            <ul className="text-xl text-gray-300 max-w-3xl mx-auto space-y-4 text-left grid grid-cols-3 gap-4">
              <li className="flex items-start gap-2 bg-accent/10 rounded-lg p-4 h-full">
                <ArrowRight className="min-w-5 min-h-5 text-accent mt-1" />
                <span>
                  Préparer le cadre juridique dès la phase de réflexion
                </span>
              </li>
              <li className="flex items-start gap-2 bg-accent/10 rounded-lg p-4 h-full">
                <ArrowRight className="min-w-5 min-h-5 text-accent mt-1" />
                <span>Structurer les négociations, sans zones d'ombre</span>
              </li>
              <li className="flex items-start gap-2 bg-accent/10 rounded-lg p-4 h-full">
                <ArrowRight className="min-w-5 min-h-5 text-accent mt-1" />
                <span>Rédiger l'ensemble des documents clés</span>
              </li>
            </ul>
            <ul className="text-xl text-gray-300 max-w-3xl mx-auto space-y-4 text-left flex gap-4">
              <li className="flex items-start gap-2 bg-accent/10 rounded-lg p-4 h-full">
                <ArrowRight className="min-w-5 min-h-5 text-accent mt-1" />
                <span>Coordonner le processus jusqu'au closing final</span>
              </li>
              <li className="flex items-start gap-2 bg-accent/10 rounded-lg p-4 h-full">
                <ArrowRight className="min-w-5 min-h-5 text-accent mt-1" />
                <span>
                  Intégrer les contraintes fiscales, sociales et de gouvernance
                </span>
              </li>
            </ul>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
              Nous agissons en coordination avec vos interlocuteurs habituels
              (expert-comptable, cabinet M&A, assureurs, notaire, avocat
              fiscaliste…) pour assurer une cohérence d'ensemble, du premier
              échange à la signature définitive.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
          >
            Échangeons sur votre projet
            <ArrowRight className="w-5 h-5" />
          </Link>
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
              Notre accompagnement, phase par phase
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20 hidden md:block" />

            <div className="space-y-16 md:space-y-0">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent z-10 hidden md:block" />

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 rounded-lg bg-accent/20">
                            <phase.icon className="w-6 h-6 text-accent" />
                          </div>
                          <h3 className="text-xl font-semibold">
                            {phase.title}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for even items */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Profils */}
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
              Un accompagnement ajusté à votre profil
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
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />

                {/* Card content */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  {/* Icon container with gradient */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <profile.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Title with gradient text */}
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                    {profile.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 flex-grow">
                    {profile.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Pourquoi ADWIZ ?
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
              Donnez à votre opération les bases juridiques qu'elle exige
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Prenez rendez-vous avec ADWIZ pour préparer votre cession ou votre
              acquisition.
              <br />
              Premier échange confidentiel, sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
