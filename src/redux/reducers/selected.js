import { SELECTED } from "../actions";

const initialState = {
  selected: false,
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default selectedReducer;
