'use client';
import {useEffect, useRef, useState, useMemo} from "react";
import {getGalleryForName} from "@/libs/get-gallery-for-name";
import {NavGallery} from "@/components/layout/nav";
import {Button} from "@/components/ui/buttons";
import {IoIosArrowBack} from "react-icons/io";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import Image from 'next/image';

interface GalleryItem {
    images: string[] | null;
}

export default function Page() {
    const [data, setData] = useState<GalleryItem[] | null>(null);
    const params = useParams();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const router = useRouter();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
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
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const galleryName = useMemo(() => decodeURIComponent(Array.isArray(params.name) ? params.name[0] : params.name || ""), [params.name]);

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const response = await getGalleryForName(encodeURIComponent(galleryName));
            setData(response.gallery);
        })();
    }, [galleryName]);

    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    return (
        <>
            <header ref={headerRef}/>
            <div className="absolute top-0 flex flex-col w-full mt-3">
                <NavGallery isFixed={isNavFixed}/>
            </div>
            <div className="container mx-auto p-4 mt-[140px] min-h-screen min-w-[250px]">
                <div className="flex flex-col gap-10 lg:flex-row justify-between items-center mb-20">
                    <Link href="/gallery">
                        <Button className="flex flex-row gap-3 items-center justify-center">
                            <IoIosArrowBack/>Galleria
                        </Button>
                    </Link>
                    <h1 className="text-[26px] lg:text-[46px] xl:text-[96px] text-[#FFA629] font-[Ovtreasure]">
                        {galleryName}
                    </h1>
                    <div className="w-[150px]"/>
                </div>
                <div
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1 transition-all duration-500 ease-in-out">
                    {data?.flatMap((item) =>
                        item.images?.map((image, index) => (
                            <div
                                key={index}
                                className={`break-inside-avoid overflow-hidden flex p-2 rounded-[16px] hover:bg-[#ffe3de] transition-all duration-300 ease-in-out`}
                            >
                                <Image
                                    src={image}
                                    alt={`Imagen ${index}`}
                                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                />
                            </div>
                        ))
                    )}
                </div>
                {selectedImage && (
                    <div style={{zIndex: 99999}}
                         className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-2xl p-4 overflow-y-auto">
                        <div className="relative max-w-[95vw] max-h-[95vh] bg-[#cccccc] rounded-sm">
                            <button
                                className="absolute top-2 right-5 text-white cursor-pointer rounded-full hover:text-red-700 text-6xl"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Preview"
                                className="object-contain rounded-sm"
                                style={{ maxWidth: '100%', maxHeight: '90vh', width: 'auto', height: 'auto' }}
                                width={1000}
                                height={1000}
                                loading="lazy"
                            />
                        </div>
                    </div>
                )}
                <div className="flex-flex-col w-full items-center justify-center text-center mt-60">
                    <h2 className="text-[32px] font-[Ovtreasure] text-[#545454]">Hai altra domanda? Srivimi!</h2>
                    <Button onClick={() => {
                        router.push('/');
                        scrollWithDelay(() => scrollToSection('contact'))
                    }} className="w-[163px] mt-10" variant="secondary">Inviare domanda</Button>
                    <p className="italic text-[#545454] mt-40 mb-40 font-[LigthItalic] text-center p-3">
                        “Perché i momenti passano, ma le <br/> emozioni rimangono”
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}