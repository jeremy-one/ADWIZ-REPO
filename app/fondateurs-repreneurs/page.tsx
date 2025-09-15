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
  RefreshCcw,
  Euro,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Dirigeants() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      title: "Créer et organiser mon entreprise",
      items: [
        "Choix de la forme sociale et rédaction des statuts",
        "Pacte d’associés, répartition du capital, gouvernance",
        "Sécurisation des relations fondateurs / associés / financeurs",
        "Protection de la marque, du savoir-faire, des données",
        "Accompagnement juridique récurrent (abonnement)",
      ],
      icon: FileText,
    },
    {
      title: "Reprendre une entreprise",
      items: [
        "Analyse stratégique et juridique de la cible",
        "Négociations et audit juridique (statuts, AG, contrats, contentieux...)",
        "Structuration de l’opération : holding, augmentation de capital, cession d’actifs et titres",
        "Rédaction des actes",
        "Coordination avec experts-comptables, notaires, partenaires financiers",
      ],
      icon: RefreshCcw,
    },
    {
      title: "Investir dans une entreprise",
      items: [
        "Analyse stratégique et juridique de la cible",
        "Négociations et audit juridique (statuts, AG, contrats, contentieux...)",
        "Structuration de l’opération : holding, augmentation de capital, cession d’actifs et titres",
        "Rédaction des actes",
        "Rédaction du pacte et des garanties",
        "Coordination avec experts-comptables, notaires, partenaires financiers",
      ],
      icon: Euro,
    },
  ];

  const situations = [
    {
      title: "Je crée mon entreprise",
      description:
        "Préparez votre transmission avec rigueur, en gardant la main sur le tempo et les conditions.",
      icon: MessageCircle,
    },
    {
      title: "Je reprends une entreprise",
      description:
        "Accédez à un accompagnement clair, sans angles morts, adapté aux contraintes de chaque opération.",
      icon: Scale,
    },
    {
      title: "J'investis dans une entreprise",
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
              ADWIZ vous accompagne pour créer, reprendre ou investir dans une entreprise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            >
              Créer, reprendre ou investir dans une entreprise est une prise de
              risque qui doit être mesurée et maîtrisée.
              <br />
              <br />
              ADWIZ est votre partenaire pour valider vos intuitions, sécuriser
              vos choix et les transformer en actions concrètes.
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center py-24 px-4 md:px-24"
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Pourquoi se faire accompagner par ADWIZ?
          </h2>
          <p className="text-white/70 text-lg  mx-auto">
            Un avocat en droit des affaires ne se limite pas à rédiger des statuts ou un contrat de cession. C'est un partenaire business.
            <br />
            <br />
            En collaborant avec ADWIZ, vous accédez à une expertise juridique
            alignée sur vos enjeux opérationnels et stratégiques.
            <br />
            <br />
            Nous intervenons à chaque phase pour :
          </p>
          <ul className="list-disc list-inside text-white/70 text-lg">
            <li>Évaluer la pertinence de la création ou de la transaction</li>
            <li>
              Valider l'opportunité économique et concurrentielle de votre projet
            </li>
            <li>Choisir un statut adapté à votre profil et à vos ambitions</li>
            <li>Rédiger la documentation juridique</li>
            <li>Sécuriser vos engagements : bail, partenaires, fournisseurs</li>
            <li>
              Organiser la gouvernance et vos relations d'associés
            </li>
          </ul>
          <p className="text-white/70 text-lg  mx-auto font-semibold">
            Nous sécurisons juridiquement votre projet pour en faire une
            entreprise solide et durable.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <Image
            src="/assets/desk.jpeg"
            alt="Fondateurs et repreneurs"
            width={500}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
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
              Notre offre pour accompagner le développement de votre entreprise
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
                        {/* <p className="text-sm text-gray-400 mt-1">
                          Phase {index + 1} de l'accompagnement
                        </p> */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        className="py-24 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center from-[#0A0D1A] to-primary text-white relative overflow-hidden mx-auto md:px-24"
      >
        <div className="flex flex-col gap-8 w-full">
          <Image
            src="/assets/desk-3.jpg"
            alt="Fondateurs et repreneurs"
            width={500}
            height={420}
            className="rounded-2xl object-cover w-full h-[420px]"
          />
        </div>

        <div className="flex flex-col gap-8 w-full">
          <p className="text-sm text-accent font-medium uppercase tracking-widest">
            Cas client
          </p>
          <h2 className="text-4xl md:text-5xl font-bold py-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Repenser une reprise trop risquée
          </h2>
          <p className="text-white/70 text-lg  mx-auto">
            Un dirigeant de PME est sollicité pour reprendre un concurrent en
            redressement judiciaire.
            <br />
            <br />
            L’offre est tentante, mais implique la reprise d’un passif quatre
            fois supérieur à la valeur de l’entreprise.
            <br />
            <br />
            La requête a déjà été déposée auprès du juge-commissaire quand nous
            sommes appelés.
            <br />
            <br />
            Notre rôle : réévaluer l’opportunité et repositionner l’opération.
            <br />
            <br />
            Nous réalisons une analyse complète de la situation juridique,
            financière et procédurale, identifions les points de blocage et
            proposons deux options :
            <br />
            <br />
            Renégociation de l’offre avec réduction du passif
            <br />
            <br />
            Limitation de la reprise aux actifs stratégiques Nous pilotons la
            négociation, structurons l’opération (création de holding, pacte,
            garanties), et accompagnons l’intégration post-reprise.
          </p>

          <p className="text-white text-lg mx-auto font-semibold">
            Résultat : une reprise juridiquement sécurisée, financièrement
            optimisée et structurée sur mesure.
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
              Votre temps est précieux. Vos décisions engagent. Appuyez-vous sur
              votre avocat en droit des affaires.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              ADWIZ vous propose un accompagnement juridique sur mesure pour développer votre activité et investir dans vos projets.
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
