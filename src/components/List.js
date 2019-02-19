import React from "react";
const User = props => {
  return (
    <li className="col-md-4 col-sm-6">
      <div className="planetCard">
        <h4>Name:- {props.listData.name}</h4>
        <p>Climate:- {props.listData.climate}</p>
        <p>Population:- {props.listData.population}</p>
      </div>
    </li>
  );
};

export default User;
