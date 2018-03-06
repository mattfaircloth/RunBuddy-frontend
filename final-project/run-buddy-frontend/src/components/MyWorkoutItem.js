import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Card, CardTitle } from 'react-materialize'

class MyWorkoutItem extends React.Component {

   render() {
     return (
       <div className='workout-display-item'>
         <Card className='large'
           header={<CardTitle image='../Love.png'><p></p>

           </CardTitle>}
           >
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

export default withRouter(connect(mapStateToProps, actions)(MyWorkoutItem));
