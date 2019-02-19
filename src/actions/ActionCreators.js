import axios from "axios";
import history from "../history";
import {
  loginUser,
  notValidUser,
  fetchPlanetList,
  fetchSearchData,
  logOut
} from "./Action";
const API = "https://swapi.co/api";

export const processUserDetails = data => {
  return dispatch => {
    axios.get(`${API}/people/?search=${data.username}`).then(res => {
      const persons = res.data;
      if (persons.results) {
        if (data.password === persons.results[0].birth_year) {
          alert("valid user");
          dispatch(loginUser(true));
          history.push("/");
        } else {
          alert("not valid password");
          dispatch(notValidUser(false));
        }
      } else {
        alert("not valid username");
        dispatch(notValidUser(false));
      }
    });
  };
};

export const fetchPlanetsList = () => {
  return dispatch => {
    axios.get(`${API}/planets/`).then(res => {
      const personsList = res.data;
      dispatch(fetchPlanetList(personsList.results));
    });
  };
};

export const searchPlanetByName = name => {
  return dispatch => {
    axios.get(`${API}/planets/?search=${name}`).then(res => {
      const listData = res.data;
      if (listData.results && listData.results.length) {
        dispatch(fetchSearchData(listData.results));
      } else {
        alert("not valid search");
      }
    });
  };
};

export const userLogout = () => {
  return dispatch => {
    dispatch(logOut());
    history.push("/");
  };
};
