"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Mission() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                    {/* Carte */}
                    <Card className="w-full lg:w-2/5 border border-gray-200 shadow-sm rounded-xl">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl font-bold text-gray-800">
                                Notre mission
                            </CardTitle>
                            <CardDescription className="text-gray-500">
                                Notre raison d'être et notre engagement
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                "Rendre ce que nous avons reçu gratuitement. Partager, connecter et 
                                construire ensemble une communauté bienveillante où chacun trouve 
                                sa place et peut s'épanouir."
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <p className="text-blue-700 text-sm">
                                    <span className="font-semibold">Notre vision :</span> Créer un réseau 
                                    solidaire où chaque personne peut contribuer selon ses moyens 
                                    et recevoir selon ses besoins.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Image */}
                    <div className="w-full lg:w-2/5">
                        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                            <Image
                                src="/assets/images/accueil/mission.jpeg"
                                alt="Notre mission - WeConnect"
                                fill
                                className="object-cover"
                            />
                            {/* Légère overlay pour améliorer le contraste */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}