import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
class App extends Component {
  render() {
    const islogin = this.props.islogin.isLogin;
    return (
      <div className="App">
        <Router>
            <>
              <ul className="navBar">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  { islogin ? (<Link to="/login">Logout</Link>) : null }
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
const mapStateToProps = (state) => {
  return {
    islogin:state.loginReducer
  };
};

export default connect(mapStateToProps,null)(App);
