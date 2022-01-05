import React, { useState, useEffect } from 'react';
import '../App.css';
// import { v4 } from 'uuid'
import Header from './Header';
import NavBar from './NavBar';
import Container from './Container';
// import MakeReservation from './MakeReservation';
// import About from './About';
// import Form from './Form'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">

      <Header />




      <NavBar />
      <Container />
    </div>
  );
}

export default App;

