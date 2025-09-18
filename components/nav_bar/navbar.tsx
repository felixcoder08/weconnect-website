"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "À propos" },
        { href: "/services", label: "Événements" },
        { href: "/portfolio", label: "Actualités" },
        { href: "/contact", label: "Contact" }
    ];

    // Gestion du défilement pour changer l'apparence de la navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center z-10">
                    <div className="w-12 h-12 relative mr-2">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo WeConnect"
                            width={48}
                            height={48}
                            className="object-contain rounded-lg"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-blue-600 ml-2 uppercase">WeConnect</span>
                </Link>

                {/* Liens de navigation - Version desktop */}
                <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-6">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`px-3 py-2 transition-colors duration-300 font-medium relative ${pathname === link.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                                >
                                    {link.label}
                                    {/* Barre indicateur pour le lien actif */}
                                    {pathname === link.href && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-blue-600 rounded-full"></span>
                                    )}
                                </Link>
                                {/* Effet de survol */}
                                <span className="absolute bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bouton d'adhésion à l'extrême droite */}
                <div className="hidden md:flex items-center z-10">
                    <Link href="/adhesion">
                        <Button
                            variant="amber"
                            size="lg"
                            className="px-6 py-2 cursor-pointer transition-all duration-300 font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg rounded-full"
                        >
                            J'adhère
                        </Button>
                    </Link>
                </div>

                {/* Bouton menu mobile */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
                    aria-label="Menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menu mobile */}
            {open && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`py-3 transition-colors duration-300 font-medium border-l-4 pl-4 ${pathname === link.href ? "text-blue-600 border-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 border-transparent"}`}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-200 mt-2">
                            <Link
                                href="/adhesion"
                                className="flex justify-center"
                                onClick={() => setOpen(false)}
                            >
                                <Button
                                    variant="amber"
                                    size="lg"
                                    className="w-full py-3 cursor-pointer transition-all duration-300 font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg rounded-full"
                                >
                                    J'adhère
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}