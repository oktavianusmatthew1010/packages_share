import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;