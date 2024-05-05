import { hideLoading, showLoading } from "react-redux-loading-bar"

import threadsAPI from "../../services/threads";

export const ThreadsActionType = {
    CREATE: 'threads/create',
    SET: 'threads/set',
    UP_VOTE: 'threads/upVote',
    DOWN_VOTE: 'threads/downVote',
    CANCEL_VOTE: 'threads/cancelVote',
    UPVOTE_COMMENT: 'threads/upVoteComment'
}

export const threadsAction = {
    create(thread) {
        return {
            type: ThreadsActionType.CREATE,
            payload: {
                thread,
            },
        }
    },
    set(threads) {
        return {
            type: ThreadsActionType.SET,
            payload: {
                threads,
            },
        }
    },
    upVoteThread(userId, threadId) {
        return {
            type: ThreadsActionType.UP_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    },
    cancelVoteThread(userId, threadId) {
        return {
            type: ThreadsActionType.CANCEL_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    },
    downVoteThread(userId, threadId) {
        return {
            type: ThreadsActionType.DOWN_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    }
}

function asyncCreateThreads({ title, category, body }) {
    return async (dispatch) => {
        dispatch(showLoading())
        const { status, message, thread } = await threadsAPI.newThreats({
            title, category, body
        }
        )
        if (status === 'failed') {
            dispatch(hideLoading())
            throw new Error(message)
        }
        dispatch(threadsAction.create(thread))
        dispatch(hideLoading())
    }
}

function asyncGetThreads() {
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const threads = await threadsAPI.getThreads();
            console.log(threads)

            dispatch(threadsAction.set(threads.data.threads))
        } catch (error) {
            dispatch(hideLoading())
        } finally {
            dispatch(hideLoading())
        }
    }
}

export default { asyncCreateThreads, asyncGetThreads }