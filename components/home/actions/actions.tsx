"use client";

import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaHeart, 
  FaHandsHelping, 
  FaLightbulb,
  FaArrowRight,
} from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Actions() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const actions = [
    {
      title: "Ateliers de Formation",
      description: "Des sessions de formation pour développer les compétences des membres de notre communauté",
      image: "/assets/images/accueil/action1.jpeg",
      icon: <FaLightbulb className="text-amber-500" />,
      stats: "250+ participants"
    },
    {
      title: "Événements Caritatifs",
      description: "Des actions solidaires pour soutenir les plus démunis dans notre région",
      image: "/assets/images/accueil/action2.jpeg",
      icon: <FaHeart className="text-amber-500" />,
      stats: "12 événements annuels"
    },
    {
      title: "Rencontres Communautaires",
      description: "Des moments conviviaux pour renforcer les liens entre les membres",
      image: "/assets/images/accueil/action3.jpeg",
      icon: <FaUsers className="text-amber-500" />,
      stats: "500+ membres actifs"
    },
    {
      title: "Programmes Éducatifs",
      description: "Initiation aux nouvelles technologies pour les jeunes de la communauté",
      image: "/assets/images/accueil/action4.jpeg",
      icon: <FaHandsHelping className="text-amber-500" />,
      stats: "15 programmes lancés"
    },
    {
      title: "Projets Environnementaux",
      description: "Actions de nettoyage et sensibilisation à la protection de l'environnement",
      image: "/assets/images/accueil/action5.jpeg",
      icon: <FaHandsHelping className="text-amber-500" />,
      stats: "8 tonnes de déchets collectés"
    },
    {
      title: "Séminaires Annuels",
      description: "Retraites et séminaires pour planifier l'avenir de notre communauté",
      image: "/assets/images/accueil/action6.jpeg",
      icon: <FaCalendarAlt className="text-amber-500" />,
      stats: "6 éditions réussies"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Actions et Événements Réalisés
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Découvrez l'impact de notre communauté au travers des actions et événements que nous organisons
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12 -mt-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            { number: "50+", label: "Événements" },
            { number: "1200+", label: "Participants" },
            { number: "15", label: "Partenaires" },
            { number: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Actions Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {actions.map((action, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden group h-full border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{backgroundImage: `url(${action.image})`}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex items-center mb-2">
                        <span className="mr-2">{action.icon}</span>
                        <span className="text-sm font-semibold">{action.stats}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 border-2 border-blue-600 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                    {action.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-blue-800">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <button className="flex items-center text-blue-600 font-semibold group-hover:text-amber-500 transition-colors">
                    Voir plus <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
            Participez à nos prochains événements et contribuez à faire la différence
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir le calendrier
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Devenir membre
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}