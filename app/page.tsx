"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section1 from "../components/Section1";

import {
  User,
  Rocket,
  Building2,
  Briefcase,
  ArrowRight,
  FileText,
  Gavel,
  AlertTriangle,
  Target as TargetIcon,
  Pin as PinIcon,
  MessageCircle,
  Star,
  ChevronDown,
  Target,
  Zap,
  Scale,
  MessageSquare,
  Users,
  FileCheck,
  Handshake,
  Clock,
  BookOpen,
  Shield,
  Star as StarIcon,
  CheckCircle,
  Ear,
  Linkedin,
  Instagram,
  Music,
  Podcast,
  BriefcaseBusiness,
} from "lucide-react";
import { useState, useRef } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const [selectedPrinciple, setSelectedPrinciple] = useState(0);
  const router = useRouter();
  const section1Ref = useRef<HTMLDivElement>(null);

  const principles = [
    {
      icon: Shield,
      title: "Sécurité",
      description: "Anticiper les risques, structurer les décisions",
      details: [
        "Analyse approfondie des risques juridiques",
        "Mise en place de mesures préventives",
        "Protection des intérêts de l'entreprise",
        "Veille juridique proactive",
      ],
    },
    {
      icon: Target,
      title: "Exigence",
      description: "Analyser, approfondir, améliorer",
      details: [
        "Expertise pointue en droit des affaires",
        "Méthodologie rigoureuse",
        "Qualité des livrables garantie",
        "Suivi précis des engagements",
      ],
    },
    {
      icon: Handshake,
      title: "Confiance",
      description: "Créer un cadre clair pour des relations durables ",
      details: [
        "Échanges transparents et réguliers",
        "Engagement sur les résultats",
        "Confidentialité absolue",
        "Partenariat sur le long terme",
      ],
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Agir vite, sans jamais improviser",
      details: [
        "Disponibilité immédiate",
        "Solutions opérationnelles",
        "Adaptation aux urgences",
        "Suivi en temps réel",
      ],
    },
    {
      icon: Ear,
      title: "Écoute",
      description: "Comprendre vos enjeux et ensuite conseiller",
      details: [
        "Analyse de vos besoins spécifiques",
        "Solutions sur mesure",
        "Communication claire et directe",
        "Feedback régulier",
      ],
    },
    {
      icon: BookOpen,
      title: "Transmission",
      description: "Partager pour renforcer la décision",
      details: [
        "Formation et accompagnement",
        "Documentation exhaustive",
        "Transfert de compétences",
        "Capitalisation des expériences",
      ],
    },
  ];

  const scrollToSection = () => {
    const section1 = document.getElementById("section1");
    if (section1) {
      section1.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D1A] to-primary text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex px-4 relative overflow-hidden"
      >
        {/* Background Video avec animation */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="relative w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => console.error("Erreur vidéo:", e)}
              onLoadStart={() => console.log("Chargement vidéo démarré")}
              onCanPlay={() => console.log("Vidéo prête à jouer")}
            >
              <source src="/assets/hero-vide.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
            {/* Fallback background si la vidéo ne charge pas */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D1A] to-primary -z-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-[#0A0D1A]/70 via-[#0A0D1A]/80 to-primary/90"
          />
        </div>

        <div className="max-w-7xl justify-center flex flex-col mx-auto w-full relative z-10">
          {/* Partie texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center gap-1"
            >
              <Image
                src="/assets/logo.svg"
                alt="ADWIZ Logo"
                width={400}
                height={400}
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[32px] text-accent font-medium"
              >
                Avocat en droits des affaires
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-accent text-primary px-8 py-2 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                <span>Prendre rendez-vous</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.h1
              className="text-xl md:text-5xl font-bold leading-tight block bg-clip-text text-transparent bg-gradient-to-r from-white  to-accent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              UNE NOUVELLE APPROCHE DE L'ACCOMPAGNEMENT JURIDIQUE
            </motion.h1>

            {/* Carte acteurs*/}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:justify-center no-scrollbar">
              {[
                {
                  title: "Dirigeants",
                  description:
                    "Organisez votre gouvernance, sécurisez vos décisions, gérez vos contentieux.",
                  icon: BriefcaseBusiness,
                },
                {
                  title: "Fondateurs - Repreneurs",
                  description:
                    "Créez votre société, structurez votre projet, formalisez les relations avec vos associés.",
                  icon: Building2,
                },
                {
                  title: "Directions juridiques",
                  description:
                    "Externalisez une mission spécifique, encadrez une opération complexe, sécurisez vos processus.",
                  icon: Building2,
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className=" w-full min-w-82 snap-center md:max-w-82 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-accent/20 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-accent/40"
                  initial={{ opacity: 0, y: -600 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.15,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300 uppercase w-full">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-6">
                    {card.description}
                  </p>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 text-white font-normal hover:text-accent transition-all duration-300"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2 }}
              className="text-xl md:text-3xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white  to-accent"
            >
              Faire du droit des affaires un levier de croissance
            </motion.h2>
          </motion.div>
        </div>

        {/* Flèche de scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 !cursor-pointer -translate-x-1/2"
          onClick={scrollToSection}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 !cursor-pointer group"
          >
            <ChevronDown className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section 1 */}
      <Section1 />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b from-[#0A0D1A] to-primary text-white relative overflow-hidden mx-auto"
      >
        {/* Pourquoi ADWIZ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text pb-2 text-transparent bg-gradient-to-r from-white to-accent">
            Pourquoi ADWIZ ?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: TargetIcon,
              title: "Collaboration et résultats",
              description:
                "Des objectifs concrets, pas d’actions ou de procédures inutiles. Calendrier, livrables et information continue.",
            },
            {
              icon: Zap,
              title: "Innovation",
              description:
                "Base documentaire, équipement informatique, outils digitaux, intelligence artificielle pour réduire les coûts et améliorer le conseil.",
            },
            {
              icon: FileCheck,
              title: "Tarif 100 % forfait ou par abonnement",
              description:
                "Prestations définies et détaillées à l’avance. Devis chiffrés.",
            },
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:from-accent/10 group-hover:to-accent/15 border border-accent/20 group-hover:border-accent/40" />
              <div className="relative p-8 text-center">
                <div className="flex justify-center mb-4">
                  <point.icon className="w-12 h-12 text-accent transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b from-[#0A0D1A] to-primary text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              La méthode S.E.C.R.E.T.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ADWIZ a cumulé les expériences pour élaborer une méthode de
              travail rigoureuse, structurée et orientée résultats, basée sur
              six principes :
            </p>
          </motion.div>

          {/* Onglets des principes */}
          <div className="flex md:justify-center no-scrollbar overflow-x-auto snap-x snap-mandatory gap-4 mb-12">
            {principles.map((principle, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPrinciple(index)}
                className={`flex items-center snap-center cursor-pointer gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  index === selectedPrinciple
                    ? "bg-accent/20 border border-accent/40"
                    : "hover:bg-accent/10 border border-accent/20"
                }`}
              >
                <principle.icon className="w-5 h-5 text-accent" />
                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-l from-white to-accent">
                  {principle.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Contenu du principe sélectionné */}
          <motion.div
            key={selectedPrinciple}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl transform transition-all duration-500" />
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="w-20 h-20 flex items-center justify-center bg-accent/10 rounded-2xl">
                  {(() => {
                    const Icon = principles[selectedPrinciple].icon;
                    return <Icon className="w-10 h-10 text-accent" />;
                  })()}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {principles[selectedPrinciple].title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {principles[selectedPrinciple].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {principles[selectedPrinciple].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 5 - Pourquoi ADWIZ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b from-primary to-[#0A0D1A] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Une question, un projet, un litige à anticiper ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous gratuit (30min) avec ADWIZ pour un premier
              échange confidentiel, sans engagement.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Prendre rendez-vous</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Floating Bar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed -right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex md:flex-col gap-4 p-4"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-lg rounded-l-2xl" />
          <div className="relative flex flex-col gap-6 p-4">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Podcast, href: "#", label: "Spotify" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, color: "var(--accent)" }}
                className="relative group"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <social.icon className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors duration-300" />
                <span className="absolute -left-2 transform -translate-x-full -translate-y-1/2 top-1/2 bg-accent/90 text-primary px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap pointer-events-none">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
