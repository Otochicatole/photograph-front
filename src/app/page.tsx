'use client'
import Image from 'next/image';
import {Button} from "@/components/ui/buttons";
import {Nav} from "@/components/layout/nav";
import Presentation from './home/sections/presentation';
import Contact from './home/sections/contact';
import AboutMe from './home/sections/about-me';
import HistoryImages from './home/sections/history-images';
import OfferServices from './home/sections/offer-services';
import Reviews from './home/sections/reviews';
import FAQ from './home/sections/faq';
import FadeInSection from '@/components/common/observer';
import {lazy, Suspense, useCallback, useEffect, useRef, useState} from "react";

const MapPicker = lazy(() => import('./home/sections/map-picker'));
const Footer = lazy(() => import('@/components/layout/footer'));

export default function Home() {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;
            setIsNavFixed(window.scrollY > headerRef.current.offsetHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = useCallback((sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <div className="flex flex-col w-full h-full">
            <header
                id="home"
                ref={headerRef}
                className="flex flex-col bg-[url('/FOTOGRAFIAS/HEADER/Meliyabel-166.jpg')] min-h-screen w-full bg-cover bg-center items-center justify-center relative pb-20 p-3 overflow-hidden"
            >
                <Image
                    className='w-full lg:w-[996px] lg:h-[484px]'
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    loading="lazy"
                    alt="Logo"
                    width={996}
                    height={484}
                />
                <p className="text-white text-2xl font-[OVTreasure] text-center">
                    La tua storia merita di essere raccontata con il sorriso giusto
                </p>
                <div className="flex flex-col w-full items-center p-1 mt-48">
                    <Button onClick={() => scrollToSection('start')}>Benvenuti</Button>
                </div>
            </header>
            <main className="flex flex-col w-full h-full pb-40 overflow-hidden">
                <Suspense fallback={<div className="text-center text-gray-500">Cargando...</div>}>
                    <section id="start" className="flex flex-col pt-[137px] min-h-screen relative">
                        <div className="absolute top-0 flex flex-col w-full mt-3">
                            <Nav isFixed={isNavFixed}/>
                        </div>
                        <FadeInSection><Presentation/></FadeInSection>
                    </section>
                    <section className="flex flex-col pt-[137px]">
                        <OfferServices/>
                    </section>
                    <section className="pt-[87px] pb-[87px]">
                        <HistoryImages/>
                    </section>
                    <section id="about-me" className="pt-[137px] min-h-screen pb-20">
                        <AboutMe/>
                    </section>
                    <section id="contact" className="pt-[137px] min-h-screen">
                        <FadeInSection><Contact/></FadeInSection>
                    </section>
                    <section className="pt-[137px] min-h-screen">
                        <MapPicker/>
                    </section>
                    <section id="reviews" className="pt-[137px] min-h-screen">
                        <Reviews/>
                    </section>
                    <section id="faq" className="pt-[137px] min-h-screen">
                        <FAQ/>
                    </section>
                </Suspense>
            </main>
            <Footer/>
        </div>
    );
}