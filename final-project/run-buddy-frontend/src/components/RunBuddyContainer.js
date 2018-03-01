import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WorkoutsContainer from './WorkoutsContainer'
import WorkoutForm from './WorkoutForm'
import MyWorkoutsContainer from './MyWorkoutsContainer'
import RunnersContainer from './RunnersContainer'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import withAuth from '../hocs/withAuth'
import { withRouter } from 'react-router'

class RunBuddyContainer extends React.Component {


  render() {
    return (
      <div>
        <NavBar />
        <div className='runbuddy-main-container'>
          <Switch>
            <Route exact path="/runbuddy/add-workout" component={WorkoutForm} />
            <Route path="/runbuddy/runners" component={RunnersContainer} />
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

export default withRouter(connect(mapStateToProps, actions)(withAuth(RunBuddyContainer)));
