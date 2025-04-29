'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Nav = ({ isFixed }: { isFixed?: boolean }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollWithDelay = (callback: () => void) => {
        setTimeout(callback, 300);
    };

    return (
        <div
            className="flex flex-col w-full lg:px-3 items-center justify-center transition-all duration-300 ease-in-out"
            style={{
                position: isFixed ? 'fixed' : 'static',
                top: 0,
                backgroundColor: isFixed ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                backdropFilter: isFixed ? 'blur(12px)' : 'none',
                boxShadow: isFixed ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                zIndex: 9999,
            }}
        >

            {/* Pantallas pequeñas */}

            <nav className="flex lg:hidden flex-row w-full justify-between items-center min-h-[70px] bg-white px-3">
                <Image
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert block transition-all duration-500 ease-in-out"
                    loading="lazy"
                    height={100}
                    width={100}
                    alt="Logo"
                />
                <button
                    className={`lg:hidden flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 space-y-1 mr-6 p-3 rounded-sm ${isMobileMenuOpen ? 'rotate-180 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </button>
            </nav>
            <div className={`lg:hidden flex flex-col items-center absolute gap-3 top-[70px] left-0 w-full bg-white p-4 space-y-2 transition-all border-b border-[#DCB3AD] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('start'))}>Home</button>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('about-me'))}>Chi sono</button>
                <Link href="/gallery">Galleria</Link>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('contact'))}>Contatto</button>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('reviews'))}>Reviews</button>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('faq'))}>FAQ</button>
            </div>

            {/* Pantallas grandes */}

            <nav className="hidden lg:flex flex-row w-full xl:w-[80%] min-h-[70px] items-center gap-3 justify-between px-2 lg:px-20 p-1 transition-all duration-300 ease-in-out">
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('start'))}>Home</button>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('about-me'))}>Chi sono</button>
                <Link href="/gallery">Galleria</Link>
                <Image
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert hidden lg:block transition-all duration-500 ease-in-out"
                    loading="lazy"
                    width={200}
                    height={60}
                    alt="Logo"
                />
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('contact'))}>Contatto</button>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('reviews'))}>Reviews</button>
                <button className="cursor-pointer" onClick={() => scrollWithDelay(() => scrollToSection('faq'))}>FAQ</button>
            </nav>
        </div>
    );
};

export const NavGallery = ({ isFixed }: { isFixed?: boolean }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollWithDelay = (callback: () => void) => {
        setTimeout(callback, 300);
    };

    return (
        <div
            className="flex flex-col w-full lg:px-3 items-center justify-center transition-all duration-300 ease-in-out"
            style={{
                position: isFixed ? 'fixed' : 'static',
                top: 0,
                backgroundColor: isFixed ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                backdropFilter: isFixed ? 'blur(12px)' : 'none',
                boxShadow: isFixed ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                zIndex: 9999,
            }}
        >

            {/* Pantallas pequeñas */}

            <nav className="flex lg:hidden flex-row w-full justify-between items-center min-h-[70px] bg-white px-3">
                <Image
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert block transition-all duration-500 ease-in-out"
                    loading="lazy"
                    height={100}
                    width={100}
                    alt="Logo"
                />
                <button
                    className={`lg:hidden flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 space-y-1 mr-6 p-3 rounded-sm ${isMobileMenuOpen ? 'rotate-180 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </button>
            </nav>
            <div className={`lg:hidden flex flex-col items-center absolute gap-3 top-[70px] left-0 w-full bg-white p-4 space-y-2 transition-all border-b border-[#DCB3AD] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('start'))}>Home</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('about-me'))}>Chi sono</Link>
                <Link href="/gallery">Galleria</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('contact'))}>Contatto</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('reviews'))}>Reviews</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('faq'))}>FAQ</Link>
            </div>

            {/* Pantallas grandes */}

            <nav className="hidden lg:flex flex-row w-full xl:w-[80%] min-h-[70px] items-center gap-3 justify-between px-2 lg:px-20 p-1 transition-all duration-300 ease-in-out">
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('start'))}>Home</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('about-me'))}>Chi sono</Link>
                <Link href="/gallery">Galleria</Link>
                <Image
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert hidden lg:block transition-all duration-500 ease-in-out"
                    loading="lazy"
                    width={200}
                    height={60}
                    alt="Logo"
                />
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('contact'))}>Contatto</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('reviews'))}>Reviews</Link>
                <Link href="/" onClick={() => scrollWithDelay(() => scrollToSection('faq'))}>FAQ</Link>
            </nav>
        </div>
    );
};