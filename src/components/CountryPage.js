import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryPage() {
    const [countries, setCountries] = React.useState([]);
    const url = 'https://restcountries.com/v2/all'

    const getCountryData = async () => {
        const data = await axios.get(url).then(res => res.data);
        setCountries(data);
        console.log(data);
    }

    React.useEffect(() => {
        getCountryData();
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='main country_page'
        >
            <p>Country info</p>
            <Link to="/" className="navbar_item">Back to home</Link>
        </motion.div>
    )
}

export default CountryPage