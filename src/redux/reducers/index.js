const initialState = {
  jobs: {
    favourites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favourites: state.jobs.favourites.concat(action.payload),
        },
      };
    case "DELETE_FAVOURITE":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favourites: state.jobs.favourites.filter(
            (job, index) => index !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
