import { hideLoading, showLoading } from "react-redux-loading-bar";

import AuthAPI from "../../services/auth";
import UsersAPI from "../../services/users";

export const AuthActionType = {
    SET_USER: 'auth/set',
    CLEAR_USER: 'auth/clear',
}

export const authAction = {
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

    localStorage.setItem('token', response.data.token);

    const user = await UsersAPI.me();

    dispatch(authAction.set(user.data.user));
    dispatch(hideLoading());
}

const asyncRegister = ({ name, email, password }) => async (dispatch) => {
    dispatch(showLoading());

    const response = await AuthAPI.register(name, email, password);

    if (response.error) {
        dispatch(hideLoading());
        throw response.error;
    }

    dispatch(hideLoading());
}

const asyncLogout = () => async (dispatch) => {
    dispatch(authAction.clear());
    localStorage.removeItem('token');
}

export default { asyncLogin, asyncRegister, asyncLogout };
