import Axios from './tools';

const login = async (email, password) => {
    try {
        const response = await Axios.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const register = async (email, password) => {
    try {
        const response = await Axios.post('/auth/register', { email, password });
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

export default { login, register };
