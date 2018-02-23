import React from 'react'

const WorkoutItem = (props) => {

  return (
    <div>
      <h4>Start Time: {props.workout.start_time}</h4>
      <h4>Date: {props.workout.date}</h4>
      <h4>Address: {props.workout.address}</h4>
      <h4>Distance: {props.workout.distance}</h4>
      <h4>Pace: {props.workout.pace}</h4>
      <h4>__________________________________</h4>
    </div>
  )
}

export default WorkoutItem
