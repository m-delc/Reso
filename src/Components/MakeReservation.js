import React, {useState} from "react";
import Filter from "./Filter";
import MakeReservationCard from "./MakeReservationCard";
import Alert2 from "./Alert2";

function MakeReservation({reservations, setReservations}) {

const [selectedRestaurant, setRestaurant] = useState('None')

const [newReservation, setNewReservation] = useState({
                                                name: "",
                                                partysize: 0
                                            })

function handleFilter(selectedRestaurant) {
        setRestaurant(selectedRestaurant)
    }

function handleChange(event) {
    if(event.target.name === "partysize") {
        const num = parseFloat(event.target.value)

        setNewReservation({
            ...newReservation,
            [event.target.name] : num
        })
    }

    else{
        setNewReservation({
            ...newReservation,
            [event.target.name]: event.target.value
        })
    }
}

function handleButtonClick(id, restaurant, date, time) {
    if(newReservation.name === "" || newReservation.partysize === 0) {
        <Link to={<Alert2 />}>
    }
    else{
        fetch(`http://localhost:3000/Resos/${id}` , {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newReservation)
    })
    .then((response) => response.json())
    .then((updatedReservation) => {
      const updatedReservationList = reservations.map((reservation) =>{
        if(reservation.id === updatedReservation.id) {
          return updatedReservation
        }
        else return reservation
      })
      setReservations(updatedReservationList)
      alert(`Thank you for making a reservation at ${restaurant} for ${time} on ${date}!`)
      setNewReservation({
        name: "",
        partysize: 0
    })

    })
    }
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
          value={newReservation.name}
          onChange={handleChange}
        />
    </label>
    
    <label>
        Party Size: 
        <input
          type="number"
          name="partysize"
          value={newReservation.partysize}
          onChange={handleChange}
        />
    </label>

    </div>

    
    <ul className="cards">
      {availableReservations.map((reservation) => (
        <MakeReservationCard key={reservation.id} reservation={reservation} handleButtonClick={handleButtonClick} />
      ))}
    </ul>


    </div>

    )
}

export default MakeReservation