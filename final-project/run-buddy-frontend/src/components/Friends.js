import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Chip} from 'react-materialize'

class Friends extends React.Component {


   render() {
     let friends = this.props.currentUser.friends.map(friend => <div key={friend.id}><Chip >{friend.name}</Chip><br></br></div>);

     let friendIds = this.props.currentUser.friends.map(friend => friend.id)
     let fofIds = this.props.currentUser.associations_with_workouts.map(friend => friend.id)
     // console.log(friendIds);
     // console.log(fofIds);

     let differentIds = fofIds.filter( (id) => {
       return !friendIds.includes(id)
     })

     //console.log(differentIds);

     let fof = this.props.currentUser.associations_with_workouts.filter(friend => differentIds.includes(friend.id))

     let fofDisplay = fof.map(friend => <div key={friend.id}><Chip >{friend.name}</Chip><br></br></div>)

     //console.log(fof);
     //{fofDisplay}

     return (
       <div>
         <div>
         <h5>My Friends: </h5>
         {friends}
         </div>
         <div>
           <h5>Friends of Friends: </h5>

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
