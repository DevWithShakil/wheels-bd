import React from 'react';
import world from '../../../assets/clients/world.png';
import project from '../../../assets/clients/project.png';
import feedback from '../../../assets/clients/feedback.png';

import Service from './Client'


const HappyClient = () => {
    const services = [
        {
            _id: 1,
            name: '50+',
            flag: 'Countries',
            img: world
        },
        {
            _id: 2,
            name: '1000+',
            flag: 'Customer Deal',
            img: project
        },

        {
            _id: 4,
            name: '3000+',
            flag: 'Feedback',
            img: feedback
        },
    ];
    return (
        <div className='my-8'>
            <div className='text-center'>
                <hr /> <br />
                <h3 className='text-primary  text-3xl font-bold uppercase 
                mb-5'>Business Summary</h3>
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

export default HappyClient;