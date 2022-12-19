import React from "react"
import { Icon } from "@iconify/react"

const SideNav = ({ show=false, close, activePgs, move }) => {
    
    return (
        <div className={`${show === true ? "flex" : "hidden"} w-full h-full fixed z-20 justify-end`}>
            <div className="flex bg-black opacity-70 w-full h-full fixed" onClick={() => close(true)}></div>
            <div className="flex w-8/12 bg-white p-5 z-30 items-start flex-col">
                <div className="flex items-center w-full pb-2">
                    <div className="flex w-full">
                        <span>Menu</span>
                    </div>
                    <div className="flex">
                        <Icon icon="typcn:times" fontSize={20} className="select-none cursor-pointer" onClick={() => close(true)}/>
                    </div>
                </div>
                <div className="flex mt-3 flex-col w-full">
                    <div className={`flex items-center my-3 w-full ${activePgs === "profile" ? "text-gray-800" : "text-gray-400"}`} onClick={() => move("profile")}>
                        <div className="flex px-2">
                            <Icon icon="healthicons:ui-user-profile-outline" fontSize={20}/>
                        </div>
                        <div className="flex w-full">
                            <span>Profile</span>
                        </div>
                    </div>
                    <div className={`flex items-center my-3 w-full ${activePgs === "portofolio" ? "text-gray-800" : "text-gray-400"}`} onClick={() => move("portofolio")}>
                        <div className="flex px-2">
                            <Icon icon="material-symbols:apk-document-outline" fontSize={20}/>
                        </div>
                        <div className="flex w-full">
                            <span>Portofolio</span>
                        </div>
                    </div>
                    <div className={`flex items-center my-3 w-full ${activePgs === "kemampuan" ? "text-gray-800" : "text-gray-400"}`} onClick={() => move("kemampuan")}>
                        <div className="flex px-2">
                            <Icon icon="game-icons:skills" fontSize={20}/>
                        </div>
                        <div className="flex w-full">
                            <span>Kemampuan</span>
                        </div>
                    </div>
                    <div className={`flex items-center my-3 w-full ${activePgs === "pengalaman" ? "text-gray-800" : "text-gray-400"}`} onClick={() => move("pengalaman")}>
                        <div className="flex px-2">
                            <Icon icon="mdi:company" fontSize={20}/>
                        </div>
                        <div className="flex w-full">
                            <span>Pengalaman</span>
                        </div>
                    </div>
                    <div className={`flex items-center my-3 w-full ${activePgs === "kontak" ? "text-gray-800" : "text-gray-400"}`} onClick={() => move("kontak")}>
                        <div className="flex px-2">
                            <Icon icon="material-symbols:perm-contact-calendar-outline-sharp" fontSize={20}/>
                        </div>
                        <div className="flex w-full">
                            <span>Kontak</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav