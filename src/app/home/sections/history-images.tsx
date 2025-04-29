import {memo, Suspense, lazy} from "react";
import {Button} from "@/components/ui/buttons";
import {useRouter} from "next/navigation";

const LazyImage = lazy(() => import("./lazy-imports/lazy-image"));

const images = [
    {
        name: 'Agús e Jere',
        img: '/FOTOGRAFIAS/5-images/1.png',
    },
    {
        name: 'Ari e Brian',
        img: '/FOTOGRAFIAS/5-images/2.png',
    },
    {
        name: 'Mirna e Brian',
        img: '/FOTOGRAFIAS/5-images/3.png',
    },
    {
        name: 'Meli e Abel',
        img: '/FOTOGRAFIAS/5-images/4.png',
    },
    {
        name: 'Geru e Guille',
        img: '/FOTOGRAFIAS/5-images/5.png',
    },
];

const HistoryImages = memo(() => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center w-full  lg:p-3">
            <div className="flex flex-col items-center w-full lg:w-[95%] 2xl:w-[80%]">
                <h3 className="text-center mb-10 font-ovtreasure font-[Ovtreasure] text-[38px] text-[#545454]">
                    Storie in immagini
                </h3>
                <div className="flex w-full justify-center  z-0  lg:p-6 relative">
                    {images.map((image, index) => (
                        <Suspense key={index} fallback={<div className="w-[20%] h-auto bg-gray-200 rounded-lg"></div>}>
                            <LazyImage src={image.img} name={image.name} alt={`Image ${index}`}/>
                        </Suspense>
                    ))}
                </div>
                <Button onClick={()=> router.push('/gallery')} className="w-[163px] mt-10">Vai alla galleria</Button>
            </div>
        </div>
    );
});

HistoryImages.displayName = "HistoryImages";

export default HistoryImages;