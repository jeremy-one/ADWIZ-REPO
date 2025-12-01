"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Lock,
  Scale,
  Clock,
  CheckCircle,
  Lightbulb,
  Users,
  FileText,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Prevention() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedTile, setSelectedTile] = useState<number | null>(null);

  const timelineSteps = [
    {
      title: "Identifier les signaux de difficulté",
      description:
        "Recul du chiffre d'affaires, absence de rentabilité, arbitrage dans les paiements, tensions avec les partenaires commerciaux…",
      position: "left",
      step: 1,
    },
    {
      title: "Agir et choisir la procédure appropriée",
      description:
        "Consulter ses conseils (expert-comptable, avocat) pour évaluer l'état de solvabilité de l'entreprise et ce qu'il faut négocier",
      position: "right",
      step: 2,
    },
    {
      title: "Préparer le dossier et engager la procédure",
      description:
        "Présenter une requête auprès du Président du Tribunal de commerce",
      position: "left",
      step: 3,
    },
    {
      title: "Négocier et conclure un accord avec les créanciers",
      description:
        "Obtenir des remises de dettes, des échéanciers, de nouveaux marchés…",
      position: "right",
      step: 4,
    },
  ];

  const procedures = [
    {
      title: "Mandat ad hoc",
      items: [
        {
          label: "Condition d'accès",
          text: "Absence d'état de cessation des paiements, la plupart des juridictions refusant d'ouvrir la procédure dans le cas contraire",
        },
        {
          label: "Procédure sur mesure",
          text: "Ouverte à la seule initiative du débiteur, qui peut proposer le mandataire, avec une mission et une durée entièrement libres",
        },
        {
          label: "Préservation des pouvoirs du dirigeant",
          text: "Le mandataire intervient comme médiateur sans dessaisir le chef d'entreprise de la gestion courante",
        },
        {
          label: "Confidentialité renforcée",
          text: "Seuls les créanciers invités aux négociations sont informés, sans obligation d'information du CSE",
        },
      ],
      icon: Shield,
    },
    {
      title: "Conciliation",
      items: [
        {
          label: "Condition d'accès",
          text: "L'entreprise ne doit pas être en cessation des paiements depuis plus de 45 jours",
        },
        {
          label: "Procédure encadrée",
          text: "Durée maximale de 5 mois, avec possibilité d'obtenir des délais de grâce imposés par le juge aux créanciers (créances échues et non échues)",
        },
        {
          label: "Sécurisation par l'accord",
          text: "L'accord amiable peut être constaté (force exécutoire) ou homologué (privilège de new money pour les créanciers et protection contre le report de la date de cessation des paiements)",
        },
        {
          label: "Confidentialité relative",
          text: "Procédure confidentielle par nature, mais l'homologation entraîne la perte de cette confidentialité par la publicité du jugement",
        },
      ],
      icon: Scale,
    },
  ];

  const tiles = [
    {
      title: "Consultez notre guide:\nEntreprises en difficulté",
      icon: BookOpen,
      content:
        "Téléchargez notre guide complet sur les procédures amiables pour comprendre les différentes options qui s'offrent à vous et choisir la solution la plus adaptée à votre situation.",
    },
    {
      title: "Découvrez notre offre prévention",
      icon: Shield,
      content:
        "ADWIZ propose un accompagnement sur mesure en prévention des difficultés : diagnostic de situation, conseil stratégique, négociation avec les créanciers, et suivi de la procédure.",
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
        "Vous ne restez pas seul et vous pouvez concentrer votre énergie sur votre activité",
    },
    {
      icon: Lightbulb,
      title: "Un conseil pour prendre les bonnes décisions au bon moment",
      description:
        "Nous portons un regard objectif sur la situation de votre entreprise et vous orientons sur la procédure adaptée",
    },
    {
      icon: Award,
      title: "Un gage de crédibilité dans les négociations",
      description:
        "Nous défendons les intérêts de votre entreprise et favorisons les échanges dans le cadre des négociations",
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
              Avocat entreprises en difficulté
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] hover:bg-[length:200%_auto] transition-all duration-700 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0] text-center"
            >
              Prévenir les difficultés de son entreprise:
              <br />
              Le mandat ad hoc et la conciliation
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto space-y-4 leading-relaxed text-left"
            >
              <p>
                <strong className="font-semibold italic text-white">Les procédures amiables</strong> offrent un cadre confidentiel et flexible
                pour <strong className="font-semibold italic text-white">négocier avec les créanciers</strong> des solutions sur mesure aux
                difficultés de l'entreprise.
              </p>
              <p>
                <strong className="font-semibold italic text-white">Le mandat ad hoc</strong> est ouvert à la demande du débiteur qui n'est
                pas en état de cessation des paiements. Un tiers indépendant est
                désigné pour négocier un accord sans formalisme particulier.
              </p>
              <p>
                <strong className="font-semibold italic text-white">La conciliation</strong> est ouverte à la demande du
                débiteur qui n'est pas en état de cessation des paiements depuis
                plus de 45 jours. Un conciliateur est désigné pour négocier un
                accord qui peut être homologué par le Tribunal dans un délai
                encadré (cinq mois maximum).
              </p>
              <p>
                D'autres procédures amiables ou organismes tels que
                l'administration provisoire, le règlement amiable agricole, la
                commission des chefs des services financiers (CCSF), la médiation
                du crédit ou le CIRI existent…
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
              Comment faire pour traiter amiablement les difficultés de son
              entreprise ?
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
              Quelle procédure choisir ?
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
              Faites-vous accompagner pour prévenir les difficultés !
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
              Anticiper et vous faire accompagner sont les meilleurs moyens
              d'éviter la crise
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
