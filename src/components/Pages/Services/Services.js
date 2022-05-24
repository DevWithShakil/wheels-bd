import React from 'react';
import service1 from '../../../assets/serviceImg/service1.png';
import service2 from '../../../assets/serviceImg/service2.png';
import service3 from '../../../assets/serviceImg/service3.png';
import service4 from '../../../assets/serviceImg/service4.png';
import service5 from '../../../assets/serviceImg/service5.png';
import service6 from '../../../assets/serviceImg/service6.png';
import Service from './Service'


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'MO999 / GLOSS BLACK RED MILLED',
            available: 'AVAILABLE IN SIZES: 20x10 , 22x12',
            quantity: 'Available Quantity: 100 pis',
            order: 'Miminum Order: 20000 pis',
            price: 'Price: 300$',
            description: 'Moto Metal Milled Gloss Black & Red MO999 Wheels feature an aggressive rotational style and thick spokes that fill up the center and leaves a window with sharp angles.',
            img: service1
        },
        {
            _id: 2,
            name: 'GENERAL ALTIMAX 365 AW TIRE',
            available: 'AVAILABLE IN SIZES: 20x10 , 22x12',
            quantity: 'Available Quantity: 5000 pis',
            order: 'Miminum Order: 50 pis',
            price: 'Price: 250$',
            description: 'The General Altimax 365 AW is all-weather tire, with a 3 peak mountain and snowflake (3PMSF) having a level of snow traction of a winter / snow tire, yet can be used all year long. This tire comes in H and V speed rated sizes to fit cars and SUVs.',
            img: service2
        },
        {
            _id: 3,
            name: 'CONTINENTAL PURECONTAC LS TIRE',
            available: 'AVAILABLE IN SIZES: 20x10 , 22x12',
            quantity: 'Available Quantity: 10000 pis',
            order: 'Miminum Order: 50 pis',
            price: 'Price: 150$',
            description: 'The Continental PureContact LS is all season tire that comes in H and V speed rated sizes for cars and some SUVs. It has a 70,000 mile treadwear warranty, plus flat tire road side assistance and road hazard warranties, too.',
            img: service3
        },
        {
            _id: 4,
            name: 'NOKIN ONE TIRE',
            available: 'AVAILABLE IN SIZES: 20x10 , 22x12',
            quantity: 'Available Quantity: 90000 pis',
            order: 'Miminum Order: 100 pis',
            price: 'Price: 220$',
            description: 'The Nokian One is an all-season tire for cars and SUVS and comes in T, H, and V speed ratings. The tire has a novel feature of pot- hole protection using aramid fibers to reinforce the sidewall and Nokian will replace the tire if damaged beyond repair.',
            img: service4
        },
        {
            _id: 5,
            name: 'BFGOODRICH ADVANTAGE CONTROL',
            available: 'AVAILABLE IN SIZES: 20x10 , 22x12',
            quantity: 'Available Quantity: 70000 pis',
            order: 'Miminum Order: 200 pis',
            price: 'Price: 100$',
            description: 'The BFGoodrich Advantage Control All Season comes in H and T speed ratings for cars and SUV. H speed rated tires have a treadwear warranty of 75,000 miles, and V are 65,000 miles.',
            img: service5
        },
        {
            _id: 6,
            name: 'NEXON N5000 PLATINUM TIRE',
            available: 'AVAILABLE IN SIZES: 20x10 , 22x12',
            quantity: 'Available Quantity: 80000 pis',
            order: 'Miminum Order: 200 pis',
            price: 'Price: 200$',
            description: 'The Nexen N5000 Platinum comes in a wide range of sizes to fit cars and SUVs, including performance vehicles. Speed ratings range from H and V tires with a 70,000 mile treadwear warranty to 55,000 miles for the W tires. All come with a road hazard warranty.',
            img: service6
        },
    ];
    return (
        <div className='my-8'>
            <div className='text-center'>
                <hr /> <br />
                <h3 className='text-primary  text-3xl font-bold uppercase 
                mb-5'>Our Products</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;