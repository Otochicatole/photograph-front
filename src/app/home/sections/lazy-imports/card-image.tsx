import {memo} from "react";
import Image from "next/image";

export const CardImage = memo(({src, alt}: { src: string; alt: string }) => (
    <Image className="max-w-[100px] max-h-[100px] object-cover rounded-lg" src={src} alt={alt} loading="lazy"
           width={100} height={100}/>
));

CardImage.displayName = "CardImage";

