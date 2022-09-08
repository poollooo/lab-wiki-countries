import React from 'react'
import countries from '../countries.json'

const CountriesList = () => {
    return (
        <div className="col-5" style={{ "maxHeight": "90vh", "overflow": "scroll" }} >
            <div className="list-group">
                {countries.map((country, index) => {
                    return (
                        <a key={index} className="list-group-item list-group-item-action" href={`/${country.alpha3Code}`} >{country.name.common}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesList