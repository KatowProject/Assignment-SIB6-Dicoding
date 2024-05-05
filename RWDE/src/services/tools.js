import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://forum-api.dicoding.dev/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});

export default axios;