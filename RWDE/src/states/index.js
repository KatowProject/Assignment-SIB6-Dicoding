import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authReducer from './auth/reducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        loadingBar: loadingBarReducer,
    },
});

export default store;