import LogoImage from "../../atoms/logo/LogoImage"
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { PiBrowsersBold } from "react-icons/pi";
import Input from "../../atoms/input/Input";
import { useState } from "react";
import { GoBell } from "react-icons/go";


const Navbar = () => {
    const [search, setSearch] = useState("");
    



  return (
    <div className="w-full h-full bg-black ">
        <div className="w-full h-full flex flex-row items-center justify-between">
            {/*Logo */}
            <div className="w-1/3 h-full flex flex-row items-center px-5">
                <LogoImage width={35} height={35} />
            </div>

            {/*Search Bar */}
            <div className="w-1/3 flex flex-row gap-2 items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 cursor-pointer hover:scale-105 transition duration-150">
                    <GrHomeRounded className="size-5 opacity-85 text-gray-300  "  />
                </div>

                <div className="w-full flex flex-1 items-center gap-1 px-3 py-2 rounded-3xl bg-[#2A2A2A] hover:bg-[#393939] transition-colors duration-200">
                <FiSearch className="size-6 opacity-85 text-gray-300"/>
                <Input 
                        type="text" 
                        placeholder="What do you want to play?" 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search}
                        classs="flex-1 bg-transparent text-md font-medium text-white placeholder-gray-400 outline-none"
                />
                <div className="h-full flex flex-row gap-2 items-center">
                    <div className="w-[1px] h-8 border-[1px] border-gray-600"></div>
                    <PiBrowsersBold className="size-6 mr-2  text-white" />
                </div>
                </div>
            </div>

            {/*Icons */}
            <div className="w-1/5 h-full flex flex-row items-center gap-4 px-5">
                
                <div className="w-36 py-[5px] bg-white flex items-center justify-center rounded-3xl hover:scale-105 hover:opacity-90 transition duration-150 will-change-transform">
                    <h4 className="text-sm font-semibold text-center">Explore Premium</h4>
                </div>
                
                <GoBell className="w-5 h-5 text-gray-400"/>
                
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-700">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-800">
                        <p>P</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar