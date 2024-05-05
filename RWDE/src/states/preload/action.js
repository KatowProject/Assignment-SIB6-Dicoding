import { hideLoading, showLoading } from "react-redux-loading-bar";

import Users from "../../services/users";
import { authAction } from '../../states/auth/action';

export const isPreloadActionType = {
    SET_PRELOAD: 'preload/set'
}

export const preloadAction = {
    set: (preload) => ({
        type: isPreloadActionType.SET_PRELOAD,
        payload: preload,
    }),
}

export const asyncPreloadMe = () => async (dispatch) => {
    dispatch(showLoading());
    try {
        let value = null;
        if (localStorage.getItem('token')) {
            value = await Users.me();
            dispatch(authAction.set(value));
        }

        dispatch(preloadAction.set(true));
    } catch (error) {
        dispatch(preloadAction.set(false));
    } finally {
        dispatch(hideLoading());
    }
}