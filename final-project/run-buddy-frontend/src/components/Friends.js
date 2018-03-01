import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Button, Icon, Chip} from 'react-materialize'

class Friends extends React.Component {


   render() {
     let friends = this.props.currentUser.friends.map(friend => <Chip key={friend.id}>{friend.name}</Chip>);
     return (
       <div>
         <h5>My Friends: </h5>
         {friends}
       </div>
     )
   }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(Friends));
