import counterReducer from '@Redux/slices/counterSlice';
import homeSlice from '@Redux/slices/homeSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  counter: counterReducer,
  home: homeSlice
});