import { hideLoading, showLoading } from "react-redux-loading-bar";

import AuthAPI from "../../services/auth";
import UsersAPI from "../../services/users";

const AuthActionType = {
    SET_USER: 'auth/set',
    CLEAR_USER: 'auth/clear',
}

const authAction = {
    set: (user) => ({
        type: AuthActionType.SET_USER,
        payload: user,
    }),
    clear: () => ({
        type: AuthActionType.CLEAR_USER,
    }),
}

const asyncLogin = ({ email, password }) => async (dispatch) => {
    dispatch(showLoading());

    const response = await AuthAPI.login(email, password);

    if (response.error) {
        dispatch(hideLoading());
        throw response.error;
    }

    localStorage.setItem('token', response.token);

    const user = await UsersAPI.me();

    dispatch(hideLoading());
    dispatch(authAction.set(user));
}

const asyncRegister = ({ email, password }) => async (dispatch) => {
    dispatch(showLoading());

    const response = await AuthAPI.register(email, password);

    if (response.error) {
        dispatch(hideLoading());
        throw response.error;
    }

    localStorage.setItem('token', response.token);

    const user = await UsersAPI.me();

    dispatch(hideLoading());
    dispatch(authAction.set(user));
}

const asyncLogout = () => async (dispatch) => {
    dispatch(authAction.clear());
    localStorage.removeItem('token');
}

export { AuthActionType, authAction, asyncLogin, asyncRegister, asyncLogout };
