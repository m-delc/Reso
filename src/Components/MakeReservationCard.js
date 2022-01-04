import React, {useEffect} from "react";

function MakeReservationCard({reservation}) {
    return (
        <li className="card">
        <h4>{reservation.restaurant}</h4>
        <p>{reservation.date}  {reservation.time}</p>
        <button>Make A Reservation</button>
      </li>
    )
}

export default MakeReservationCard