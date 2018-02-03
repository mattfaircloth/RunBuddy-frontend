import React from 'react';

const Navbar = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">EPL 2017/2018</span>
      <div className="navbar">
        <form>
          <input type='search' placeholder='Search for a Team'></input>
        </form>

      </div>

    </div>
  )
}

export default Navbar
