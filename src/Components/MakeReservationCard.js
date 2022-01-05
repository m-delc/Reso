import React, {useEffect} from "react";

function MakeReservationCard({reservation, handleButtonClick}) {
    return (
        <li className="card">
        <h4>{reservation.restaurant}</h4>
        <p>{reservation.date}  {reservation.time}</p>
        <button onClick={() => handleButtonClick(reservation.id, reservation.restaurant, reservation.date, reservation.time)}>Make A Reservation</button>
      </li>
    )
}

export default MakeReservationCard