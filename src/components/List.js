import React from 'react';
const User = (props) => {
  return (
    <li>
      <h4>Name:- {props.listData.name}</h4>
      <p>Climate:- {props.listData.climate}</p>
      <p>Population{props.listData.population}</p>
    </li>
  );
}

export default User;
