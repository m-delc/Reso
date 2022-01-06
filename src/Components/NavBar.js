import React from 'react'
import '../App.css'


function NavBar() {
    return(
      <div className = "nav-bar2">

      <div className = "nav-bar">
          <h2>Navigate</h2>
          <nav id="navigation">

          <a href="/">
          Home
          </a>

          <a href="/makereservation">
          Make A Reservation
          </a>

          <a href="/searchreservation">
          Search For Existing Reservation
          </a>

          <a href="/about">
          About
          </a>

          </nav>
      </div>
      </div>
    )

}

export default NavBar;