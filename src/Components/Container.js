import React, {useState, useEffect} from "react";
import MakeReservation from "./MakeReservation";

function Container() {

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Resos')
        .then((response) => response.json())
        .then((reservationData) => {
            setReservations(reservationData)
        })
    }, [])

    return(
        <main>
            Make a reservation component (drop down menu component to choose restaurant, will choose restaraunt name and filter state accordingly to return free slots as cards, each card will have state for party size as an input and for name, event handler for reserve button to PATCH that card (flips reserved boolean), can use the time and resto name to find the correct index to update)
            Search Existing reservations (will have state for searching by name that will update state for the cards to be shown in this section)
            About component (just says what the website is about and how to use it)

            <MakeReservation reservations={reservations}/>

        </main>
    )
}

export default Container