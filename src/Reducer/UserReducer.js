import { LOGIN_SUCCESS, LOGOUT_USER, LOGIN_ERROR } from "../Actions/Types";

const initialSate = {
  isLogin: false
};
const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = {
        ...state,
        isLogin: action.payload
      };
      break;
    case LOGIN_ERROR:
      state = {
        ...state,
        isLogin: action.payload
      };
      break;
    case LOGOUT_USER:
      state = {
        ...state,
        isLogin: false,
        starPlanetList: []
      };
      break;
    default:
      break;
  }
  return state;
};
export default userReducer;
