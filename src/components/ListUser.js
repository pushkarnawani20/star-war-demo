import React, {Component} from 'react';
import List from './List';
class ListUser extends Component {
  render() {
    const data = this.props.data;
    const  searcValue = this.props.searcValue;
    return (
      <ul>
        {
          data.filter(li => `${li.name} ${li.climate} ${li.population}`.toUpperCase().indexOf(searcValue.toUpperCase()) >= 0)
          .map((list,index) =><List key ={index} listData={list}/>)
        }
      </ul>
    );
  }
}

export default ListUser;
