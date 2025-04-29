import { query } from "./strapi";

const STRAPI_HOST = process.env.STRAPI_HOST;

interface Image {
    id: number;
    url: string;
}

interface GalleryItem {
    id: number;
    Images: Image[];
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

export function getGalleryForName(name?: string) {
    return query(`galleries?populate=Images&pagination[pageSize]=100&filters[name][$eq]=${name}`)
        .then((res: ApiResponse) => {
            const { data, meta } = res;

            const gallery = data.map((item) => {
                const { Images: rawImages } = item;
                const images = rawImages.map(img => `${STRAPI_HOST}${img.url}`);
                return { images };
            });

            return { gallery, pagination: meta.pagination };
        });
}
