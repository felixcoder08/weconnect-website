"use client";

import { useState, useEffect } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen w-[calc(100%-100px)] mx-auto mt-20 rounded-lg shadow-lg overflow-hidden">
            {/* Image de fond */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/accueil/wecode_groupe.jpg')" }}
            />
            
            {/* Overlay à gauche avec effet de largeur décroissante */}
            <div className="absolute inset-0 flex">
                <div className={`relative h-full transition-all duration-1000 ease-out ${
                    isVisible ? 'w-full md:w-8/12 lg:w-7/12' : 'w-0'
                }`}>
                    {/* Fond avec dégradé diagonal */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/100 via-blue-800/95 via-blue-800/95 to-transparent" />
                    
                    {/* Contenu principal */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 py-16">
                        <div className={`transform transition-all duration-700 delay-300 ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Qui sommes-nous ?
                            </h1>
                            
                            <div className="w-20 h-1 bg-green-400 my-6"></div>
                            
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                Notre mission
                            </h2>
                            
                            <p className="text-lg md:text-xl text-white mb-8 max-w-md leading-relaxed">
                                Rendre ce que nous avons reçu gratuitement. 
                                Notre engagement est de partager, connecter et construire 
                                ensemble une communauté bienveillante où chacun trouve sa place.
                            </p>
                            
                            <div className="flex space-x-4">
                                <button className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg">
                                    Nous rejoindre
                                </button>
                                <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                                    Nos actions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Élément décoratif pour la transition */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-400 to-green-400 opacity-60" />
        </div>
    );
}