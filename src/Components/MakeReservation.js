import React, {useState} from "react";
import Filter from "./Filter";
import MakeReservationCard from "./MakeReservationCard";

function MakeReservation({reservations}) {

    const [selectedRestaurant, setRestaurant] = useState('None')

    function handleFilter(selectedRestaurant) {
        setRestaurant(selectedRestaurant)
    }
    

const availableReservations = reservations.filter((reservation) => {
    if(selectedRestaurant === "None") return false;
    return reservation.restaurant === selectedRestaurant && reservation.name === ""
})

return(
    <div>
<div className = "make-res">
    <Filter selectedRestaurant={selectedRestaurant} handleFilter={handleFilter} />
    <label>
        Name: 
        <input
          type="text"
          name="name"
        />
    </label>
    
    <label>
        Party Size: 
        <input
          type="number"
          name="partysize"
        />
    </label>

    </div>

    
    <ul className="cards">
      {availableReservations.map((reservation) => (
        <MakeReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </ul>
    

    </div>

    )
}

export default MakeReservation