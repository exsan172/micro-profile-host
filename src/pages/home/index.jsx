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

const LoadingPortofolio = () => {
    return (
        <div className="flex justify-start items-center w-full my-10 flex-col">
            <div className="flex py-4 w-6/12 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="flex py-10 bg-gray-100 animate-pulse mt-5 rounded-sm w-full flex-col items-center">
                <div className="flex py-4 w-4/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
            </div>
        </div>
    )
}

const LoadingSkills = () => {
    return (
        <div className="flex justify-start items-center w-full my-10 flex-col">
            <div className="flex py-4 w-6/12 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="flex py-5 bg-gray-100 animate-pulse mt-5 rounded-sm w-full flex-col items-center">
                <div className="flex py-4 w-8/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-4/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                <div className="flex py-4 w-8/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-4/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                <div className="flex py-4 w-8/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-4/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
            </div>
        </div>
    )
}

const LoadingExperience = () => {
    return (
        <div className="flex justify-start items-center w-full my-10 flex-col">
            <div className="flex py-4 w-6/12 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="flex py-5 bg-gray-100 animate-pulse mt-5 rounded-sm w-full flex-col px-10">
                <div className="flex py-4 w-12/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-12/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                <div className="flex justify-center">
                    <div className="flex py-4 w-3/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                </div>
                <div className="flex py-4 w-12/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-12/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                <div className="flex justify-center">
                    <div className="flex py-4 w-3/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                </div>
                <div className="flex py-4 w-12/12 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-12/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                <div className="flex justify-center">
                    <div className="flex py-4 w-3/12 bg-gray-200 animate-pulse rounded-md mt-4"></div>
                </div>
            </div>
        </div>
    )
}

const LoadingContact = () => {
    return (
        <div className="flex justify-start items-center w-full my-10 flex-col">
            <div className="flex py-4 w-6/12 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="flex py-3 bg-gray-100 animate-pulse mt-5 rounded-sm w-full flex-row items-center justify-center">
                <div className="flex py-4 w-1/12 m-1 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-1/12 m-1 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-1/12 m-1 bg-gray-200 animate-pulse rounded-md mt-10"></div>
                <div className="flex py-4 w-1/12 m-1 bg-gray-200 animate-pulse rounded-md mt-10"></div>
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
            <Suspense fallback={<LoadingPortofolio/>}>
                {/* <About/> */}
                <LoadingPortofolio/>
            </Suspense>
            <Suspense fallback={<LoadingPortofolio/>}>
                {/* <About/> */}
                <LoadingSkills/>
            </Suspense>
            <Suspense fallback={<LoadingExperience/>}>
                {/* <About/> */}
                <LoadingExperience/>
            </Suspense>
            <Suspense fallback={<LoadingContact/>}>
                {/* <About/> */}
                <LoadingContact/>
            </Suspense>
        </div>
    )
}

export default Home