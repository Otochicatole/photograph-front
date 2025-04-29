import { useEffect, useRef, useMemo } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { Button } from "@/components/ui/buttons";

const locations = [
    { lat: 41.9028, lng: 12.4964, name: "Roma, Italia" },
    { lat: -34.6037, lng: -58.3816, name: "Buenos Aires, Argentina" },
    { lat: 48.8566, lng: 2.3522, name: "París, Francia" },
    { lat: -27.498128928096907, lng: -64.856781990429, name: "Las Gurisas" },
    { lat: -32.872290554586854, lng: -60.75000380389074, name: "Numa" },
    { lat: -27.498128928096907, lng: -64.856781990429, name: "Los Altos de Ibarlucea" },
    { lat: -32.62194459637677, lng: -60.15795043034079, name: "Termas de Río Hondo, Santiago del Estero" },
    { lat: -30.015073724238405, lng: -59.52152245597376, name: "Victoria, Entre Ríos" },
    { lat: -32.1704756747645, lng: -64.11668927392444, name: "Esquina, Corrientes" },
    { lat: -32.17582684131967, lng: -64.25447009581491, name: "Río Tercero" },
    { lat: -26.82230838913975, lng: -65.22344956517442, name: "Almafuerte" },
    { lat: -32.99704924412067, lng: -60.771864622344516, name: "Tucumán, Argentina" },
    { lat: -32.94497969514943, lng: -60.709689808012506, name: "Pérez, Rosario, Argentina" },
    { lat: -33.02151554772674, lng: -60.8786732698597, name: "Rosario, Argentina" },
    { lat: -32.92153224891949, lng: -60.810987790519206, name: "Zavalla, Santa Fe, Argentina" },
    { lat: 39.977727840287585, lng: 4.041831763870176, name: "Funes, Argentina" },
    { lat: 45.78465727452983, lng: 9.07383530153815, name: "Menorca, España" },
    { lat: 45.78465727452983, lng: 9.07383530153815, name: "Lago di Como, Italia" }
];


const MapComponent = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const iconStyle = useMemo(
        () =>
            new Style({
                image: new Icon({
                    src: "./pin/pin.png",
                    scale: 0.08,
                    anchor: [0.5, 1],
                }),
            }),
        []
    );

    const vectorSource = useMemo(() => {
        const source = new VectorSource();
        const features = locations.map((loc) => {
            const feature = new Feature({
                geometry: new Point(fromLonLat([loc.lng, loc.lat])),
            });
            feature.setStyle(iconStyle);
            return feature;
        });
        source.addFeatures(features);
        return source;
    }, [iconStyle]);

    useEffect(() => {
        if (mapInstance.current || !mapRef.current) return;

        const vectorLayer = new VectorLayer({ source: vectorSource });

        const map = new Map({
            target: mapRef.current,
            layers: [new TileLayer({ source: new OSM() }), vectorLayer],
            view: new View({
                center: fromLonLat([0, 0]),
                zoom: 2,
            }),
        });

        const extent = vectorSource.getExtent();
        map.getView().fit(extent, { padding: [100, 100, 100, 100] });

        mapInstance.current = map;

        const resizeObserver = new ResizeObserver(() => {
            map.updateSize();
        });

        resizeObserver.observe(mapRef.current);

        return () => resizeObserver.disconnect();
    }, [vectorSource]);

    return (
        <div className="flex flex-col items-center justify-center w-full p-6">
            <h2 className="text-[#545454] text-[28px] lg:text-[38px] mb-10 font-[OVTreasure]">
                Aggiungiamo il tuo evento alla nostra mappa fotografica!
            </h2>
            <div ref={mapRef} className="overflow-hidden rounded-[10px] drop-shadow-lg cursor-move w-full xl:w-[80%] h-[700px]" />
            <div className="flex flex-col w-full xl:w-[80%] items-end justify-center p-3">
                <Button className="px-3" onClick={() => scrollToSection('contact')}>Aggiungi la mia città!</Button>
            </div>
        </div>
    );
};

export default MapComponent;
