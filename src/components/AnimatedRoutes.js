import React from 'react';
import Home from './Home';
import CountryPage from './CountryPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<Home />} />
                <Route path="/country/:code" element={<CountryPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes