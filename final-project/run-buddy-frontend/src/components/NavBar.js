import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Logout from './Logout'

const NavBar = (props) => {
  return (
    <div>
      <Navbar brand='RunBuddy' href='/runbuddy/workouts' right>
        <NavItem href='/runbuddy/add-workout'>New Workout</NavItem>
        <NavItem href='/runbuddy/workouts'>Join a Workout</NavItem>
        <NavItem href='/runbuddy/myworkouts'>My Workouts</NavItem>
         <NavItem href='/login'>Login</NavItem>
         <NavItem>
           <Logout />
         </NavItem>
      </Navbar>
    </div>
  )
}

export default NavBar;
