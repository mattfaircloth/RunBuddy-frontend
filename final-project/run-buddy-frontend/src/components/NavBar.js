import React from 'react'
import {Navbar, NavItem, SideNav, SideNavItem, Button} from 'react-materialize'
import Logout from './Logout'
import { connect } from 'react-redux'
import * as actions from '../actions/index';

class NavBar extends React.Component {


  render() {
    console.log('Navbar', this.props);
    return (
      <div>
        <Navbar brand='RunBuddy' href='/runbuddy/workouts' right>
          <NavItem href='/runbuddy/add-workout'>New Workout</NavItem>
          <NavItem href='/runbuddy/workouts'>Join a Workout</NavItem>
          <NavItem href='/runbuddy/myworkouts'>My Workouts</NavItem>
        <SideNav
          trigger={<Button>Profile</Button>}
           options={{ closeOnClick: true }} >

           <SideNavItem userView
              user={{
                background: '/runningsilhouettes.jpg',

                name: this.props.currentUser.name,
                email: this.props.currentUser.email
              }}
            />

          <SideNavItem href='/login'>Login</SideNavItem>
          <SideNavItem href='/signup'>Signup</SideNavItem>
          <SideNavItem>
            <Logout />
          </SideNavItem>
        </SideNav>
      </Navbar>
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

export default connect(mapStateToProps, actions)(NavBar);
