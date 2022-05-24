import React from 'react';
import Brands from '../Brands/Brands';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Brands />

        </div>
    );
};

export default Home;