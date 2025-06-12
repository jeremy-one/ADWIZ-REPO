"use client";

import SecretComponent from "@/components/secret.component";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Target,
  Users,
  Shield,
  Zap,
  Heart,
  Ear,
  Share2,
  CheckCircle,
  TrendingUp,
  Eye,
  Clock,
  ArrowRight,
  Star,
  Award,
  Handshake,
  MessageCircle,
  FileText,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function CabinetPage() {
  const [activeValue, setActiveValue] = useState(0);

  const parcours = [
    {
      institution: "White & Case LLP",
      description:
        "L'exigence des grands cabinets internationaux, la rigueur des processus et la maîtrise technique avancée",
      icon: Building2,
    },
    {
      institution: "Delcade",
      description:
        "L'innovation et la culture entrepreneuriale appliquées au conseil",
      icon: Zap,
    },
    {
      institution: "Dynamis Avocats",
      description:
        "Une pratique ancrée dans la réalité des dirigeants, la capacité à prioriser les enjeux et à orienter les décisions",
      icon: Target,
    },
  ];

  const valeurs = [
    {
      letter: "S",
      title: "SÉCURITÉ",
      description: "Anticiper les risques, structurer les décisions",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
    },
    {
      letter: "E",
      title: "EXIGENCE",
      description: "Analyser, approfondir, améliorer",
      icon: Award,
      color: "from-purple-500 to-purple-600",
    },
    {
      letter: "C",
      title: "CONFIANCE",
      description: "Créer un cadre clair pour des relations durables",
      icon: Handshake,
      color: "from-green-500 to-green-600",
    },
    {
      letter: "R",
      title: "RÉACTIVITÉ",
      description: "Agir vite, sans jamais improviser",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      letter: "E",
      title: "ÉCOUTE",
      description: "Comprendre avant de conseiller",
      icon: Ear,
      color: "from-pink-500 to-pink-600",
    },
    {
      letter: "T",
      title: "TRANSMISSION",
      description: "Partager pour renforcer la décision",
      icon: Share2,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const grille = [
    {
      title: "Procédurale",
      description: "Formaliser les problématiques et respecter les normes",
      icon: FileText,
    },
    {
      title: "Stratégique",
      description: "Anticiper les réactions et ajuster la trajectoire",
      icon: Target,
    },
    {
      title: "Concurrentielle",
      description: "Défendre avec précision, activer les bons leviers",
      icon: TrendingUp,
    },
    {
      title: "Contra-factuelle",
      description:
        "Simuler des scénarios alternatifs pour identifier les zones de rupture",
      icon: Eye,
    },
  ];

  const approche = [
    {
      title: "Travail en équipe",
      description: "Collaboration étroite pour des solutions optimales",
      icon: Users,
    },
    {
      title: "Méthodes et outils",
      description: "Processus structurés et outils innovants",
      icon: Target,
    },
    {
      title: "Expertise juridique de référence",
      description: "Maîtrise technique avancée et veille permanente",
      icon: Award,
    },
    {
      title: "Réponse sous 48h",
      description: "Réactivité garantie pour vos urgences",
      icon: Clock,
    },
    {
      title: "Rendez-vous sous une semaine",
      description: "Disponibilité rapide pour vos besoins",
      icon: MessageCircle,
    },
    {
      title: "Cabinet centré sur l'humain",
      description: "Relations privilégiées et accompagnement personnalisé",
      icon: Heart,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D1A] to-primary text-white">
      {/* Effets de fond organiques */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 px-4 py-32">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
              Le Cabinet
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre parcours, nos valeurs et notre méthode de travail
              unique pour faire du droit des affaires un levier de croissance.
            </p>
          </motion.div>

          {/* Section Parcours */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24 flex gap-24 flex-col items-center justify-center"
          >
            <div className="flex gap-12 h-full">
              <motion.div
                variants={itemVariants}
                className="text-center  flex flex-col h-full"
              >
                <Image
                  src="/assets/fdw.jpeg"
                  alt="ADWIZ Logo"
                  className="rounded-2xl object-cover "
                  width={500}
                  height={210}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className=" flex flex-col gap-4 justify-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
                  Notre Parcours
                </h2>
                <div className="max-w-4xl mx-auto space-y-6 text-white/80 text-lg leading-relaxed">
                  <p>
                    Notre parcours s'inscrit dans un enchaînement d'expériences
                    complémentaires.
                  </p>
                  <p>
                    Une double formation à l'Université et à HEC Paris a posé
                    les bases d'une approche du droit conçue comme un levier au
                    service des enjeux opérationnels et économiques.
                  </p>
                  <p>
                    Trois cabinets au profil différent ont forgé une méthode
                    complète, alliant rigueur, agilité et compréhension
                    stratégique :
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {parcours.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-500"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-accent/20 rounded-2xl mb-6 mx-auto">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {item.institution}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                Ce parcours fonde une méthode de travail efficace, structurée,
                et pensée pour accompagner la prise de décision.
              </p>
            </motion.div>
          </motion.section>

          {/* Section Valeurs S.E.C.R.E.T */}
          <SecretComponent />

          {/* Section Méthode de travail */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
                Notre Méthode de Travail
              </h2>
            </motion.div>

            {/* Grille d'analyse */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                La grille d'analyse établie pour chaque dossier
              </h3>
              <p className="text-white/80 text-center mb-8">
                Chaque dossier est analysé à travers 4 dimensions :
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {grille.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-accent/20 text-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-xl mb-4 mx-auto">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mise en œuvre des actions */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                La mise en œuvre des actions
              </h3>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto">
                <p className="text-white/80 mb-6 text-center">
                  L'exécution des actions repose sur la simplicité et
                  l'efficacité :
                </p>
                <div className="space-y-4">
                  {[
                    "Écouter les besoins, hiérarchiser les priorités",
                    "Analyser rapidement, conclure clairement",
                    "Tester, ajuster, avancer",
                    "Améliorer chaque étape pour accélérer la décision et sécuriser le résultat",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Rôle de l'avocat */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Le rôle de l'avocat dans le dossier
              </h3>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto">
                <p className="text-white/80 mb-6 text-center">
                  Une posture méthodique guide chaque intervention :
                </p>
                <div className="space-y-4">
                  {[
                    "Décrypter les dynamiques humaines en présence",
                    "Identifier les données clés pour dégager une ligne d'action",
                    "Mobiliser la technique juridique au service d'un objectif",
                    "Avancer vite, sans perdre la maîtrise des enjeux",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Section Notre Approche */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
                Notre Approche
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approche.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-xl mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section Parcours Satisfaction Client */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
                Notre Parcours Satisfaction Client
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Écoute active", icon: Ear },
                { title: "Prestations juridiques lisibles", icon: FileText },
                { title: "Disponibilité et efficacité", icon: Clock },
                { title: "Honoraires transparents", icon: DollarSign },
                { title: "Coopération et partage", icon: Share2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-accent/20 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-xl mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Final */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-accent/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à découvrir notre méthode ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Contactez-nous pour une consultation gratuite et découvrez
                comment nous pouvons faire du droit un levier de croissance pour
                votre entreprise.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                Consultation gratuite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
