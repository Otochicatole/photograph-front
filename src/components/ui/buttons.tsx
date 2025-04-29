import {ReactNode} from "react";

export const Button = ({children, onClick, className, variant}:{children?: ReactNode, onClick?: () => void, className?: string, variant?: string}) => {

    if (variant === 'secondary') {
        return (
            <button
            onClick={onClick}
            className={`${className} border-2  min-w-[177px] text-[20px] font-medium hover:bg-transparent min-h-[49px] rounded-[10px] hover:text-[#999E87] border-[#999E87] bg-[#999E87] text-white cursor-pointer  transition-all`}>
            {children}
        </button>
        )
    }
    return (
        <button
            onClick={onClick}
            className={`${className} border-2  min-w-[177px] text-[20px] font-medium min-h-[49px] rounded-[10px] text-[#999E87] border-[#999E87] hover:bg-[#999E87] hover:text-white cursor-pointer hover:border-transparent transition-all`}>
            {children}
        </button>
    )
}