import React, {useState} from "react";
import SearchReservationCard from "./SearchReservationCard";

function SearchReservations({reservations}) {

  return null

    // const [search, setSearch] = useState("")

    // function handleChange(event) {
    //     setSearch(event.target.value)
    // }

    // const matchingReservations = reservations.filter((reservation) => {
    //     if(search.length == 0) {
    //       return false
    //     }
    //     else {return reservation.name.toLowerCase().includes(search.toLowerCase())}
    //   })

    // return(
    // <div>
    // <form>
    //     <label>
    //         Search For Reservation By Name:
    //             <input 
    //             type="text" 
    //             name="name"
    //             value={search} 
    //             onChange={handleChange}
    //             />
    //     </label>
    // </form>
    // <ul className="cards">
    //   {matchingReservations.map((reservation) => (
    //     <SearchReservationCard key={reservation.id} reservation={reservation}/>
    //   ))}
    // </ul>
    // </div>
    // )
}

export default SearchReservations