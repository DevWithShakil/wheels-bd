import React from 'react';
import brand1 from '../../../assets/brands/brand1.jpg'
import brand2 from '../../../assets/brands/brand2.jpg'
import brand3 from '../../../assets/brands/brand3.jpg'
import brand4 from '../../../assets/brands/brand4.jpg'
import brand5 from '../../../assets/brands/brand5.jpg'
import brand6 from '../../../assets/brands/brand6.jpg'

const Brands = () => {
    return (
        <div>
            <div className='my-8'>
                <div className='text-center'>
                    <hr /> <br />
                    <h3 className='text-primary mt-5 text-3xl font-bold uppercase 
                mb-5'>Available Brands</h3>
                    <div>
                        <div className='ml-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-100'>
                            <figure><img src={brand1} alt="Brands" /></figure>
                            <figure><img src={brand2} alt="Brands" /></figure>
                            <figure><img src={brand3} alt="Brands" /></figure>
                            <figure><img src={brand4} alt="Brands" /></figure>
                            <figure><img src={brand5} alt="Brands" /></figure>
                            <figure><img src={brand6} alt="Brands" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Brands;