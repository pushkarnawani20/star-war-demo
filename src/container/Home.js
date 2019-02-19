import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPlanetsList,
  searchPlanetByName
} from "../Actions/ActionCreators";
import { clearSearchList } from "../Actions/Action";
import ListUser from "../Components/ListUser";
import StarPlanetList from "../Components/StarPlanetList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnkeyPress = this.handleOnkeyPress.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    const { user } = this.props.userList;
    if (user.isLogin) {
      this.props.fetchPlanetsData();
    }
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }
  handleOnkeyPress(e) {
    if (e.key === "Enter") {
      let { searchValue } = this.state;
      if (searchValue !== "") {
        this.props.searchPlanetByInputData(searchValue);
      } else {
        alert("please enter value for search");
      }
    }
  }
  clearSearch() {
    this.setState({
      searchValue: ""
    });
    this.props.clearSearch();
  }
  render() {
    const { stars, user } = this.props.userList;
    const { searchValue } = this.state;
    const optionList = stars.starPlanetList.map((li,index) =>
        <option key={index}>{li.name}</option>
    );
    return (
      <div className="Home">
        {user.isLogin ? (
          <div className="homePage">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search"
                value={this.state.searchValue}
                onChange={this.handleChange}
                onKeyPress={this.handleOnkeyPress}
                list="users"
              />
              <datalist id="users">
                {optionList}
              </datalist>
              {searchValue !== "" ? (
                <div
                  className="glyphicon glyphicon-remove clearIcon"
                  onClick={this.clearSearch}
                />
              ) : null}
            </div>
            {stars.starPlanetList &&
              !!stars.starPlanetList.length &&
              !stars.searchList.length && (
                <ListUser
                  data={stars.starPlanetList}
                  searchValue={this.state.searchValue}
                />
              )}
            {stars.searchList && !!stars.searchList.length && (
              <StarPlanetList listData={stars.searchList} />
            )}
          </div>
        ) : (
          <h1 className="text-center">Welcome to home page </h1>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPlanetsData: () => dispatch(fetchPlanetsList()),
    searchPlanetByInputData: name => dispatch(searchPlanetByName(name)),
    clearSearch: () => dispatch(clearSearchList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
