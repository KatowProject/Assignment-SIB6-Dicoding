import Axios from 'axios';
import { tokenHandler } from '../utils/tokenHandler';

const axios = Axios.create({
    baseURL: 'https://forum-api.dicoding.dev/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenHandler.getToken()}`,
    },
});

export default axios;