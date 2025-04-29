import { FaFacebook, FaInstagram, FaYoutube, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import Image from 'next/image';

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const email = "MaranzanaFotografia@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="flex flex-row h-[250px] lg:h-[200px] lg:max-h-[200px] text-white text-lg bg-[#A5AF8D] p-1 lg:p-6 lg:px-20">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="lg:flex flex-row hidden items-center justify-center gap-2 w-[20%]">
                    {copied ? <span className="text-sm text-green-700 ml-1"><FaCheck /></span> : <IoMailOutline className="text-lg" />}
                    <p>{email}</p>
                    <button onClick={handleCopy} className="cursor-pointer  hover:bg-white rounded-full p-2 hover:text-[#A5AF8D] transition-all">
                        <FaCopy className="text-[16px]" />
                    </button>
                </div>
                <Image
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="transition-all duration-500 ease-in-out w-[250px] lg:w-[300px] ml-6 lg:ml-0"
                    loading="lazy"
                    alt="Logo"
                    width={300}
                    height={300}
                />
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-[20%]">
                    <div className="lg:hidden flex flex-row  items-center justify-center w-[20%]">
                        <button onClick={handleCopy} className="cursor-pointer  hover:bg-white rounded-full p-2 hover:text-[#A5AF8D] transition-all">
                            {copied ? <FaCheck className="text-green-700 text-2xl" /> : <IoMailOutline className="text-2xl" />}
                        </button>
                    </div>
                    <a href="https://www.instagram.com/phmaranzana/"><FaInstagram className="text-2xl hover:scale-125 hover:text-[#c94949] transition-all cursor-pointer" /></a>
                    <a href="http://www.youtube.com/@MaranzanaFotografia"><FaYoutube className="text-2xl hover:scale-125 hover:text-[#ca3434] transition-all cursor-pointer" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61572413471277"><FaFacebook className="text-2xl hover:scale-125 hover:text-[#403f8d] transition-all cursor-pointer" /></a>
                </div>
            </div>
        </footer>
    );
}