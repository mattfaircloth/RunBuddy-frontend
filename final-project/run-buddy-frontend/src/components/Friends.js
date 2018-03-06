import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Chip, Modal} from 'react-materialize'
import FriendDetail from './FriendDetail'

class Friends extends React.Component {


   render() {
     let friends = this.props.currentUser.friends.map(friend => <FriendDetail key={friend.email} friend={friend} />);

     let friendIds = this.props.currentUser.friends.map(friend => parseInt(friend.user_id) || friend.id)
     let fofIds = this.props.currentUser.associations_with_workouts.map(friend => parseInt(friend.user_id) || friend.id)
      console.log('My Friends:', friends);
     //console.log('Friend Ids', friendIds);
      console.log('Association with Workout Ids', fofIds);

     let differentIds = fofIds.filter( (id) => {
       return !friendIds.includes(id)
     })


     let fof = this.props.currentUser.friends.map(friend => friend.friends).reduce((acc, friend) => acc.concat(friend))

     let newFriendIds = this.props.currentUser.friends.map(friend => friend.id)

     let filteredFoF = fof.filter(friend => !newFriendIds.includes(friend.id))

     //this.props.currentUser.associations_with_workouts.filter(friend => differentIds.includes(friend.id || parseInt(friend.user_id)))

     let fofDisplay = filteredFoF.map(friend => <FriendDetail key={friend.email} friend={friend} />)

     //console.log( 'Friend Display Page, Association with Workout:', fof);
     //debugger

     return (
       <div>
         <div>
         <h5>My Friends: </h5>
         {friends}
         </div>
         <div>
           <h5>Friends of Friends: </h5>
           {fofDisplay}
         </div>
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
