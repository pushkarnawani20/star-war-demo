const initialSate = {
  isLogin:false,
  listArray:[]
}
const loginReducer = (state = initialSate,action) => {
  switch (action.type) {
    case "Login_Sucess":
      state = {
        ...state,
        isLogin:action.payload
      };
      break
    case "Login_error":
      state = {
        ...state,
        isLogin:action.payload
      };
    case "Fetch_list":
        state = {
          ...state,
          listArray:action.payload
        };
    break;
    default:
    break;
  }
  return state;
}
export default loginReducer;
