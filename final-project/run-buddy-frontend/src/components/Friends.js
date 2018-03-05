import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Chip} from 'react-materialize'

class Friends extends React.Component {


   render() {
     let friends = this.props.currentUser.friends.map(friend => <div key={friend.email}><Chip >{friend.name}</Chip><br></br></div>);

     let friendIds = this.props.currentUser.friends.map(friend => parseInt(friend.user_id) || friend.id)
     let fofIds = this.props.currentUser.associations_with_workouts.map(friend => parseInt(friend.user_id) || friend.id)
      console.log('My Friends:', friends);
     //console.log('Friend Ids', friendIds);
      console.log('Friend of Friend Ids', fofIds);

     let differentIds = fofIds.filter( (id) => {
       return !friendIds.includes(id)
     })

     //console.log('Different Ids', differentIds);

     let fof = this.props.currentUser.associations_with_workouts.filter(friend => differentIds.includes(friend.id || parseInt(friend.user_id)))

     let fofDisplay = fof.map(friend => <div key={friend.email}><Chip >{friend.name}</Chip><br></br></div>)

     console.log( 'Friend Display Page, FoF:', fof);
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
