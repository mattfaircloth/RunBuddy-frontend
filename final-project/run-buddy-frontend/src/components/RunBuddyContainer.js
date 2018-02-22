import React from 'react'
import { Route, Switch } from 'react-router-dom';
import WorkoutsContainer from './WorkoutsContainer'
import WorkoutForm from './WorkoutForm'
import NavBar from './NavBar'

class RunBuddyContainer extends React.Component {
  state = {
    workouts: []
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:3001/api/v1/workouts')
  //   .then(res => res.json())
  //   .then(data => this.setState({workouts: data}))
  // }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/runbuddy/add-workout" component={WorkoutForm} />
            <Route path="/runbuddy/workouts" component={WorkoutsContainer} />
          </Switch>
        </div>
      </div>
    )
  }

}

export default RunBuddyContainer
