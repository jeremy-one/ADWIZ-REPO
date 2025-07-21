"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section1 from "../components/Section1";
import { TbBrandTiktok } from "react-icons/tb";

import {
  Building2,
  ArrowRight,
  Target as TargetIcon,
  ChevronDown,
  Target,
  Zap,
  FileCheck,
  Handshake,
  Shield,
  Linkedin,
  Instagram,
  BriefcaseBusiness,
  Facebook,
} from "lucide-react";

import React from "react";
import Link from "next/link";

export default function Home() {
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
        className="min-h-screen flex px-4 relative overflow-hidden pt-14"
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
            className="absolute inset-0 bg-gradient-to-b from-[#0A0D1A]/40 via-[#0A0D1A]/60 to-primary/90"
          />
        </div>

        <div className="max-w-7xl justify-center flex flex-col mx-auto w-full relative z-10">
          {/* Partie texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col gap-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/assets/logo.svg"
                alt="ADWIZ Logo"
                width={300}
                height={300}
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[24px] text-accent font-medium"
              >
                Avocat en droit des affaires
              </motion.h1>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.h1
                className="text-xl md:text-3xl max-w-4xl mx-auto uppercase font-bold leading-tight block bg-clip-text text-transparent bg-gradient-to-r from-white  to-accent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Défendre vos intérêts, structurer vos projets, sécuriser vos
                transactions.
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Avocat en droit des affaires, j’interviens à chaque moment
                stratégique de la vie de l’entreprise, en conseil comme en
                contentieux. Mes conseils sont un levier de croissance pour mes
                clients.
              </motion.p>
            </div>

            {/* Carte acteurs*/}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:justify-center no-scrollbar">
              {[
                {
                  title: "Dirigeants",
                  description:
                    "Organisez votre activité. Gérez les contentieux, le recouvrement et les difficultés.",
                  icon: BriefcaseBusiness,
                  link: "/dirigeants",
                },
                {
                  title: "ASSOCIES",
                  description: "Encadrez vos relations et réglez les conflits.",
                  icon: Building2,
                  link: "/associes",
                },
                {
                  title: "FONDATEURS - REPRENEURS",
                  description:
                    "Structurez, développez ou cédez votre entreprise.",
                  icon: Building2,
                  link: "/fondateurs-repreneurs",
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
                  <p className=" text-gray-400 group-hover:text-white transition-colors duration-300 mb-6">
                    {card.description}
                  </p>
                  <Link
                    href={card.link}
                    className="group inline-flex items-center gap-2 text-white font-normal hover:text-accent transition-all duration-300"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <Link
                href="https://app.lemcal.com/@fdw"
                target="_blank"
                className="group inline-flex items-center gap-2 bg-accent text-primary px-8 py-2 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                <span>Une question ? Visio gratuite (25 min) </span>
              </Link>
            </motion.div>

            {/* <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2 }}
              className="text-xl md:text-3xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white  to-accent"
            >
              Faire du droit des affaires un levier de croissance
            </motion.h2> */}
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
        className="py-24 px-4 bg-gradient-to-b  flex flex-col gap-8 items-center from-[#0A0D1A] to-primary text-white relative overflow-hidden mx-auto"
      >
        <h2 className=" text-4xl md:text-5xl font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
          Pourquoi se faire accompagner par ADWIZ ?
        </h2>
        <p className="text-white/70 text-lg max-w-4xl mx-auto text-center">
          Parce que nous proposons un accompagnement qui est centré sur vos
          objectifs et vos besoins. <br /> Que vous soyez dirigeants ou associés
          d’une PME/ETI, entrepreneurs en phase de croissance ou avec un projet
          de reprise, nous adaptons notre intervention à vos priorités et à
          votre rythme de décision.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=" rounded-2xl p-6 flex justify-center"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-2xl font-semibold text-base hover:bg-accent/90 transition-all duration-300"
          >
            <span>Découvrez toutes nos offres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.section>

      {/* Section - Qu'est-ce qui différencie ADWIZ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b from-primary to-[#0A0D1A] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text pb-2 text-transparent bg-gradient-to-r from-white to-accent">
              Qu'est-ce qui différencie ADWIZ ?
            </h2>
          </motion.div>

          {/* Slider Container */}
          <div className="relative">
            {/* Slider Content */}
            <div className="overflow-x-auto snap-x flex justify-center snap-mandatory scrollbar-hide">
              <div
                className="flex gap-8 py-4 "
                style={{ width: "max-content" }}
              >
                {[
                  {
                    icon: Target,
                    title:
                      "Un accompagnement sur mesure, dimensionné à vos enjeux",
                    points: [
                      "Chaque client, chaque projet est unique.",
                      "Notre approche est centrée sur le conseil et le service, pas de produits standards.",
                      <span key="bold-1" className="font-bold">
                        Nous prenons le temps de comprendre, d'analyser et de
                        construire à vos côtés.
                      </span>,
                    ],
                    color: "blue-400",
                    gradient: "from-accent/10 to-accent/5",
                    borderColor: "border-accent/20",
                  },
                  {
                    icon: Handshake,
                    title: "Un partenaire engagé, exigeant et constructif",
                    points: [
                      "Nous contribuons à faire émerger les bonnes décisions.",
                      "Nous posons les questions utiles, anticipons les points sensibles, et apportons un regard pragmatique.",
                      <span key="bold-2" className="font-bold">
                        Attendez-vous à un échange direct, exigeant et orienté
                        résultats.
                      </span>,
                    ],
                    color: "blue-400",
                    gradient: "from-accent/10 to-accent/5",
                    borderColor: "border-accent/20",
                  },
                  {
                    icon: Shield,
                    title: "Un cadre structuré pour avancer avec clarté",
                    points: [
                      "Notre organisation, notre méthode et nos ressources vous font gagner du temps et facilitent la prise de décision.",
                      "Vous avancez en étant mieux préparé, mieux entouré, plus sécurisé.",
                      <span key="bold-3" className="font-bold">
                        Nous réduisons la charge mentale liée aux problématiques
                        juridiques.
                      </span>,
                    ],
                    color: "green-400",
                    gradient: "from-accent/10 to-accent/5",
                    borderColor: "border-accent/20",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    // initial={{ opacity: 0, x: 100 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                    className="flex-shrink-0 w-80 md:w-96 snap-center group"
                  >
                    {/* Carte du slider */}
                    <div
                      className={`relative h-full bg-gradient-to-br ${item.gradient} backdrop-blur-lg rounded-3xl border ${item.borderColor} p-8 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}
                    >
                      {/* Icône principale */}
                      <div className="flex justify-center mb-8">
                        <div className="relative">
                          <div
                            className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center border ${item.borderColor}`}
                          >
                            <item.icon
                              className={`w-10 h-10 text-accent transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                            />
                          </div>
                          <div
                            className={`absolute -inset-2 rounded-full border ${item.borderColor} opacity-50 animate-pulse`}
                          />
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center leading-tight group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Points */}
                      <div className="space-y-4">
                        {item.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + pointIndex * 0.1,
                            }}
                            className="flex items-start gap-3"
                          >
                            <p
                              className={`text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed ${pointIndex === item.points.length - 1 && item.points.length > 3 ? "text-accent font-bold" : ""}`}
                            >
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Effet de brillance */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA final */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16 pt-12 border-t border-accent/20"
          >
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Découvrez comment notre approche peut transformer vos défis
              juridiques en opportunités de croissance
            </p>
            <Link
              href="https://app.lemcal.com/@fdw"
              target="_blank"
              className="group inline-flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
            >
              <span>Échanger avec nous</span>
              <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div> */}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b  flex flex-col gap-8 items-center from-[#0A0D1A] to-primary text-white relative overflow-hidden mx-auto"
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
            Ce que vous obtenez avec ADWIZ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: TargetIcon,
              title: "Des résultats concrets",
              description:
                "Calendriers, livrables et information continue. Pas d'actions ou de procédure inutiles.",
            },
            {
              icon: Zap,
              title: "Un service innovant",
              description:
                "Ressources documentaires, outils digitaux et intelligence artificielle pour limiter les coûts et se concentrer sur l'accompagnement et le service.",
            },
            {
              icon: FileCheck,
              title: "Une tarification transparente",
              description:
                "Honoraires au forfait ou à l'abonnement. Prestations définies et tarifs fixés à l'avance.",
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
      {/* <SecretComponent /> */}

      {/* Section 5 - Pourquoi ADWIZ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-row justify-center max-w-7xl items-center flex-wrap md:flex-nowrap py-24 px-4 gap-8 md:gap-0 mx-auto text-white relative overflow-hidden"
      >
        <div className="mx-auto z-10 flex flex-col items-center justify-center">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group h-96 md:h-96 w-80 md:w-full md:w-96 aspect-square perspective-1000 flex flex-col items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 ">
              {/* Face avant (recto) */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-8 flex flex-col items-center gap-8  justify-center text-center">
                <Image
                  src="/assets/fdw.png"
                  alt="ADWIZ Logo"
                  className="rounded-2xl object-cover "
                  width={210}
                  height={210}
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    François-Dominique Wojas
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Fondateur du cabinet ADWIZ
                  </p>
                </div>
              </div>

              {/* Face arrière (verso) */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 p-6 flex flex-col items-cente justify-center w-full">
                <a href="tel:0554529507">
                  <Image
                    src="/assets/qr-code.svg"
                    alt="ADWIZ Logo"
                    className="rounded-2xl "
                    width={600}
                    height={600}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" z-10 h-full flex flex-col justify-center items-start ">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-start flex flex-col gap-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white ">
              Une question, <br /> un projet, <br /> un litige ?
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-start ">
              Contactez nous pour un premier échange gratuit (25 min)
              confidentiel et sans engagement.
            </p>

            <motion.a
              href="https://app.lemcal.com/@fdw"
              target="_blank"
              className="inline-flex mt-8 w-fit items-center gap-2 bg-accent text-primary py-2 px-8 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 group"
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

      {/* Section - Qu'est-ce qui différencie ADWIZ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b from-primary to-[#0A0D1A] text-white relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text pb-2 text-transparent bg-gradient-to-r from-white to-accent">
            Cabinet membre des réseaux
          </h2>
        </motion.div>
        <div className="max-w-7xl mx-auto flex justify-center gap-12">
          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center  "
          >
            <Image
              src="/assets/ace-avocat.png"
              alt="ADWIZ Logo"
              className="rounded-2xl object-cover filter invert"
              width={210}
              height={210}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center  flex justify-center gap-4"
          >
            <Image
              src="/assets/solution-hf.png"
              alt="ADWIZ Logo"
              className="rounded-2xl object-cover filter invert"
              width={210}
              height={210}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Floating Bar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed -right-4 top-1/2 -translate-y-1/2 z-50 hidden  md:flex md:flex-col gap-4 p-4"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-lg rounded-l-2xl" />
          <div className="relative flex flex-col gap-6 p-4">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/françois-dominique-wojas-avocat-droit-des-affaires-bordeaux/",
                label: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/adwiz_law/",
                label: "Instagram",
              },
              {
                icon: Facebook,
                href: "#",
                label: "Facebook",
              },
              {
                icon: TbBrandTiktok,
                href: "https://www.tiktok.com/@adwiz_law?_t=ZN-8x95ZEyxJ1a&_r=1",
                label: "Tiktok",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
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

      {/* Styles CSS pour masquer la scrollbar */}
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
