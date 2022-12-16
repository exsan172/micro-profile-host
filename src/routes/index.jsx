import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout, Layout } from "../layout"
import Pages from "../pages"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <Pages.Home/>
                    </Layout>
                }/>
                <Route path="*" element={
                    <AuthLayout>
                        <Pages.ErrorPages code={404} errorMessage="Halaman tidak ditemukan !"/>
                    </AuthLayout>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp