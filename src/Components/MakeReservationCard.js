import React, {useState} from "react";

function MakeReservationCard({reservation, handleButtonClick}) {

  const [moreInfo, setMoreInfo] = useState(false)

  function handleMoreInfo() {
    setMoreInfo(!moreInfo)
  }

    return (
        <li className="card">
        <h4>{reservation.restaurant}</h4>
        {moreInfo ?<p>{reservation.address} <br />  {reservation.number}</p> : <p>{reservation.date} <br />  {reservation.time}</p>}
        <button onClick={() => handleButtonClick(reservation.id, reservation.restaurant, reservation.date, reservation.time)}>Make A Reservation</button>
        {moreInfo ?<button onClick= {handleMoreInfo} >Less Info</button> : <button onClick= {handleMoreInfo} >More Info</button>}
      </li>
    )
}

export default MakeReservationCard