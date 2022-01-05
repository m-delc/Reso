import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import MakeReservation from './Components/MakeReservation';
import SearchReservations from './Components/SearchReservations';
import About from './Components/About';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
