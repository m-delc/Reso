import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { v4 } from 'uuid'
import Header from './Header';
import NavBar from './NavBar';
import Container from './Container';
import Form from './Form'
import { Link } from "react-router-dom";


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

{/* <header className="App-header">
        <nav>
          <Link to="./Form">Form Test</Link>
          <p>
          <Link to="./ConfirmReservation">Conform Reso (Link Test)</Link>
          </p>
        </nav>
      </header> */}
