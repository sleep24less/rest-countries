import React from 'react';
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../countrypage.css'

function CountryPage() {
    const [country, setCountry] = React.useState([]);
    const { name } = useParams();
    const url = `https://restcountries.com/v2/name/${name}`;

    const getCountryData = async () => {
        const data = await axios.get(url).then(res => res.data);
        setCountry(data);
    }

    React.useEffect(() => {
        getCountryData();
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='main country_page'
        >
            <Link to="/" className="back_button"><i className="fa-solid fa-chevron-left"></i><p>Back</p></Link>

            {country.map(country => {
                const { numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = country

                let stringCurrencies = [];
                let stringLanguages = [];
                let arrayBorders = [];
                if (currencies) {
                    stringCurrencies = currencies.map(c => `${c.name}`).join(', ') + '.';
                }
                if (languages) {
                    stringLanguages = languages.map(c => `${c.name}`).join(', ') + '.';
                }
                if (borders) {
                    arrayBorders = borders.slice(0, 3);
                }

                return (
                    <div className='country_info' key={numericCode}>
                        <img className='flag' src={flag} alt={`Flag of ${name}`}></img>
                        <div className='info_section'>
                            <h1 className='name'>{name}</h1>
                            <ul className='info'>
                                <li className='info_item'>Native Name: <span>{nativeName}</span></li>
                                <li className='info_item'>Population: <span>{population}</span></li>
                                <li className='info_item'>Region: <span>{region}
                                </span></li>
                                <li className='info_item'>Sub Region: <span>{subregion}</span></li>
                                {capital && <li className='info_item capital'>Capital: <span>{capital}</span></li>}
                                <li className='info_item'>Top Level Domain: <span>{topLevelDomain}</span></li>
                                {currencies && <li className='info_item'>Currencies: <span>{stringCurrencies}</span></li>}
                                <li className='info_item'>Languages: <span>{stringLanguages}</span></li>
                            </ul>
                            {borders && <ul className='border'>
                                Border Countries:
                                {arrayBorders.map(element => {
                                    return (
                                        <li className='border_item'>{element}</li>
                                    )
                                })}
                            </ul>}
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}

export default CountryPage