import { ADD_TO_FAVOURITES } from "../actions";

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "DELETE_FAVOURITE":
      return {
        ...state,

        favourites: state.favourites.filter(
          (job, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
