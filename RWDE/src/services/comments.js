import Axios from './tools';

const addComment = async (threadId, comment) => {
    try {
        const response = await Axios.post(`threads/${threadId}/comments`, {
            content: comment,
        });
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
};

const upVote = async (threadId, commentId) => {
    try {
        const response = await Axios.post(`threads/${threadId}/comments/${commentId}/up-vote`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
};

const downVote = async (threadId, commentId) => {
    try {
        const response = await Axios.post(`threads/${threadId}/comments/${commentId}/down-vote`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

const cancelVote = async (threadId, commentId) => {
    try {
        const response = await Axios.post(`threads/${threadId}/comments/${commentId}/neutral-vote`);
        return response.data;
    } catch (error) {
        return { error: error.response.data };
    }
}

export default { addComment, upVote, downVote, cancelVote };