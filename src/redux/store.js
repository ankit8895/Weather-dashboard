import { configureStore } from '@reduxjs/toolkit';
import { weeklyDetailsReducer } from './reducers/weatherReducer';

const store = configureStore({
  reducer: {
    weeklyDetailsList: weeklyDetailsReducer,
  },
});

export default store;
