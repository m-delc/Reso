import React from 'react';
import './index.css';
import App from './Components/App';
import MakeReservation from './Components/MakeReservation';
import About from './Components/About';
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="MakeReservation" element={<MakeReservation />}/>
      <Route path="About" element={<About />}/>
    </Routes>
  </BrowserRouter>, 
  rootElement
);
