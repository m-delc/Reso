import React from 'react'


function NavBar() {
    return(
      <div className = "nav-bar">
          <h2>Navigate</h2>
          <div id="navigation">
          <button>Make A Reservation</button>
          <button>Search For Existing Reservation</button>
          <button>About</button>
          </div>
      </div>
    )

}

export default NavBar;