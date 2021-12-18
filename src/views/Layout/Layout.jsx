import React from 'react'
import { Header } from '../../components/Layout/Header'
import { Footer } from '../../components/Layout/Footer'

export const Layout = ({ children }) => {
    return (
        <div>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    )
}
