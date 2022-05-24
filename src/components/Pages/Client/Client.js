import React from 'react';

const Client = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Business" className="rounded-xl" width={150} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-5xl">{service.name}</h2>
                <h4 className="card-title font-bold text-3xl">{service.flag}</h4>

            </div>
        </div>
    );
};

export default Client;