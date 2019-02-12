import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import loginReducer from './reducer/loginReducer';
const store = createStore(
  combineReducers(
    {
      loginReducer
    }
  ),{},
  applyMiddleware(thunk)
);
export default store;
