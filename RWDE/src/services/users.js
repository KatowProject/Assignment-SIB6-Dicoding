import Axios from './tools';

const getUsers = async () => {
    try {
        const response = await Axios.get('users');
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const getUser = async (userId) => {
    try {
        const response = await Axios.get(`users/${userId}`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const me = async () => {
    try {
        const response = await Axios.get('users/me');
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

export default { getUsers, getUser, me };