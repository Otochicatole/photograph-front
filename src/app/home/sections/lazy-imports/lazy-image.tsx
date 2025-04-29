import { memo } from "react";
import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    name: string;
};

const LazyImage = memo(({ src, alt, name }: Props) => (
    <div className="w-[20%] h-auto object-cover transition-transform duration-300 relative">
        <Image className="w-full h-full z-0" src={src} alt={alt} loading="lazy" width={400} height={400} />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end pb-20 items-center z-10
            lg:text-2xl text-[#545454] font-[Ovtreasure] opacity-0 transition-all duration-500
            bg-gradient-to-t from-blue-100/60 to-transparent shadow-[0px_-20px_30px_rgba(255,255,255,0.8)]
            hover:opacity-100 hover:shadow-[0px_-30px_40px_rgba(255,255,255,1)]">
            {name}
        </div>
    </div>
));

LazyImage.displayName = "LazyImage";

export default LazyImage;