import React from 'react';
import Home from './Home';
import Filter from './Filter';
import CountryPage from './CountryPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
    const location = useLocation()
    const home = (<>
        <Filter />
        <Home />
    </>)

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route exact path='/' element={home} />
                <Route path="/:name" element={<CountryPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes