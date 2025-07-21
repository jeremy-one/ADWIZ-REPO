"use client";

import SecretComponent from "@/components/secret.component";
import { motion } from "framer-motion";
import { Target, TrendingUp, Eye, ArrowRight, FileText } from "lucide-react";

import Image from "next/image";

export default function CabinetPage() {
  const grille = [
    {
      title: "Pragmatique",
      description: "Calibrer les actions en fonction des enjeux",
      icon: FileText,
    },
    {
      title: "Procédurale",
      description: "Identifier et hiérarchiser les problématiques",
      icon: Target,
    },
    {
      title: "Stratégique",
      description: "Orienter les décisions en fonction de leurs conséquences",
      icon: TrendingUp,
    },
    {
      title: "Créative",
      description: "Envisager des scénarios alternatifs et innovants",
      icon: Eye,
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
              Notre Parcours
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              ADWIZ c’est un parcours professionnel durant lequel nous avons
              développées des valeurs et une méthode de travail que nous
              employons pour vous assister dans la réalisation de vos projets et
              la défense de vos intérêts.
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
                  <ul className="list-disc list-inside space-y-8 text-white/80 text-lg leading-relaxed">
                    <li>
                      <span className="font-bold">White & Case LLP</span> :
                      L'exigence des grands cabinets internationaux, la rigueur
                      des processus et la maîtrise technique avancée
                    </li>
                    <li>
                      <span className="font-bold">Delcade</span> : L'innovation
                      et la culture entrepreneuriale appliquées au conseil
                    </li>
                    <li>
                      <span className="font-bold">Dynamis Avocats</span> : Une
                      pratique ancrée dans la réalité des dirigeants, la
                      capacité à prioriser les enjeux et à orienter les
                      décisions
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* <motion.div variants={itemVariants} className="text-center">
              <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                Ce parcours fonde une méthode de travail efficace, structurée,
                et pensée pour accompagner la prise de décision.
              </p>
            </motion.div> */}
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

            <motion.div variants={itemVariants} className="mb-16">
              <p className="text-white/80 text-center mb-8 max-w-4xl mx-auto">
                Les dossiers qui nous sont confiés font l’objet d’une
                implication rigoureuse. Nous trouvons les bons arguments et
                développons un discours clair et percutant pour convaincre les
                juridictions quand nous organisons votre défense. Nous élaborons
                les solutions juridiques qui vous permettront de réaliser vos
                projets avec un maximum de sécurité tout en anticipant vos
                actions pour favoriser votre activité et votre développement.
              </p>
            </motion.div>

            {/* Rôle de l'avocat */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 items-center justify-center flex-col md:flex-row py-24"
            >
              <div className="flex flex-col gap-4 order-2 md:order-1">
                <Image
                  src="/assets/desk-2.jpg"
                  alt="ADWIZ Logo"
                  className="rounded-2xl object-cover w-96 h-96"
                  width={500}
                  height={210}
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-white mb-8 ">
                  Le rôle de l'avocat dans le dossier
                </h3>
                <div className="max-w-4xl mx-auto">
                  <p className="text-white/80 mb-6">
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
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
                Chaque dossier est analysé à travers 4 dimensions :
              </h2>
            </motion.div>

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

            {/* Mise en œuvre des actions */}
            <motion.div
              variants={itemVariants}
              className=" py-24 flex gap-8 items-center justify-center flex-col md:flex-row"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white mb-8 ">
                  La mise en œuvre des actions
                </h3>
                <div className="max-w-4xl mx-auto">
                  <p className="text-white/80 mb-6">
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
              </div>

              <div className="flex flex-col gap-4">
                <Image
                  src="/assets/desk-1.jpg"
                  alt="ADWIZ Logo"
                  className="rounded-2xl object-cover w-96 h-96"
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>
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
              <motion.a
                href="https://app.lemcal.com/@fdw"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-accent text-primary px-4 py-2 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                Consultation gratuite (25 minutes)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
