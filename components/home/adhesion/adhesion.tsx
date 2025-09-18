import { Card } from "@/components/ui/card";
import { Users, Target, Network, HeartHandshake, ArrowRight } from "lucide-react";

export default function Adhesion() {
    const adhesionReason = [
        {
            title: "Une vie communautaire épanouissante",
            description: "Rejoignez une communauté bienveillante où chacun trouve sa place et peut s'épanouir pleinement",
            icon: <Users className="h-8 w-8" />,
            color: "bg-blue-500"
        },
        {
            title: "Des opportunités à saisir",
            description: "Accédez à des opportunités uniques de développement personnel et professionnel",
            icon: <Target className="h-8 w-8" />,
            color: "bg-green-500"
        },
        {
            title: "Un réseautage et des relations durables",
            description: "Construisez des relations authentiques et un réseau solide pour votre épanouissement",
            icon: <Network className="h-8 w-8" />,
            color: "bg-purple-500"
        },
        {
            title: "Un engagement collectif",
            description: "Participez à des projets collectifs qui créent un impact positif dans la communauté",
            icon: <HeartHandshake className="h-8 w-8" />,
            color: "bg-orange-500"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Pourquoi nous rejoindre ?
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez les nombreuses raisons de rejoindre notre communauté et de participer à cette aventure collective
                    </p>
                </div>

                {/* Grille des raisons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {adhesionReason.map((reason, index) => (
                        <Card 
                            key={index} 
                            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0"
                        >
                            <div className="p-6 flex flex-col h-full">
                                {/* Icône */}
                                <div className={`${reason.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {reason.icon}
                                </div>
                                
                                {/* Contenu */}
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    {reason.description}
                                </p>
                                
                                {/* Indicateur */}
                                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-sm">En savoir plus</span>
                                    <ArrowRight className="h-4 w-4 ml-1" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Call-to-action */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center">
                        Rejoindre notre communauté
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </button>
                    
                    <p className="text-gray-500 text-sm mt-4">
                        Déjà plus de 500 membres nous ont rejoint
                    </p>
                </div>
            </div>
        </section>
    );
}