import React from "react";

function SearchReservationCard({reservation, handleCancel}) {
    return(
        <li className="card">
        <h3>{reservation.name}</h3>
        <h4>{reservation.restaurant}</h4>
        <p> {reservation.address} <br /> {reservation.number} </p>
        <p>{reservation.date} <br />  {reservation.time}<br/> Party Size: {reservation.partysize}</p>
        <button onClick={() => handleCancel(reservation.id, reservation.name, reservation.restaurant, reservation.date, reservation.time)} > Cancel Reservation </button>
      </li>
    )
}

export default SearchReservationCard