export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";

export const addToFavouritesAction = (job) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: job,
  };
};

export const deleteFavouriteAction = (index) => {
  return {
    type: DELETE_FAVOURITE,
    payload: index,
  };
};
