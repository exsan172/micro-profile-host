import React, { useState } from "react"
import { Icon } from "@iconify/react"
import { useRecoilState } from "recoil"
import SideNav from "../sideNav"
import { activePages } from "../../recoil"

const Header = () => {
    const [showSide, setShowSide] = useState(false)
    const [activePgs, setActivePgs] = useRecoilState(activePages)
    
    const moveToElement = (el) => {
        const element = document.getElementById(el)
        if(element !== null) {
            setActivePgs(el)
            element.scrollIntoView();
        }
    }

    return (
        <>
            <SideNav show={showSide} close={() => setShowSide(false)} move={moveToElement} activePgs={activePgs}/>
            <div className="flex bg-green-400 p-4 sticky top-0 z-10">
                <div className="container mx-auto flex flex-row items-center">
                    <div className="flex w-full justify-start">
                        <span className="text-white">
                            Exsan Renaldhi
                        </span>
                    </div>
                    <div className="flex w-full justify-end h-[35px] items-center">
                        <div className="sm:flex md:hidden">
                            <Icon icon="charm:menu-hamburger" fontSize={25} className="text-white select-none cursor-pointer" onClick={() => setShowSide(true)}/>
                        </div>
                        <div className="hidden md:flex text-white">
                            <div className={`flex px-2 mx-1 select-none cursor-pointer hover:border-b hover:border-b-white ${activePgs === "profile" ? "border-b border-b-white" : ""} `} onClick={() => moveToElement("profile")}>
                                <span>Profile</span>
                            </div>
                            <div className={`flex px-2 mx-1 select-none cursor-pointer hover:border-b hover:border-b-white ${activePgs === "portofolio" ? "border-b border-b-white" : ""} `} onClick={() => moveToElement("portofolio")}>
                                <span>Portofoilo</span>
                            </div>
                            <div className={`flex px-2 mx-1 select-none cursor-pointer hover:border-b hover:border-b-white ${activePgs === "kemampuan" ? "border-b border-b-white" : ""} `} onClick={() => moveToElement("kemampuan")}>
                                <span>Kemampuan</span>
                            </div>
                            <div className={`flex px-2 mx-1 select-none cursor-pointer hover:border-b hover:border-b-white ${activePgs === "pengalaman" ? "border-b border-b-white" : ""} `} onClick={() => moveToElement("pengalaman")}>
                                <span>Pengalaman</span>
                            </div>
                            <div className={`flex px-2 mx-1 select-none cursor-pointer hover:border-b hover:border-b-white ${activePgs === "kontak" ? "border-b border-b-white" : ""} `} onClick={() => moveToElement("kontak")}>
                                <span>Kontak</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header