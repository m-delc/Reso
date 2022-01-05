import React from "react";

function SearchReservationCard({reservation}) {
    return(
        <li className="card">
        <h3>{reservation.name}</h3>
        <h4>{reservation.restaurant}</h4>
        <p>{reservation.date} <br />  {reservation.time}<br/> Party Size: {reservation.partysize}  </p>
      </li>
    )
}

export default SearchReservationCard