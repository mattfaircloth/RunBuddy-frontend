import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import withAuth from '../hocs/withAuth';
import {Slider, Slide, CardPanel, Row} from 'react-materialize'


class Home extends React.Component {

  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    console.log('STATE -> CURRENT USER:', this.props.currentUser)
    console.log('STATE -> CURRENT LOCATION', this.props.currentPosition)
    console.log('------------------------');
    const loggedIn = !!this.props.currentUser.name

    return (
      <div>
        <NavBar />
        <div>
          <div>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            {loggedIn ? (<div><h3>Welcome, {this.props.currentUser.name.split(" ")[0]}!</h3></div>) : null}
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Slider>
              <Slide src='RunningNYC.jpg'>

            <div>
              <div>
                <CardPanel>
                <Link to={'/runbuddy/runners'}>
                  <div className='welcome-text'>
                    <div><h2>Find a RunBuddy</h2></div>
                    <div>Are you looking for someone to run with?</div>
                  </div>
                </Link>
                </CardPanel>
              </div>
            </div>
            </Slide>
            <Slide src='pairrun.jpg'>
            <div>
              <div>
                <CardPanel>
                <Link to={'/runbuddy/workouts'}>
                  <div className='welcome-text'>
                    <div><h2>Find a Workout</h2></div>
                    <div>Find a Workout near you!</div>
                  </div>
                </Link>
                </CardPanel>
              </div>
            </div>
            </Slide>
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentPosition: state.currentPosition,
  }
}

export default withAuth(connect(mapStateToProps, actions)(Home));
