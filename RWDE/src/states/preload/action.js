import { hideLoading, showLoading } from "react-redux-loading-bar";

import Users from "../../services/users";
import { authAction } from '../../states/auth/action';

const isPreloadActionType = {
    SET_PRELOAD: 'preload/set'
}

const preloadAction = {
    set: (preload) => ({
        type: isPreloadActionType.SET_PRELOAD,
        payload: preload,
    }),
}

// preload User Me
const asyncPreloadMe = () => async (dispatch) => {
    dispatch(showLoading());
    try {
    } catch (error) {
        dispatch(preloadAction.set(false));
    } finally {
        dispatch(hideLoading());
    }
}