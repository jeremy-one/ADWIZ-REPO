"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setIsSubmitted(true);

      // Reset après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: "",
          email: "",
          entreprise: "",
          telephone: "",
          sujet: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@adwiz.law",
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 6 33 54 03 20",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "12 PLACE DE LA BOURSE",
      description: "33000, BORDEAUX",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven 9h-18h",
      description: "Sam 9h-12h",
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
      {/* Effet de fond organique */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 px-4 py-32">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d'experts en droit des affaires est à votre
              disposition pour vous accompagner dans vos projets et répondre à
              vos questions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Informations de contact */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:sticky lg:top-24 lg:h-fit space-y-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-6"
              >
                Informations de contact
              </motion.h2>
              {/* Texte unifié */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Informations de contact unifiées */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-xl">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white/90 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-white/60 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA en bas */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Parlons de votre projet
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Que vous soyez dirigeant, fondateur ou direction juridique,
                    nous mettons notre expertise à votre service pour faire du
                    droit des affaires un levier de croissance.
                  </p>
                </div>

                <motion.a
                  href="https://app.lemcal.com/@fdw"
                  target="_blank"
                  className="group inline-flex w-fit items-center gap-3 bg-accent text-primary px-4 py-2 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                >
                  Consultation gratuite
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Colonne droite - Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/20 "
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-accent/20 rounded-full mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-white/80">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="nom"
                        className="block text-sm font-semibold text-white/90"
                      >
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent/60" />
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-white/90"
                      >
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent/60" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="entreprise"
                        className="block text-sm font-semibold text-white/90"
                      >
                        Entreprise
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent/60" />
                        <input
                          type="text"
                          id="entreprise"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-semibold text-white/90"
                      >
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent/60" />
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="sujet"
                      className="block text-sm font-semibold text-white/90"
                    >
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-xl text-white focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                    >
                      <option value="" className="bg-primary text-white">
                        Sélectionnez un sujet
                      </option>
                      <option
                        value="consultation"
                        className="bg-primary text-white"
                      >
                        Consultation gratuite
                      </option>
                      <option
                        value="droit-societes"
                        className="bg-primary text-white"
                      >
                        Droit des sociétés
                      </option>
                      <option
                        value="cession-acquisition"
                        className="bg-primary text-white"
                      >
                        Cessions & Acquisitions
                      </option>
                      <option
                        value="contentieux"
                        className="bg-primary text-white"
                      >
                        Contentieux & Recouvrement
                      </option>
                      <option
                        value="entreprises-difficulte"
                        className="bg-primary text-white"
                      >
                        Entreprises en difficulté
                      </option>
                      <option value="autre" className="bg-primary text-white">
                        Autre
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white/90"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-accent/60" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet, vos besoins ou votre demande..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-primary cursor-pointer py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
