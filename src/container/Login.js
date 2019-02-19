import React, { Component } from "react";
import { connect } from "react-redux";
import { processUserDetails } from "../Actions/ActionCreators";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let { username, password } = this.state;
    const user = {
      username,
      password
    };
    if (username === "") {
      alert("username can't be blank");
    } else if (password === "") {
      alert("password can't be blank");
    } else {
      this.props.authUser(user);
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="panel panel-default">
          <div className="panel-heading">Login</div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>UserName:</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    islogin: state.loginReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    authUser: data => dispatch(processUserDetails(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
