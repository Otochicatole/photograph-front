import Carousel from "@/app/home/components/carousel";


const Presentation = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className="mb-6 mt-10 font-[LigthItalic] lg:text-[26px] text-[#545454]">“Dove le emozioni diventano arte”</h2>
            <Carousel />
            <div className="flex flex-row items-center justify-center bg-[#EAEAEA] border border-neutral-200 w-[90%] lg:w-[860px] h-[140px] rounded-[25px] p-4 gap-3 mt-6 drop-shadow-lg">
                <div className="flex w-[33%] border-2 border-[#DCB3AD] bg-[#DCB3AD] rounded-[15px] h-full items-center justify-center">
                    <p className="text-center text-white lg:text-[26px]">90+ <br/>
                        Happy Clients</p>
                </div>
                <div className="flex w-[33%] border-2 border-[#DCB3AD] rounded-[15px] h-full items-center justify-center">
                    <p className="text-center text-[#545454] lg:text-[26px]"><span className="font-bold">10+</span>
                        <br/>
                        Years of Experience</p>
                </div>
                <div className="flex w-[33%] border-2 border-[#DCB3AD] rounded-[15px] h-full items-center justify-center">
                    <p className="text-center text-[#545454] lg:text-[26px]"><span className="font-bold">500k</span> <br/>
                        Pictures Made</p>
                </div>
            </div>

        </div>
    )
}

export default Presentation