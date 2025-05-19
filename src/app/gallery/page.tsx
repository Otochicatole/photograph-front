'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavGallery } from "@/components/layout/nav";
import { getGallery } from "@/libs/get-gallery";
import { Button } from "@/components/ui/buttons";
import Footer from "../../components/layout/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";

interface GalleryItem {
    name: string;
    images: string | null;
    sectionType: string;
}

export default function Gallery() {
    const [data, setData] = useState<GalleryItem[] | null>(null);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const router = useRouter();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollWithDelay = (callback: () => void) => {
        setTimeout(callback, 300);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                setIsNavFixed(window.scrollY > headerRef.current.offsetHeight);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const response = await getGallery();
            setData(response.gallery);
        })();
    }, []);

    const groupedData = useMemo(() => {
        if (!data) return {};
        return data.reduce((acc, item) => {
            if (!acc[item.sectionType]) acc[item.sectionType] = [];
            acc[item.sectionType].push(item);
            return acc;
        }, {} as Record<string, GalleryItem[]>);
    }, [data]);

    const encodeName = useCallback((name: string) => encodeURIComponent(name), []);

    return (
        <>
            <header ref={headerRef} />
            <div className="absolute top-0 flex flex-col w-full mt-3">
                <NavGallery isFixed={isNavFixed} />
            </div>
            <div className="mt-[140px] w-full flex flex-col justify-center items-center">
                <section className="flex flex-col w-full p-4 xl:w-[80%] items-center text-center">
                <div className="flex flex-col gap-10 w-full lg:flex-row justify-between items-center mb-20">
                    <Link href="/">
                        <Button className="flex flex-row gap-3 items-center justify-center">
                            <IoIosArrowBack/>Home
                        </Button>
                    </Link>
                    <h1 className="text-[96px] font-[Ovtreasure]">Galleria</h1>
                    <div className="w-[150px]"/>
                </div>
                    <p>Permettimi di introdurmi tra le storie che ho fotografato in questi dieci meravigliosi anni: matrimoni, <br /> bambini e feste che mi hanno permesso di ritrarre ogni emozione più bella:</p>
                    <p className="italic text-[#545454] mb-20 font-[LigthItalic] mt-6">l’amore e la felicità.</p>
                    {Object.entries(groupedData).map(([sectionType, items]) => (
                        <div key={sectionType} className="mb-8">
                            <div className="flex flex-col w-full items-center justify-center">
                                <h2 className="text-[32px] font-[Ovtreasure] text-[#545454] border border-[#545454] px-6 rounded-4xl mb-16">
                                    {sectionType}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
                                {items.map((item) => (
                                    <div key={item.name} className="p-1">
                                        <Link href={`/gallery/${encodeName(item.name)}`}
                                            className="flex p-4 rounded-[25px] hover:bg-[#ffe3de] transition-all duration-300">
                                            {item.images && (
                                                <Image src={item.images} alt={item.name}
                                                    className="object-cover w-full h-[300px] lg:w-[330px] lg:h-[200px] rounded-[15px] drop-shadow-lg"
                                                    width={330} height={200} loading="lazy" />
                                            )}
                                        </Link>
                                        <h3 className="text-[20px] font-[Ovtreasure] text-start px-6 p-3">{item.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                <div className="flex flex-col w-full lg:w-[80%] items-center justify-center text-center mt-60">
                    <h2 className="text-[32px] font-[Ovtreasure] text-[#545454]">Hai altra domanda? Srivimi!</h2>
                    <Button onClick={() => {
                        router.push('/');
                        scrollWithDelay(() => scrollToSection('contact'))
                    }} className="w-[163px] mt-10" variant="secondary">Inviare domanda</Button>
                    <p className="italic text-[#545454] mt-40 mb-40 font-[LigthItalic]">“Perché i momenti passano, ma le
                        emozioni rimangono”</p>
                </div>
            </div>
            <Footer />
        </>
    );
}