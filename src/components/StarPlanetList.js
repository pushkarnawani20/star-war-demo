import React from "react";
const StarPlanetList = props => {
  let displayData = props.listData[0];

  return (
    <div className="planetDetail">
      <h4>Name:- {displayData.name}</h4>
      <p>Climate:- {displayData.climate} </p>
      <p>Population:- {displayData.population}</p>
      <p>Gravity:-{displayData.gravity}</p>
      <p>Terrain:-{displayData.terrain}</p>
      <p>Surface Water:-{displayData.surface_water}</p>
      <p>Orbital Period:-{displayData.orbital_period}</p>
      <p>Rotation Period:-{displayData.rotation_period}</p>
    </div>
  );
};

export default StarPlanetList;
