import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Button, Icon, Card, CardTitle, CardPanel} from 'react-materialize'

class JoinedWorkoutItem extends React.Component {

  leaveWorkout = (e) => {
    const workout = this.props.workout
    const currentUser = this.props.currentUser
    const userWorkout = currentUser.user_workouts.find(uw => workout.id === uw.workout_id)
    const userWorkoutId = userWorkout.id
    //console.log('user workout id', userWorkoutId)

    this.props.deleteUserWorkout(userWorkoutId, workout.id)
    this.props.history.push(`/runbuddy/workouts`)
   }

   render() {
     //let user = this.props.currentUser.associations_with_workouts.filter(ass => ass.id || parseInt(ass.user_id) === this.props.workout.owner_id)

     const user = this.props.currentUser.associations_with_workouts.find(user => {
      if (user.user_id) {
        return parseInt(user.user_id) === this.props.workout.owner_id
       } else {
        return  user.id === this.props.workout.owner_id
       }
     })


     //debugger
     //console.log(user);
     console.log('User Workouts:', this.props.currentUser.user_workouts);
     return (
       <div className='workout-display-item'>
         <Card className='large'
           header={<CardTitle image='../nyc.jpg'><CardPanel className='host'>Host: {user.name}</CardPanel>

           </CardTitle>}
           actions={<Button waves='light' onClick={this.leaveWorkout}>Leave Workout<Icon left>close</Icon></Button>}>


             <p>Start Time: {this.props.workout.start_time}</p>
             <p>Date: {this.props.workout.date}</p>
             <p>Address: {this.props.workout.address}</p>
             <p>Distance: {this.props.workout.distance}</p>
             <p>Pace: {this.props.workout.pace}</p>




         </Card>

       </div>
     )
   }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(JoinedWorkoutItem));
