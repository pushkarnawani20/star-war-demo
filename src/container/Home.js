import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchList} from '../actions/action';
import ListUser from '../components/ListUser';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      searcValue:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const islogin = this.props.islogin.isLogin;
    if(islogin){
      this.props.fetchListData();
    }
  }

  handleChange(e){
    this.setState({
      searcValue:e.target.value
    })
  }
  render() {
    const {isLogin,listArray} = this.props.islogin;
    return (
      <div className="Home">
      {
        isLogin ? (
           <div className="homePage">
              <input type="text" className="form-control" placeholder="search" value={this.state.searcValue} onChange={this.handleChange}/>
              {listArray && listArray.length &&  <ListUser data={listArray} searcValue={this.state.searcValue}/>}
           </div>
         ) : (
           <h1 className="text-center">Welcome to home page </h1>
         )
       }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    islogin:state.loginReducer
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListData: () => dispatch(fetchList())
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);
