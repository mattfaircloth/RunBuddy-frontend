import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Logout from './Logout'

const NavBar = (props) => {
  return (
    <div>
      <Navbar brand='RunBuddy' right>
         <NavItem href='/login'>Login</NavItem>
         <NavItem>
           <Logout />
         </NavItem>
      </Navbar>
    </div>
  )
}

export default NavBar;
