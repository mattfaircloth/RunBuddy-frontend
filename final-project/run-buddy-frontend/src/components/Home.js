import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import withAuth from '../hocs/withAuth';


class Home extends React.Component {

  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    console.log('STATE -> CURRENT USER:', this.props.currentUser)
    console.log('STATE -> CURRENT LOCATION', this.props.currentPosition)
    console.log('------------------------');
    const loggedIn = !!this.props.currentUser.name
    var path = ""
    this.props.currentUser.workouts ? path = "/runbuddy/workouts" : path = "/runbuddy/add-workout"

    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <div className="ui two column stackable grid">
            {loggedIn ? (<div className="first header"><h1 className="welcome">Welcome to RunBuddy, {this.props.currentUser.name.split(" ")[0]}</h1></div>) : null}
            <div className="column">
              <div className="welcome-button">
                <Link to={path}>
                  <div className="welcome content">
                    <div className="header"><h2 className="welcome headers">Find a RunBuddy</h2></div>
                    <div className="description">Are you looking for someone to run with?</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="welcome-button">
                <Link to={'/runbuddy/workouts'}>
                  <div className="welcome content">
                    <div className="header"><h2 className="welcome headers">Find a Workout</h2></div>
                    <div className="description">Find a Workout near you!</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
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

export default withAuth(connect(mapStateToProps, actions)(Home));
