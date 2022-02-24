import { combineReducers, configureStore } from '@reduxjs/toolkit'
import starWarsReducer from './features/StarWarsSlice';

const rootReducer = combineReducers({
    starWars: starWarsReducer
  });
  
export const store = configureStore({
  reducer: {rootReducer},
})