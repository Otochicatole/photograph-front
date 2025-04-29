import {FaArrowDown} from "react-icons/fa";

export const ArrowDown = ({onClick}: {onClick?: () => void}) => {
    return (
        <button onClick={onClick} className="text-2xl p-2 border-2 text-[#999E87] border-[#999E87] hover:bg-[#999E87] hover:text-white cursor-pointer hover:border-transparent rounded-full animate-bounce transition-all">
            <FaArrowDown />
        </button>
    )
}