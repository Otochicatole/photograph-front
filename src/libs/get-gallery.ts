import { query } from "./strapi";

const STRAPI_HOST = process.env.STRAPI_HOST;

interface Image {
    id: number;
    url: string;
}

interface GalleryItem {
    id: number;
    name: string;
    Images: Image[];
    section: { Type: string };
}

interface ApiResponse {
    data: GalleryItem[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export function getGallery() {
    return query("galleries?populate=Images&populate=section&pagination[pageSize]=100")
        .then((res: ApiResponse) => {
            const { data, meta } = res;

            const gallery = data.map((item) => {
                const { name, Images: rawImages, section } = item;
                const sectionType = section?.Type || "Desconocido";
                const images = rawImages.length > 0 ? `${STRAPI_HOST}${rawImages[0].url}` : null;
                return { name, images, sectionType };
            });

            return { gallery, pagination: meta.pagination };
        });
}
