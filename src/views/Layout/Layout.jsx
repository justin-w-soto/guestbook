import React from 'react'
import { Header } from '../../components/Layout/Header'

export const Layout = ({ children }) => {
    return (
        <div>
        <Header />
        <main>{children}</main>
        </div>
    )
}
