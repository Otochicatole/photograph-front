import { memo } from "react";
import Image from "next/image";

type Props = {
    src: string;
    className?: string;
    alt?: string; // Agregar alt para accesibilidad
};

const LazyImage = memo(({ src, className, alt = "" }: Props) => (
    <Image className={className} src={src} alt={alt} loading="lazy" />
));

LazyImage.displayName = "LazyImage";

export default LazyImage;