import React from 'react';import './index.css';
import App from './Components/App';
import Form from './Components/Form'
import DataMap from './Components/DataMap'
import ConfirmReservation from './Components/ConfirmReservation'
import { render } from "react-dom"
import { BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Form" element={<Form />} />
      <Route path="ConfirmReservation" element={<ConfirmReservation />} />
      <Route path="DataMap" element={<DataMap />} />
    </Routes>
  </BrowserRouter>, 
  rootElement
);