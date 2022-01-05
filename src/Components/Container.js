// import React, {useState, useEffect} from "react";
// import MakeReservation from "./MakeReservation";
// import SearchReservations from "./SearchReservations";
// import About from "./About";

// function Container() {

//     const [reservations, setReservations] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:3000/Resos')
//         .then((response) => response.json())
//         .then((reservationData) => {
//             setReservations(reservationData)
//         })
//     }, [])

//     return(
//         <main>

//             <MakeReservation reservations={reservations} setReservations={setReservations}/>
//             <SearchReservations reservations={reservations} />
//             <About />
            

//         </main>
//     )
// }

// export default Container