import * as types from "./Types";

export const loginUser = isLogin => ({
  type: types.LOGIN_SUCCESS,
  payload: isLogin
});
export const logOut = () => ({ type: types.LOGOUT_USER });

export const notValidUser = isValidUser => ({
  type: types.LOGIN_ERROR,
  payload: isValidUser
});

export const fetchPlanetList = dataList => ({
  type: types.FETCH_PLANET_LIST,
  payload: dataList
});

export const fetchSearchData = data => ({
  type: types.FETCH_SEARCHLIST,
  payload: data
});

export const clearSearchList = () => ({
  type: types.CLEAR_SEARCH
});
