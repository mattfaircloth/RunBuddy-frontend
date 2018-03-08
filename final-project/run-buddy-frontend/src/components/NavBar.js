import React from 'react'
import {Navbar, NavItem, SideNav, SideNavItem, Button, MediaBox} from 'react-materialize'
import Logout from './Logout'
import { connect } from 'react-redux'
import * as actions from '../actions/index';

class NavBar extends React.Component {


  render() {
    return (
      <div>
        <Navbar className='home-title' brand='RunBuddy' href='/home' right>
          <NavItem href='/runbuddy/add-workout'>Create a Workout</NavItem>
          <NavItem href='/runbuddy/workouts'>Find a Workout</NavItem>
          <NavItem href='/runbuddy/myworkouts'>My Workouts</NavItem>
        <SideNav
          trigger={<Button className='profile-button'>Profile</Button>}
           options={{ closeOnClick: true }} >

           <SideNavItem userView
              user={{
                background: '/runningsilhouettes.jpg',

                name: this.props.currentUser.name,
                email: this.props.currentUser.email
              }}
            />
          <SideNavItem href='/runbuddy/runners'>Find a Runner</SideNavItem>
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
