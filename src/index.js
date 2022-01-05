import React from 'react';
import './index.css';
import App from './Components/App';
import MakeReservation from './Components/MakeReservation';
import About from './Components/About';
import SearchReservations from './Components/SearchReservations';
import SearchReservationCard from './Components/SearchReservationCard';
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="MakeReservation" element={<MakeReservation />}/>
      <Route path="About" element={<About />}/>
      <Route path="SearchReservations" element={<SearchReservations />}/>
      <Route path="SearchReservationCard" element={<SearchReservationCard />}/>
    </Routes>
  </BrowserRouter>, 
  rootElement
);
