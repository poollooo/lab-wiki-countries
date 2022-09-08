import React, { useState } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = () => {
    const [countryInfo, setCountryInfo] = useState(null)

    return (
        <div className="col-5" style={{ "maxHeight": "90vh", "overflow": "scroll" }} >
            <div className="list-group">
                {countries.map((country, index) => {
                    function getCountryInfo() {
                        setCountryInfo(country)
                        console.log('countryName is', country)
                    }
                    return (
                        <Link key={index} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} onClick={getCountryInfo}> {country.name.common}</Link>
                    )
                })}
            </div>
        </div >
    )
}

export default CountriesList