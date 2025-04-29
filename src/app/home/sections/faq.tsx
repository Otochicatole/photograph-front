import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "@/components/ui/buttons";

const faqs = [
    {
        question: "Come posso fissare un appuntamento con te?",
        answer:
            "Fissare un appuntamento con me è semplice! Potete contattarci via email o tramite questo modulo, ricordatevi solo di indicare la data della cerimonia o della sessione per confermare prima la disponibilità.",
    },
    {
        question: "Lavori con contratti formali?",
        answer:
            "Utilizzo un contratto firmato da entrambe le parti per verificare che tutto quanto discusso nell'incontro, le mie richieste, la consegna e il prezzo concordato siano stati compresi.",
    },
    {
        question: "Realizzi video con fotocamera e droni?",
        answer: "Al momento non realizzo video né utilizzo droni.",
    },
    {
        question: "Lavori con altri fotografi?",
        answer:
            "Al momento mi trovo a lavorare da solo, dall'arrivo all'evento o alla sessione fino al momento della consegna del materiale fotografico.",
    },
    {
        question: "Quali sono i metodi di pagamento?",
        answer:
            "Le modalità di pagamento attualmente sono contanti o bonifico bancario. Al momento non accetto carte di credito o assegni.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fetch flex flex-col items-center w-full">
            <p className="text-[20px] italic text-[#545454] font-[LigthItalic]  mt-6 text-center">
            “Perché quando fai ciò che ami, ogni immagine <br /> porta con sé un pezzo del tuo cuore”
            </p>
            <h2 className="text-black text-[48px] mt-10 font-[Ovtreasure] p-10 mb-10 text-center">FAQ</h2>
            <div className="w-full max-w-xl lg:max-w-4xl p-4 space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-[#999E87] rounded-[5px] overflow-hidden">
                        <button
                            className="w-full text-left flex justify-between items-center px-4 py-3 text-lg font[Ovtreasure] text-black cursor-pointer hover:bg-[#999e871e] transition"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="font-[OVTreasure]">{faq.question}</h2>
                            <motion.span
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FiChevronDown className="text-gray-600 text-xl" />
                            </motion.span>
                        </button>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: openIndex === index ? "auto" : 0,
                                opacity: openIndex === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-4 py-2 text-gray-600 ">{faq.answer}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <h2 className="text-[#545454] text-[48px] mt-25 font-[Ovtreasure] p-3 text-center">Hai altra domanda? Srivimi!</h2>
            <div className="flex w-full items-center justify-center">
            <Button variant="secondary" onClick={() => scrollToSection('contact')} className="w-[163px] mt-3">Inviare domanda</Button>
            </div>
            <p className="text-[20px] italic text-[#545454] font-[LigthItalic]  mt-10 text-center">
            “Perché i momenti passano, ma le <br /> emozioni rimangono”
            </p>
        </div>
    );
}
