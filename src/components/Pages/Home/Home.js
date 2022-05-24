import React from 'react';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
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
            <Footer />

        </div>
    );
};

export default Home;