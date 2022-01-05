import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import About from './About';


function NavBar() {
    return(
      <div className = "nav-bar">
          <h2>Navigate</h2>
          <nav id="navigation">

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
    )

}

export default NavBar;