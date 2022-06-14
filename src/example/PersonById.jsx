import React, { Component, Fragment } from "react";

import UserList from '../components/lists/userlist/UserList';

// API
import  ApiServices  from  '../_services/apiServices';
const  Api  =  new  ApiServices();

class PersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {

    // Usering API in this
    Api.getDataById(5).then(result => { 
      console.log(result);
      this.setState({
       persons: [result.data] 
      })  
    });
      
  } 

  render() {
    return (
        <Fragment>
            <UserList data={this.state.persons}  classes="list-group list-unstyled text-muted  mb-2 text-left w-100 bg-white" itemclasses="pb-3"/>
        </Fragment>
    )
  }
}

export default PersonList;