"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  XCircle,
  Shield,
  AlertTriangle,
  Lightbulb,
  Users,
  Award,
  BookOpen,
  Calendar,
  FileCheck,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LiquidationJudiciaire() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedTile, setSelectedTile] = useState<number | null>(null);

  const timelineSteps = [
    {
      title: "Vérifier la cessation des paiements",
      description:
        "Impossibilité de faire face au passif exigible avec l'actif disponible et constat que le redressement est manifestement impossible",
      position: "left",
      step: 1,
    },
    {
      title: "Déclarer la cessation des paiements au Tribunal",
      description:
        "Demande d'ouverture de liquidation judiciaire dans les 45 jours de la cessation des paiements, par le dirigeant, un créancier ou le ministère public",
      position: "right",
      step: 2,
    },
    {
      title: "Ouverture de la procédure de liquidation judiciaire",
      description:
        "Le Tribunal prononce la liquidation judiciaire, nomme un liquidateur judiciaire et fixe la date de cessation des paiements",
      position: "left",
      step: 3,
    },
    {
      title: "Réalisation des actifs et apurement du passif",
      description:
        "Le liquidateur réalise les actifs de l'entreprise, apure le passif et vérifie les créances. Clôture de la procédure après répartition du produit de la vente",
      position: "right",
      step: 4,
    },
  ];

  const procedures = [
    {
      title: "La procédure de liquidation judiciaire",
      items: [
        {
          label: "Conditions d'ouverture",
          text: "Entreprise en cessation des paiements dont le redressement est manifestement impossible. Ouverture à l'initiative du débiteur (dans les 45 jours), d'un créancier ou du ministère public",
        },
        {
          label: "Dessaisissement du dirigeant",
          text: "Le dirigeant est dessaisi de la gestion de l'entreprise. Le liquidateur judiciaire prend en charge l'administration et la réalisation des actifs",
        },
        {
          label: "Gel du passif et arrêt des poursuites",
          text: "Interdiction des poursuites individuelles contre l'entreprise. Les créanciers doivent déclarer leurs créances au passif de la procédure",
        },
        {
          label: "Réalisation des actifs",
          text: "Vente des actifs de l'entreprise par le liquidateur pour désintéresser les créanciers selon l'ordre de priorité légal. Possibilité de cession partielle ou totale de l'entreprise",
        },
        {
          label: "Clôture de la procédure",
          text: "Clôture pour insuffisance d'actifs ou après répartition du produit de la vente. Radiation de l'entreprise du registre du commerce",
        },
      ],
      icon: XCircle,
    },
    {
      title: "Les sanctions du dirigeant",
      items: [
        {
          label: "Responsabilité pour insuffisance d'actifs",
          text: "Sanction pécuniaire prononcée en liquidation judiciaire contre les dirigeants de droit ou de fait pour faute de gestion ayant contribué à l'insuffisance d'actif (simple négligence exclue), dans la limite du montant de cette insuffisance",
        },
        {
          label: "Faillite personnelle",
          text: "Sanction professionnelle d'une durée maximale de 15 ans interdisant de diriger toute entreprise, prononcée dans des cas légalement énumérés (absence de comptabilité, obstacle à la procédure, poursuite abusive d'exploitation déficitaire), avec reprise possible des poursuites des créanciers malgré la clôture",
        },
        {
          label: "Interdiction de gérer",
          text: "Alternative ou sanction autonome à la faillite personnelle, modulable par activité ou entreprise spécifique, prononcée notamment en cas d'omission de déclaration de cessation des paiements dans les 45 jours",
        },
        {
          label: "Banqueroute",
          text: "Sanction pénale prononcée par le tribunal correctionnel (5 ans d'emprisonnement et 75 000 € d'amende), distincte des sanctions civiles et professionnelles prononcées par le tribunal commercial",
        },
      ],
      icon: AlertTriangle,
    },
  ];

  const tiles = [
    {
      title: "Consultez notre guide:\nEntreprises en difficulté",
      icon: BookOpen,
      content:
        "Téléchargez notre guide complet sur la liquidation judiciaire pour comprendre le déroulement de la procédure, les conséquences pour l'entreprise et le dirigeant, et les moyens de défense disponibles.",
    },
    {
      title: "Découvrez notre offre de défense du dirigeant",
      icon: Shield,
      content:
        "ADWIZ vous accompagne dans la défense de vos intérêts en cas de liquidation judiciaire : assistance lors des audiences, défense contre les actions en responsabilité, et conseil pour envisager le rebond.",
    },
    {
      title: "Diagnostic flash 25 min",
      icon: Calendar,
      content:
        "Bénéficiez d'un premier rendez-vous de 25 minutes pour faire le point sur votre situation et identifier les actions prioritaires. Cet échange confidentiel et sans engagement vous permet de clarifier vos options.",
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: "Un soutien psychologique face aux difficultés",
      description:
        "La liquidation judiciaire est une épreuve difficile. Nous vous accompagnons pour traverser cette période et vous aidons à envisager sereinement le rebond",
    },
    {
      icon: Lightbulb,
      title: "Un conseil pour défendre vos intérêts",
      description:
        "Nous défendons vos intérêts face au liquidateur judiciaire et aux créanciers, et vous conseillons pour éviter les sanctions personnelles",
    },
    {
      icon: Award,
      title: "Une expertise en procédures collectives",
      description:
        "Nous maîtrisons les procédures collectives et les actions en responsabilité du dirigeant. Nous sécurisons votre défense et optimisons vos chances de rebond",
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
        <div className="max-w-7xl justify-center flex flex-col mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest text-center"
            >
              Avocat liquidation judiciaire
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0] text-center"
            >
              Mettre fin à l'activité de l'entreprise:
              <br />
              La liquidation judiciaire
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto space-y-4 leading-relaxed text-left"
            >
              <p>
                <strong className="font-semibold italic text-white">La liquidation judiciaire</strong> est une procédure destinée à mettre fin à l'activité d'une entreprise en cessation des paiements dont le redressement est manifestement impossible.
              </p>
              <p>
                Elle entraîne la <strong className="font-semibold italic text-white">vente des actifs</strong> de l'entreprise pour désintéresser les créanciers et peut <strong className="font-semibold italic text-white">exposer le dirigeant à des sanctions personnelles</strong> en cas d'insuffisance d'actifs ou de faute de gestion.
              </p>
              <p>
                Se faire accompagner par un avocat spécialisé permet de défendre ses intérêts, d'éviter les sanctions et d'envisager sereinement le rebond.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300 font-semibold"
              >
                Visio gratuite (25 min)
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-gray-300 text-center"
            >
              Découvrez notre accompagnement
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-center"
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
                className="flex flex-col items-center cursor-pointer group"
              >
                <ChevronDown className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0]">
              Comment se déroule une liquidation judiciaire ?
            </h2>
          </motion.div>

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
        </div>
      </section>

      {/* Procedures Section - Accordion */}
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
              Tout savoir sur la liquidation judiciaire
            </h2>
          </motion.div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {procedures.map((procedure, index) => (
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
                          <procedure.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {procedure.title}
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
                          {procedure.items.map((item, itemIndex) => (
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
                              className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                              <h4 className="text-accent font-semibold mb-2">
                                {item.label}
                              </h4>
                              <p className="text-gray-300 text-sm">
                                {item.text}
                              </p>
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
        </div>
      </section>

      {/* Clickable Tiles Section */}
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
              Faites-vous accompagner pour défendre vos intérêts !
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiles.map((tile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setSelectedTile(index)}
                  className="w-full group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-accent/30 text-left h-full"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                      <tile.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300 whitespace-pre-line">
                      {tile.title}
                    </h3>
                    <div className="text-accent/80 text-sm">
                      Cliquez pour en savoir plus
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Popup */}
      {selectedTile !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTile(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-primary to-[#0A0D1A] rounded-2xl p-8 max-w-2xl w-full border border-accent/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                {(() => {
                  const Icon = tiles[selectedTile].icon;
                  return <Icon className="w-8 h-8 text-accent" />;
                })()}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {tiles[selectedTile].title}
              </h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {tiles[selectedTile].content}
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-black rounded-full px-6 py-3 hover:bg-accent/90 transition-all duration-300 font-semibold"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setSelectedTile(null)}
                className="px-6 py-3 rounded-full border border-accent/30 text-white hover:bg-white/5 transition-all duration-300"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Why ADWIZ Section */}
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
              Pourquoi se faire accompagner par ADWIZ ?
            </h2>
          </motion.div>

          <div className="relative">
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
                    {/* Left side - Icon */}
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

                  {/* Connecting line */}
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
              Vous faire accompagner est le meilleur moyen d'envisager le rebond
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Prenez rendez-vous avec ADWIZ pour un diagnostic de votre
              situation.
              <br />
              Premier échange confidentiel, sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300 font-semibold"
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
