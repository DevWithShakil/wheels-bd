import React, { useEffect, useState } from 'react';
import Fetch from '../../Api/Fetch';
import Service from './Product'


const Products = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        Fetch('services')
            .then(response => {
                console.log(response.data);
                setServices(response.data)
            })
    }, [])

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

export default Products;