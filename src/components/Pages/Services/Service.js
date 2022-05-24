import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img width={200} src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p className="card-description">{service.description}</p> <br />
                <h2 className="card-title">{service.name}</h2>
                <h4 className="card-title">{service.available}</h4>
                <h4 className="card-title">{service.quantity}</h4>
                <h4 className="card-title">{service.order}</h4>
                <h4 className="card-title">{service.price}</h4>
                <button class="btn btn-active btn-neutral">Order Now</button>

            </div>
        </div>
    );
};

export default Service;