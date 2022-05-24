import React from 'react';
import Brands from '../Brands/Brands';
import HappyClient from '../Client/HappyClient';
import Footer from '../Shared/Footer';
import Services from '../Services/Services';
import Vistors from '../Visitors/Vistors';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Brands />
            <Vistors />
            <HappyClient />
            <Footer />

        </div>
    );
};

export default Home;