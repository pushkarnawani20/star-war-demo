import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./Reducer/UserReducer";
import starReducer from "./Reducer/StarReducer";
const store = createStore(
  combineReducers({
    user: userReducer,
    stars: starReducer
  }),
  {},
  applyMiddleware(thunk)
);
export default store;
