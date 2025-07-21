"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  FileText,
  Handshake,
  Users,
  CheckCircle,
  ChevronDown,
  Shield,
  Target,
  Clock,
  ChartNoAxesCombined,
  Scale,
  MessageCircle,
  Building2,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Dirigeants() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      title: "Créer une relation d’associés claire et équilibrée dès le départ",
      items: [
        "Questionnaire pour identifier vos enjeux et vos attentes",
        "Rendez-vous de restitution pour valider vos décisions",
        "Rédaction d’un pacte d’associés sur mesure",
      ],
      icon: FileText,
    },
    {
      title: " Revoir ou ajuster une relation d’associés existante",
      items: [
        "Audit de pactes d’associés ou statuts existants",
        "Mise à jour des clauses en cas d’évolution du projet",
        "Accompagnement en cas d’arrivée d’un nouvel associé",
      ],
      icon: ChartNoAxesCombined,
    },
    {
      title: "Gérer les conflits entre associés",
      items: [
        "Analyse stratégique et juridique de la situation",
        "Recherches de solutions amiables : négociation, médiation",
        "Encadrement juridique d’une séparation : cession, retrait, arbitrage",
        "Contentieux si nécessaire, en limitant les impacts sur la société",
      ],
      icon: Handshake,
    },
  ];

  const situations = [
    {
      title: "Je m’associe",
      description:
        "Préparez votre transmission avec rigueur, en gardant la main sur le tempo et les conditions.",
      icon: MessageCircle,
    },
    {
      title: "Je suis associé",
      description:
        "Accédez à un accompagnement clair, sans angles morts, adapté aux contraintes de chaque opération.",
      icon: Scale,
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

  const timelineSteps = [
    {
      step: 1,
      title: "Préparer le cadre juridique dès la phase de réflexion",
      description:
        "Structuration initiale de l'opération et identification des enjeux juridiques clés pour sécuriser votre démarche dès le départ.",
      position: "left",
    },
    {
      step: 2,
      title: "Structurer les négociations, sans zones d'ombre",
      description:
        "Encadrement des discussions et mise en place d'un processus de négociation transparent et sécurisé pour toutes les parties.",
      position: "right",
    },
    {
      step: 3,
      title: "Rédiger l'ensemble des documents clés",
      description:
        "Conception et rédaction de tous les actes juridiques nécessaires à la réalisation de votre opération dans les meilleures conditions.",
      position: "left",
    },
    {
      step: 4,
      title: "Coordonner le processus jusqu'au closing final",
      description:
        "Pilotage de l'ensemble des étapes jusqu'à la finalisation de l'opération, en coordination avec tous les intervenants.",
      position: "right",
    },
    {
      step: 5,
      title: "Intégrer les contraintes fiscales, sociales et de gouvernance",
      description:
        "Prise en compte de l'ensemble des aspects réglementaires pour une opération complète et sécurisée juridiquement.",
      position: "left",
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
              ADWIZ, votre avocat pour rédiger vos pactes d’associés et régler
              vos conflits d’associés
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            >
              S’associer, c’est partager une vision, bâtir un projet commun en
              s’appuyant sur des complémentarités...mais aussi un engagement et
              des responsabilités.
              <br />
              <br />
              Quand les intentions ne sont pas clairement formalisées, le risque
              de désaccord peut conduire au conflit : divergences stratégiques,
              inégalités d’investissement, blocages décisionnels…
              <br />
              <br />
              Il est nécessaire de sécuriser vos relations entre associés pour
              qu’elles soient un levier – et non un frein – à la réussite de
              votre entreprise.
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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex gap-8 items-center justify-center flex-col md:flex-row py-24 px-24"
      >
        <div className="flex flex-col gap-8 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Pourquoi se faire accompagner par ADWIZ pour rédiger son pacte
            d’associés ?
          </h2>
          <p className="text-white/70 text-lg  mx-auto">
            Un pacte d’associés est un outil de gouvernance et d’organisation
            des relations qui permet de créer un cadre de confiance.
            <br />
            <br />
            Vous anticipez les tensions, protégez les intérêts de chacun et
            sécurisez l’avenir de votre société.
            <br />
            <br />
            Que faut-il prévoir dans son pacte d’associés ?
          </p>
          <ul className="list-disc list-inside text-normal">
            <li>Rédiger ou revoir un pacte d’associés adapté à vos réalités</li>
            <li>
              Anticiper les situations sensibles : départ, décès, blocage, vente
              de parts…
            </li>
            <li>
              Organiser la prise de décision : répartition du pouvoir, quorum,
              veto
            </li>
            <li>
              Protéger les associés minoritaires ou majoritaires selon les cas
            </li>
            <li>
              Cadrer les engagements financiers, opérationnels et stratégiques
              de chacun
            </li>
            <li>Gérer les entrées et sorties au capital</li>
            <li>
              Prévenir ou résoudre un conflit entre associés, sans forcément
              passer par le tribunal
            </li>
          </ul>
          <p className="text-white/70 text-lg  mx-auto font-semibold">
            Notre approche allie stratégie, rigueur juridique et gestion
            émotionnelle pour transformer la relation d’associés en véritable
            atout de gouvernance.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-1/2"></div>
        {/* <motion.div
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
        </motion.div> */}
      </motion.section>

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
              Notre accompagnement pour anticiper, cadrer ou résoudre les enjeux
              entre associés
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
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-black text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Phase {index + 1} de l'accompagnement
                        </p>
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

      {/* Section Situation */}
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
              Quelle est votre situation ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {situations.map((profile, index) => (
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
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <profile.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Title with gradient text */}
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent text-center">
                    {profile.title}
                  </h3>

                  {/* Description */}
                  {/* <p className="text-gray-300 flex-grow">
                    {profile.description}
                  </p> */}

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-gradient-to-b flex gap-8 items-center from-[#0A0D1A] to-primary text-white relative overflow-hidden mx-auto"
      >
        <div className="flex flex-col gap-8 w-1/2"></div>

        <div className="flex flex-col gap-8 w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Sortir d’un blocage décisionnel entre associés pour pérenniser
            l’activité de l’entreprise
          </h2>
          <p className="text-white/70 text-lg  mx-auto">
            Deux associés, cofondateurs d’une start-up tech, sont en désaccord
            profond sur l’orientation du produit et les dépenses marketing.
            <br />
            <br />
            L’un détient 60 %, l’autre 40 %. Aucun pacte d’associés n’a été
            signé.
            <br />
            <br />
            Nous avons rétabli un cadre de fonctionnement pour sécuriser
            l’activité à l’avenir:
          </p>
          <ul className="list-disc list-inside !text-normal">
            <li>Diagnostic de la situation juridique et relationnelle</li>
            <li>
              Organisation de réunions pour évaluer les enjeux liés à l’activité
              et les objectifs de chacun
            </li>
            <li>
              Rédaction d’un pacte d’associés encadrant la gouvernance, les
              objectifs stratégiques et les cas de sortie
            </li>
            <li>
              Préparation juridique à une éventuelle cession de parts si le
              désaccord persiste
            </li>
          </ul>

          <p className="text-white text-lg mx-auto font-semibold">
            Résultat : retour à une gouvernance stable et des décisions
            concentrées sur le développement de l’activité.
          </p>
        </div>
        {/* <motion.div
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
        </motion.div> */}
      </motion.section>

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
              Lorsqu’on s’associe, il faut savoir se faire confiance et
              organiser cette confiance. Un pacte d’associés bien rédigé permet
              d’éviter les non-dits, de traverser les désaccords et de rester
              alignés sur l’essentiel : faire avancer votre entreprise.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              ADWIZ vous accompagne pour construire des relations d’associés
              saines, équilibrées et durables et résoudre les crises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black rounded-full px-8 py-4 hover:bg-accent/90 transition-all duration-300"
            >
              Discutons de vos besoins
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
