import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Form from './Components/Form'
import DataMap from './Components/DataMap'
import ConfirmReservation from './Components/ConfirmReservation'
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom"
import { BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Form" element={<Form />} />
      <Route path="ConfirmReservation" element={<ConfirmReservation />} />
      <Route path="/DataMap" element={<DataMap />} />
    </Routes>
  </BrowserRouter>, 
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
