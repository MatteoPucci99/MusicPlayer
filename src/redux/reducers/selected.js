import { SELECTED } from "../actions";

const initialState = {
  selected: [],
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    default:
      return state;
  }
};

export default selectedReducer;
