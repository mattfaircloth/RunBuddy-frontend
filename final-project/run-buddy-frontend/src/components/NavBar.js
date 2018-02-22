import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

const NavBar = (props) => {
  return (
    <div>
      <Navbar brand='RunBuddy' right>
         <NavItem href='/login'>Login</NavItem>
         <NavItem href='/logout'>Logout</NavItem>
      </Navbar>
    </div>
  )
}

export default NavBar;
