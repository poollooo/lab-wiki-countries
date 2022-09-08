import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import Navbar from './Navbar'

const Layout = ({ getCountryInfo }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <CountriesList />
                        <CountryDetails getCountryInfo={getCountryInfo} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout