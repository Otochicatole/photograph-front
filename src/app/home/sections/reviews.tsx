import {motion} from "framer-motion";
import Image from "next/image";
import cards from "../text/reviews-text.json";

enum Category {
    Wedding = "Wedding",
    Session = "Session",
    XV = "XV Party",
}

const Reviews = () => {
    const columns: {
        id: number;
        title: string;
        category: string;
        year: number;
        rating: string;
        description: string;
        image: string;
    }[][] = [[], [], []];

    cards.forEach((card, index) => {
        columns[index % 3].push(card);
    });

    return (
        
        <>
            <p className="text-[20px] italic text-[#545454] font-[LigthItalic]  mt-6 text-center">
                “Perché ogni storia d&apos;amore merita di <br/> essere ricordata per sempre”
            </p>
            <h2 className="text-[#545454] text-[48px] mt-50 font-[Ovtreasure] text-center">Alcune recensioni dei miei
                adorabili clienti</h2>
            <p className="text-[20px] italic text-[#545454] mb-16 text-center font-[LigthItalic] "> Più di 10 anni in
                immagini</p>
            <div className="flex flex-col lg:flex-row justify-center items-center p-6 w-full gap-6">
                {columns.map((column, colIndex) => (
                    <div
                        key={colIndex}
                        className={`flex flex-col gap-6 ${colIndex === 0 || colIndex === 2 ? "mt-0 lg:mt-20" : ""}`}
                    >
                        {column.map(({id, title, category, year, rating, description, image}) => (
                            <motion.div
                                key={id}
                                initial={{opacity: 0, x: colIndex % 2 === 0 ? -100 : 100}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                                className="flex flex-col p-4 rounded-lg bg-[#FFFDF5] border-2 border-[#CCB9AB] w-full lg:max-w-[400px] text-[#545454] gap-4"
                            >
                                <div className="flex flex-row justify-between items-center">
                                <h2 className="text-[26px] font-[Ovtreasure]">{title}</h2>
                                <p className={`px-3 w-fit text-sm rounded-full ${category === Category.Wedding ? 'bg-[#DAD8C1]' : category === Category.XV ? 'bg-[#E5C8BE]' : 'bg-[#BCC5CE]'}`}>{category}</p>
                                </div>
                                <p className="text-[16px] font-[LigthItalic]">{description}</p>
                                {image &&
                                    <Image className="w-full rounded-lg hidden lg:block" loading="lazy" src={image}
                                           alt={title} width={400} height={300}/>}
                                <div className="w-full flex flex-row justify-between">
                                    <p className="font-[Manchester] text-[22px] font-semibold">{year}</p>
                                    <span>{rating}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Reviews;