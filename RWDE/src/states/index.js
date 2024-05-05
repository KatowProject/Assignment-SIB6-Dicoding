import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authReducer from './auth/reducer';
import preload from './preload/reducer';
import threads from './threads/reducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        loadingBar: loadingBarReducer,
        preload,
        threads,
    },
});

export default store;