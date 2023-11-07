import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";

const myReducer = combineReducers({
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
