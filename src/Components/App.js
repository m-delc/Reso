import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import MakeReservation from "./MakeReservation";
import SearchReservations from "./SearchReservations";
import About from "./About";
import {Route, Routes} from 'react-router-dom'


function App() {

  const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Resos')
        .then((response) => response.json())
        .then((reservationData) => {
            setReservations(reservationData)
        })
    }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path='/makereservation' element={<MakeReservation reservations={reservations} 
                                                                setReservations={setReservations} />} />
        <Route path='/searchreservation' element={<SearchReservations reservations={reservations} />} />
        <Route path='/about' element={ <About />} />
      </Routes>
      
    </div>
  );
}

export default App;
