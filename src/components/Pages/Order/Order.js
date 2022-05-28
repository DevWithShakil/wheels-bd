import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Fetch from '../../Api/Fetch';

const Order = () => {
    const { id } = useParams()
    const [services, setService] = useState({})
    const { data, isLoading } = useQuery(['services', id], () => {
        Fetch(`services/${id}`)
            .then(response => {
                setService(response.data)
            })
    });
    return (
        <div>

        </div>
    );
};

export default Order;