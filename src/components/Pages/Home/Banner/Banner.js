import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-500">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/bJR97wt/banner2.png" />
                <div>
                    <h1 class="text-5xl font-bold">Business Moves Better With Wheels</h1>
                    <p class="py-6">For over 80 years, the world’s best businesses have relied on Wheels’ fleet management and mobility solutions to help them reduce costs, increase productivity, enhance safety, boost sustainability and more.</p>
                    <button class="btn btn-primary">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;