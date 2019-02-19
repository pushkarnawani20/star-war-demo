import {
  FETCH_PLANET_LIST,
  FETCH_SEARCHLIST,
  CLEAR_SEARCH
} from "../Actions/Types";

const initialSate = {
  starPlanetList: [],
  searchList: []
};
const starReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_PLANET_LIST:
      state = {
        ...state,
        starPlanetList: action.payload
      };
      break;
    case FETCH_SEARCHLIST:
      state = {
        ...state,
        searchList: action.payload
      };
      break;
    case CLEAR_SEARCH:
      state = {
        ...state,
        searchList: []
      };
      break;
    default:
      break;
  }
  return state;
};
export default starReducer;
