import React from "react"
import { Icon } from "@iconify/react"

const Header = () => {
    return (
        <div className="flex bg-green-400 p-4 sticky top-0">
            <div className="container mx-auto flex flex-row items-center">
                <div className="flex w-full justify-start">
                    <span className="text-white">
                        Exsan Renaldhi
                    </span>
                </div>
                <div className="flex w-full justify-end">
                    <div className="flex">
                        <Icon icon="charm:menu-hamburger" fontSize={20} className="text-white"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header