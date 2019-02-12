import axios from 'axios';

export function processUserDetails(data){
	return (dispatch) => {
    axios.get(`https://swapi.co/api/people/?search=${data.username}`)
    .then(res => {
      const persons = res.data;
      if(persons.results){
        if(data.password == persons.results[0].birth_year){
          alert("valid user");
          dispatch(loginSucess(true));
        }else{
          alert("not valid password");
          dispatch(notValidUser(false));
        }
      }else{
        alert("not valid username");
        dispatch(notValidUser(false));
      }
    });
  };
}
export function fetchList(){
  return (dispatch) => {
    axios.get(`https://swapi.co/api/planets/`)
    .then(res => {
      const personsList = res.data;
      dispatch(listValues(personsList.results));
    });
  };
}
export function loginSucess(val){
  return{
    type:"Login_Sucess",
    payload:val
  };
}
export function notValidUser(val){
  return{
    type:"Login_error",
    payload:val
  };
}
export function listValues(data){
  return{
    type:"Fetch_list",
    payload:data
  };
}
