import {atom} from "recoil"

export const activePages = atom({
    key : "active_pages",
    default : "profile"
})