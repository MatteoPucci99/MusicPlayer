import { combineReducers, configureStore } from "@reduxjs/toolkit";

import searchReducer from "../reducers/search";
import detailsReducer from "../reducers/details";
import selectedReducer from "../reducers/selected";

const myReducer = combineReducers({
  search: searchReducer,
  details: detailsReducer,
  selected: selectedReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
