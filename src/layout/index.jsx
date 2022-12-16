import React from "react"
import Components from "../components"

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Components.Header/>
            {children}
            <Components.MoveToTop/>
            <Components.Footer/>
        </div>
    )
}

export const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}