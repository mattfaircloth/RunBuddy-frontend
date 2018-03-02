import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class MyWorkoutItem extends React.Component {

   render() {
     return (
       <div>
         <div>
           <p>Start Time: {this.props.workout.start_time}</p>
           <p>Date: {this.props.workout.date}</p>
           <p>Address: {this.props.workout.address}</p>
           <p>Distance: {this.props.workout.distance}</p>
           <p>Pace: {this.props.workout.pace}</p>

         </div>
         <div>
           <p>__________________________________</p>
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

export default withRouter(connect(mapStateToProps, actions)(MyWorkoutItem));
