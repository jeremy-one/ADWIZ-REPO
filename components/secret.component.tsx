import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Handshake,
  Clock,
  Ear,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function SecretComponent() {
  const [selectedPrinciple, setSelectedPrinciple] = useState(0);
  const principles = [
    {
      icon: Shield,
      title: "Sécurité",
      description: "Anticiper les risques, structurer les décisions",
      details: [
        "Définition des besoins",
        "Analyse juridique rigoureuse et approfondie",
        "Organisation de processus de travail",
        "Méthodologie appliquée à la production",
      ],
    },
    {
      icon: Target,
      title: "Exigence",
      description: "Analyser, approfondir, améliorer",
      details: [
        "Actions orientées résultat",
        "Conscience professionnelle",
        "Curiosité intellectuelle",
        "Formation continue",
      ],
    },
    {
      icon: Handshake,
      title: "Confiance",
      description: "Créer un cadre clair pour des relations durables ",
      details: [
        "Echanges transparents et réguliers",
        "Absence de jugement",
        "Confidentialité absolue",
        "Partenariat sur le long terme",
      ],
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Agir vite, sans jamais improviser",
      details: [
        "Disponibilité constante",
        "Flexibilité face aux urgences",
        "Rapidité d’exécution",
        "Capacité d’anticipation",
      ],
    },
    {
      icon: Ear,
      title: "Écoute",
      description: "Comprendre vos enjeux et ensuite conseiller",
      details: [
        "Ecoute active",
        "Analyse de vos besoins",
        "Solutions personnalisées",
        "Évaluation de votre satisfaction",
      ],
    },
    {
      icon: BookOpen,
      title: "Transmission",
      description: "Partager pour renforcer la décision",
      details: [
        "Livrables clairs et utiles",
        "Travail collaboratif",
        "Formation et accompagnement",
        "Capitalisation des expériences",
      ],
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 text-white relative overflow-hidden"
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
            Nos valeurs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ADWIZ a cumulé les expériences au cours desquelles nos valeurs se
            sont développées. Elles reposent sur six principes que nous avons
            appelés :
            <br />
            La méthode S.E.C.R.E.T.
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

        {/* Section CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {/* CTA Contact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col border border-white/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  Une question ?
                </h3>
              </div>
              <p className="text-gray-300 mb-6 flex-grow">
                Vous avez une question sur nos services ou souhaitez des informations complémentaires ? Contactez-nous.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors duration-300 group/link"
              >
                Nous contacter
                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* CTA Lemcal */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col border border-white/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  Un échange ?
                </h3>
              </div>
              <p className="text-gray-300 mb-6 flex-grow">
                Réservez directement un créneau pour échanger sur votre projet lors d'une visio gratuite de 25 minutes.
              </p>
              <a
                href="https://app.lemcal.com/@fdw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors duration-300 group/link"
              >
                Prendre rendez-vous
                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
