import React from 'react';

const Vistors = () => {
    return (
        <div>
            <div className='text-center'>
                <hr /> <br />
                <h3 className='text-primary mt-5 text-3xl font-bold uppercase 
                mb-5'>Our Customers</h3>
            </div>
            <div>
                <div class="stats shadow lg:w-full">

                    <div class="stat place-items-center">
                        <div class="stat-title">Total Sell</div>
                        <div class="stat-value">$30001K</div>
                        <div class="stat-desc">From January 1st to April 1st</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">Our Users</div>
                        <div class="stat-value text-accent">2,2000</div>
                        <div class="stat-desc text-accent">↗︎ 40 (2%)</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,500</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Vistors;