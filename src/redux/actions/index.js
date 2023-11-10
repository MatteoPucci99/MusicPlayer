export const SEARCH = "SEARCH";

export const GET_DETAILS = "GET_DETAILS";

export const SELECTED = "SELECTED";

export const getDeatilsAction = (details) => {
  return {
    type: GET_DETAILS,
    payload: details,
  };
};

export const searchAlbumAction = (album) => {
  return {
    type: SEARCH,
    payload: album,
  };
};

export const selectedAction = (album) => {
  return {
    type: SELECTED,
    payload: album,
  };
};
