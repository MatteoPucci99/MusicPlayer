import { SEARCH } from "../actions";

const initialState = {
  album: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
