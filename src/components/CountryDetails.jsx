import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import countries from '../countries.json'

// const CountryDetails = () => {
//     const navigate = useNavigate()

//     const [countryInfo, setCountryInfo] = useState(null)

//     countries.map((country, index) => {
//         setCountryInfo({country })
//     })
//     const countryName = useParams().countryName
//     console.log(countryName)
//     const alpha3Code = 
//     console.log(countryName, commonName)
//     setCountryInfo({ countryName, commonName })

//     // useEffect(() => {
//     //     const url = `https://restcountries.com/v3.1/alpha/${cca2}`

//     //     // let's use an API to get info about this country
//     //     axios
//     //         .get(url)
//     //         .then((response) => {
//     //             const capital = response.data[0].capital[0]
//     //             const commonName = response.data[0].name.common
//     //             console.log(capital, commonName)
//     //             setCountryInfo({ capital, commonName })
//     //         })
//     //         .catch(() => {
//     //             // redirect the user to a page with a useful list
//     //             navigate('/countries')
//     //         })
//     // }, [cca2, navigate])

//     if (!countryInfo) {
//         return <p>I AM STILL LOADING</p>
//     }

//     return (
//         <p>
//             {countryInfo.commonName}! Its capital is {countryInfo.capital}!
//         </p>
//     )
// }

// export default CountryDetails

import React from 'react'

const CountryDetails = () => {
    return (
        <div className="col-7">
            <h1>France</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ "width": "30%" }}>Capital</td>
                        <td>Paris</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            551695 km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/LUX">Luxembourg</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails