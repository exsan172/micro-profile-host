import React, { Suspense, lazy } from "react"
const About = lazy(() => import ("about/about"))

const LoadingAbout = () => {
    return (
        <div className="flex justify-start items-center w-full my-10 flex-col">
            <div className="flex w-20 h-20 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="flex py-10 bg-gray-100 animate-pulse mt-10 rounded-sm w-full justify-center flex-col items-center">
                <div className="flex w-4/12 h-5 bg-gray-200 animate-pulse rounded-md"></div>
                <div className="flex w-10/12 h-10 bg-gray-200 animate-pulse rounded-md mt-5"></div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="container mx-auto px-4 flex flex-col w-11/12 md:w-6/12">
            <Suspense fallback={<LoadingAbout/>}>
                <About/>
                {/* <LoadingAbout/> */}
            </Suspense>
        </div>
    )
}

export default Home