import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Link } from "react-router-dom";
import { userLogout } from "../Actions/ActionCreators";
import history from "../history";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  render() {
    const { user } = this.props.userList;
    return (
      <div className="App">
        <Router history={history}>
          <>
            <ul className="navBar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{!user.isLogin ? <Link to="/login">Login</Link> : null}</li>
              <li>
                {user.isLogin ? (
                  <button onClick={this.props.logout}>Logout</button>
                ) : null}
              </li>
            </ul>
            <section className="container">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </section>
          </>
        </Router>
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
    logout: () => dispatch(userLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
