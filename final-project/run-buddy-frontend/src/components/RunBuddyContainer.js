import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WorkoutsContainer from './WorkoutsContainer'
import WorkoutForm from './WorkoutForm'
import MyWorkoutsContainer from './MyWorkoutsContainer'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import withAuth from '../hocs/withAuth'

class RunBuddyContainer extends React.Component {


  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/runbuddy/add-workout" component={WorkoutForm} />
            <Route path="/runbuddy/workouts" component={WorkoutsContainer} />
            <Route path="/runbuddy/myworkouts" component={MyWorkoutsContainer} />
          </Switch>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentPosition: state.currentPosition
  }
}

export default connect(mapStateToProps, actions)(withAuth(RunBuddyContainer));
