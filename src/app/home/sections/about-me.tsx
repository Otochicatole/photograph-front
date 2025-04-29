import {memo, Suspense, lazy} from "react";
import {text} from "../text/about-me-text";

const LazyImage = lazy(() => import("./lazy-imports/lazy-image-aboutme"));

const SectionTitle = ({children}: { children: string }) => (
    <h2 className="text-[#545454] text-[38px] mb-26  lg:mb-16 font-[Ovtreasure]">{children}</h2>
);

const AboutMe = memo(() => {
    return (
        <div className="flex flex-col w-full items-center justify-center ">
            <SectionTitle>Scopri la fotografa</SectionTitle>

            <div className="flex flex-col  lg:flex-row items-center max-w-[800px] justify-center gap-3">
                <div className="relative flex flex-col min-w-[300px] min-h-[440px]">
                    <Suspense fallback={<div className="lg:w-[300px] lg:h-[440px] bg-gray-200 rounded-lg"></div>}>
                        <LazyImage className="absolute -top-29 -left-26 rotate-y-180 z-0" src="/RECURSOS/hoja1.png"/>
                        <LazyImage className="w-[300px] h-[440px] object-cover rounded-[10px] drop-shadow-lg z-10"
                                   src="/FOTOGRAFIAS/FOTOGRAFO/q-s.jpg"/>
                    </Suspense>
                </div>
                <div className="flex flex-col h-full w-full p-6">{text.imgText}</div>
            </div>

            <div className="relative flex flex-col items-center justify-center w-[400px] mt-26">
                <Suspense fallback={<div className="w-[124px] h-[230px] bg-transparent"></div>}>
                    <LazyImage className="absolute rotate-99 z-0 opacity-50  right-22 w-[124px] h-[230px]"
                               src="/RECURSOS/hoja2.png"/>
                </Suspense>
                <h2 className="text-[#545454] text-[38px] font-[Ovtreasure] z-10">La mia filosofia</h2>
            </div>

            <div className="flex flex-row justify-between gap-3  p-6 w-full lg:w-[95%] 2xl:w-[60%] mt-10">
                {[
                    {title: "Missione", text: text.missioneText},
                    {title: "Visione", text: text.visioneText},
                ].map(({title, text}) => (
                    <div key={title} className="flex flex-col max-w-[366px] text-center">
                        <h2 className="text-[#798B95] text-[28px] lg:text-[38px] font-[Ovtreasure]">{title}</h2>
                        {text}
                    </div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:w-[850px] gap-16 mt-36 p-6">
                <h2 className="text-[#798B95] text-[38px] font-[Ovtreasure]">Valori</h2>
                {text.valoriText}
            </div>

            <p className="text-[20px] italic text-[#545454] mb-40 font-[LigthItalic] mt-40 text-center">
                “Fotografie che parlano il <br/> linguaggio del cuore”
            </p>

            <SectionTitle>Perché io?</SectionTitle>

            <div className="flex flex-col lg:flex-row items-center max-w-[1000px] justify-center lg:gap-55">
                <div className="relative flex flex-col min-w-[300px] min-h-[440px]">
                    <Suspense fallback={<div className="w-[300px] h-[440px] bg-gray-200 rounded-lg"></div>}>
                        <LazyImage className="absolute -top-23 -left-38 z-0" src="/RECURSOS/hoja3.png"/>
                        <LazyImage className="absolute -bottom-16 -right-3 rotate-135 w-[147px] h-[261px] z-0"
                                   src="/RECURSOS/hoja1.png"/>
                        <LazyImage className="w-[300px] h-[440px] object-cover rounded-[10px] drop-shadow-lg z-10"
                                   src="/FOTOGRAFIAS/FOTOGRAFO/p-y.jpg"/>
                    </Suspense>
                </div>
                <div className="flex flex-col h-full w-full mt-20 lg:mt-0 p-6 lg:p-3">{text.parcheIoText}</div>
            </div>
        </div>
    );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;