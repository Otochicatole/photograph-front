import { motion } from "framer-motion";
import { memo, Suspense } from "react";
import {CardImage} from "@/app/home/sections/lazy-imports/card-image";

const cards = [
    { id: 1, title: "Proposta", description: "Vuoi sorprendere ancora di più la tua coppia? Facciamo un servizio fotografico segreto del momento unico della proposta!", image: "/RECURSOS/ICONOS/ICONOS-3D/Propose-1.png" },
    { id: 2, title: "Civile", description: "Devi aver coperto il giorno civile, e io posso aiutarti con quello. Può essere in chiesa, in comune, o anche alla festa.", image: "/RECURSOS/ICONOS/ICONOS-3D/Propose.png" },
    { id: 3, title: "Session", description: "Scatta splendide foto con il tuo partner dove vuoi, nel modo che preferisci e con lo stile che preferisci!", image: "/RECURSOS/ICONOS/ICONOS-3D/Calendar-1.png" },
    { id: 4, title: "Previous", description: "Seguo la sposa nel suo momento più importante: la preparazione. Seguo dall'inizio fino alla festa.", image: "/RECURSOS/ICONOS/ICONOS-3D/Hanger-1.png" },
    { id: 5, title: "Festa", description: "Oltre 200 foto dall'inizio della festa fino all'ultima goccia di divertimento!", image: "/RECURSOS/ICONOS/ICONOS-3D/Wine-1.png" },
    { id: 6, title: "Pregnancy", description: "Sei una futura mamma? Posso immortalare il tuo momento speciale con una sessione bellissima e tranquilla.", image: "/RECURSOS/ICONOS/ICONOS-3D/Balloon-1.png" },
    { id: 7, title: "Content", description: "Se hai bisogno di immagini perfette per dare un nuovo slancio al tuo marchio, posso aiutarti. Contattami!", image: "/RECURSOS/ICONOS/ICONOS-3D/Screen-1.png" },
    { id: 8, title: "Social", description: "Forse un momento sociale? Mi occupo di laurea, eventi scolastici, piccole feste, compleanni dei bambini, riunioni dirigenziali.", image: "/RECURSOS/ICONOS/ICONOS-3D/Chat-1.png" }
];

const OfferServices = memo(function OfferServices() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full lg:w-[95%] xl:w-[90%]  2xl:w-[80%] p-3 transition-all">
                <h3 className="text-[#545454] text-[28px] lg:text-[38px] mb-10">
                    <span className="text-[#DCB3AD] font-bold">Ciò che offro</span> <br /> per il tuo giorno più felice della vita
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full">
                    {cards.map(({ id, title, description, image }) => (
                        <motion.div key={id}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                         className="flex flex-row bg-[#FFFDF5] border border-[#798B95] gap-3 rounded-[15px] p-3 items-center justify-center">
                            <Suspense fallback={<div className="min-w-[100px] min-h-[100px] bg-transparent"></div>}>
                                <CardImage src={image} alt={title} />
                            </Suspense>
                            <div>
                                <p className="font-ovtreasure text-[26px] text-[#545454] font-[Ovtreasure]">{title}</p>
                                <p className="text-[#545454]">{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default OfferServices;
