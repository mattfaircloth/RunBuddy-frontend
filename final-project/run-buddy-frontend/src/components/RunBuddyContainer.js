import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

class RunBuddyContainer extends React.Component {
  state ={
    workouts: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/workouts')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <Navbar brand='RunBuddy' right>
	         <NavItem href='get-started.html'>Login</NavItem>
	         <NavItem href='components.html'>Logout</NavItem>
        </Navbar>
      </div>
    )
  }

}

export default RunBuddyContainer
