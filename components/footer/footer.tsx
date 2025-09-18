import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Colonne 1: Logo et description */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Nom de la Communauté</h3>
                        <p className="mb-4">
                            Rejoignez notre communauté passionnée et participez aux discussions, événements et projets excitants.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-amber-500 transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-amber-500 transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-amber-500 transition-colors">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2: Liens rapides */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-amber-500">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-amber-500 transition-colors">À propos</Link></li>
                            <li><Link href="/events" className="hover:text-amber-500 transition-colors">Événements</Link></li>
                            <li><Link href="/forum" className="hover:text-amber-500 transition-colors">Forum</Link></li>
                            <li><Link href="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3: Ressources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-amber-500">Ressources</h4>
                        <ul className="space-y-2">
                            <li><Link href="/help" className="hover:text-amber-400 transition-colors">Centre d'aide</Link></li>
                            <li><Link href="/rules" className="hover:text-amber-400 transition-colors">Règles</Link></li>
                            <li><Link href="/privacy" className="hover:text-amber-400 transition-colors">Confidentialité</Link></li>
                            <li><Link href="/terms" className="hover:text-amber-400 transition-colors">Conditions d'utilisation</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Barre de séparation */}
                <div className="border-t border-blue-500 my-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">
                        Copyright © {new Date().getFullYear()} WeConnect. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}