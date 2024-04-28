import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});

export default axios;