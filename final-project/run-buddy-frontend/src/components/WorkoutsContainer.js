import React from 'react'
import Map from './Map'
import FriendWorkout from './FriendWorkout'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Friends from './Friends'
import {Row, Col, Dropdown, Button, NavItem} from 'react-materialize'

class WorkoutsContainer extends React.Component {

  state = {
    allWorkouts: [],
    searchTerm: '',
  }



  componentDidMount() {
    if (this.props.currentPosition.latitude) {

      this.setState({ center: this.props.currentPosition })
    } else {
      this.props.getLocation();
    }
    this.props.getAllWorkouts()
    .then(res => this.setState({ allWorkouts: res }))
  }

  handleMarkerClick = e => {
    const workoutAddress = this.state.allWorkouts.find(workout => workout.address === e.currentTarget.attributes.name.textContent)
     //const workoutAddresses = this.props.currentUser.available_workouts.map(workouts => workouts.find(workout => workout.address === e.currentTarget.attributes.name.textContent))
     //const workout = workoutAddresses.filter(add => add !== undefined)

    const workoutSlug = workoutAddress.address.split(" ").join("-")
    this.props.history.push(`/runbuddy/workouts/${workoutSlug}`);
  }

  handleInput = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }


  render() {
    return(
      <div>
        <Switch>
          <Route path="/runbuddy/workouts/:slug" render={(args) =>  {
            const workout = this.state.allWorkouts.find(workout => workout.address.split(" ").join("-") === args.match.params.slug)

            // const workoutAddresses = this.props.currentUser.available_workouts.map(workouts => workouts.find(workout => workout.address.split(" ").join("-") === args.match.params.slug))
            // const workout = workoutAddresses.filter(add => add !== undefined)
                return <FriendWorkout workout={workout} currentUser={this.props.currentUser} allWorkouts={this.state.allWorkouts}/>
                }} />
        </Switch>
        <Row></Row>

        <Row className='row-main'>
          <Row></Row>
          <Row></Row>
          <Row>
            <Col s={4}>
            </Col>
            <Col s={6}>
              <form className='search-bar-2'>
                <input type='search' placeholder='Search for Workouts by Pace' onChange={this.handleInput}></input>
              </form>
            </Col>
            <Col s={2}></Col>
          </Row>
          <Col s={2}>

          </Col>
          <Col  s={7} className='map-main'>
            <Map  handleMarkerClick={this.handleMarkerClick} allWorkouts={this.state.allWorkouts} searchTerm={this.state.searchTerm}/>
          </Col>
          <Col  s={3} className='friends-main'>
            <Friends />
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(WorkoutsContainer));
