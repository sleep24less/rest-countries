import React from 'react';
import { motion } from 'framer-motion'
import CountryCard from './CountryCard';
import axios from 'axios';
import '../home.css'
import Filter from './Filter';

function Home() {
    const [countries, setCountries] = React.useState([]);
    const url = 'https://restcountries.com/v2/all'

    const getCountriesData = async () => {
        const data = await axios.get(url).then(res => res.data);
        setCountries(data);
        console.log(data);
    }

    React.useEffect(() => {
        getCountriesData();
    }, [])

    function handleChange(e) {
        const { value } = e.target
        let countriesArray = [];

        if (value === 'All') {
            getCountriesData();
        }
        else if (value === 'Africa') {
            countriesArray = countries.filter(country => {
                if (country.region === 'Africa') {
                    return country
                }
            })
            setCountries(countriesArray);
        }
        else if (value === 'Americas') {
            countriesArray = countries.filter(country => {
                if (country.region === 'Americas') {
                    return country
                }
            })
            setCountries(countriesArray);
        }
        else if (value === 'Asia') {
            countriesArray = countries.filter(country => {
                if (country.region === 'Asia') {
                    return country
                }
            })
            setCountries(countriesArray);
        }
        else if (value === 'Europe') {
            countriesArray = countries.filter(country => {
                if (country.region === 'Europe') {
                    return country
                }
            })
            setCountries(countriesArray);
        }
        else if (value === 'Oceania') {
            countriesArray = countries.filter(country => {
                if (country.region === 'Oceania') {
                    return country
                }
            })
            setCountries(countriesArray);
        }
    }

    return (
        <>
            <Filter handleChange={handleChange} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='container main home'
            >
                {countries.map(country => {

                    const { numericCode, name, population, region, capital, flag, cioc } = country;

                    return <CountryCard
                        key={numericCode}
                        code={cioc}
                        className='grid_element'
                        flag={flag}
                        name={name}
                        capital={capital}
                        region={region}
                        population={population}
                    />
                })}
            </motion.div>
        </>
    )
}

export default Home