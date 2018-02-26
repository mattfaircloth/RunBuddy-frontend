import React from 'react'

const WorkoutItem = (props) => {

  return (
    <div>
      <p>Start Time: {props.workout.start_time}</p>
      <p>Date: {props.workout.date}</p>
      <p>Address: {props.workout.address}</p>
      <p>Distance: {props.workout.distance}</p>
      <p>Pace: {props.workout.pace}</p>
      <p>__________________________________</p>
    </div>
  )
}

export default WorkoutItem
