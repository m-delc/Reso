import React, {useState} from "react";
import SearchReservationCard from "./SearchReservationCard";

function SearchReservations({reservations, setReservations}) {

    const [search, setSearch] = useState("")
    const [count, setCount] = useState(0)

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleCancel(id, name, restaurant, date, time) {
      if(count < 1) {
        alert(`${name}, you are about to cancel your reservation at ${restaurant} for ${time} on ${date}, confirm this is your intent by clicking the button again, availability of this reservation again is not guaranteed `)
        setCount(count+1)
      }
      else{
        const reset = {
          name: "",
          partysize: 0
                }

      fetch(`http://localhost:3000/Resos/${id}` , {
        method: "PATCH",
        headers: {
                  "Content-Type" : "application/json"
                  },          
        body: JSON.stringify(reset)
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
        alert(`${name}, you have successfully cancelled your reservation at ${restaurant} for ${time} on ${date}`)
        setCount(0)
      }
    )}
  }

    const matchingReservations = reservations.filter((reservation) => {
        if(search.length == 0) {
          return false
        }
        else {return reservation.name.toLowerCase().includes(search.toLowerCase())}
      })

    return(
    <div className="search">
    <form>
        <label>
            Search For Reservation By Name:
                <input 
                type="text" 
                name="name"
                value={search} 
                onChange={handleChange}
                />
        </label>
    </form>
    <ul className="cards">
      {matchingReservations.map((reservation) => (
        <SearchReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel} />
      ))}
    </ul>
    </div>
    )
}

export default SearchReservations