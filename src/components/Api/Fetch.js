import axios from 'axios';
import React from 'react';

const Fetch = axios.create({
    baseURL: "http://localhost:5000"
})

export default Fetch;