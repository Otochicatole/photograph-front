import { memo } from "react";
import Image from "next/image";

type Props = {
    src: string;
    className?: string;
    alt?: string; // Agregar alt para accesibilidad
};

const LazyImage = memo(({ src, className, alt = "" }: Props) => (
    <Image className={className} src={src} alt={alt} loading="lazy" width={400} height={400} />
));

LazyImage.displayName = "LazyImage";

export default LazyImage;