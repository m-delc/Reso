import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import About from './About';


function NavBar() {

  const navigate = useNavigate()

  return(
    <div className = "nav-bar">
        <h2>Navigate</h2>
        <div id="navigation">
        <button onClick={() => navigate('./')}>Home</button>
        <button onClick={() => navigate('./SearchReservationCard')}>Make A Reservation</button>
        <button onClick={() => navigate('./SearchReservations')}>Search For Existing Reservation</button>
        <button onClick={() => navigate('./About')}>About</button>
        </div>
    </div>
  )

}

export default NavBar;