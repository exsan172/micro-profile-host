import React from "react"
import { Icon } from "@iconify/react"

const MoveToTop = () => {
    const top = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="fixed bottom-10 right-10 flex w-[50px] h-[50px] bg-green-400 rounded-full p-1 select-none cursor-pointer items-center" onClick={() => top()}>
            <Icon icon="ic:outline-keyboard-arrow-up" className="text-white" fontSize={40}/>
        </div>
    )
}

export default MoveToTop