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
            La méthode S.E.C.R.E.T.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ADWIZ a cumulé les expériences pour élaborer une méthode de travail
            rigoureuse, structurée et orientée résultats, basée sur six
            principes :
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
  );
}
