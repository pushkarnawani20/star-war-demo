import React, { Component } from "react";
import List from "./List";
class ListUser extends Component {
  render() {
    const {searchValue,data} = this.props;
    return (
      <ul className="row">
        {data
          .filter(
            li =>
              `${li.name} ${li.climate} ${li.population}`
                .toUpperCase()
                .indexOf(searchValue.toUpperCase()) >= 0
          )
          .map((list, index) => (
            <List key={index} listData={list} />
          ))}
      </ul>
    );
  }
}

export default ListUser;
