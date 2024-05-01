import Axios from './tools';

const getThreads = async () => {
    try {
        const response = await Axios.get('threads');
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const getThread = async (threadId) => {
    try {
        const response = await Axios.get(`threads/${threadId}`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const addThread = async (title, category = "", body) => {
    try {
        const response = await Axios.post('threads', { title, category, body });
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const upVote = async (threadId) => {
    try {
        const response = await Axios.post(`threads/${threadId}/up-vote`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const downVote = async (threadId) => {
    try {
        const response = await Axios.post(`threads/${threadId}/down-vote`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const cancelVote = async (threadId) => {
    try {
        const response = await Axios.post(`threads/${threadId}/neutral-vote`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

export default { getThreads, getThread, addThread, upVote, downVote, cancelVote };