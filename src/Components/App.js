import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { v4 } from 'uuid'
import Header from './Header';
import NavBar from './NavBar';
import Container from './Container';
import Form from './Form'
import { Link } from "react-router-dom";
import MakeReservation from "./MakeReservation";
import SearchReservations from "./SearchReservations";
import About from "./About";


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
      <MakeReservation reservations={reservations} setReservations={setReservations}/>
      <SearchReservations reservations={reservations} />
      <About />
    </div>
  );
}

export default App;
