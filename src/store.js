// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import starWarsReducer from './slices/starWarsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    starWars: starWarsReducer
  }
});

export default store;
