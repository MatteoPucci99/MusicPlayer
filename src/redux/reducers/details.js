import { GET_DETAILS } from "../actions";

const initialState = {
  detail: {},
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
