import React from "react"
import { useNavigate } from "react-router-dom"

const ErrorPages = ({ code=500, errorMessage="" }) => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex">
                <h1 className="text-5xl">{code}</h1>
            </div>
            <div className="flex mt-2 flex-col justify-center items-center">
                <div className="flex">
                    <p>{errorMessage}</p>
                </div>
                <div className="flex">
                    <span className="text-blue-500 cursor-pointer select-none" onClick={() => navigate(-1)}>Kembali</span>
                </div>
            </div>
        </div>
    )
}

export default ErrorPages