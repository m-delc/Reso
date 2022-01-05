import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import MakeReservation from './Components/MakeReservation';
import About from './Components/About';
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
      <Route path="MakeReservation" element={<MakeReservation />}/>
      <Route path="About" element={<About />}/>

    </Routes>
  </BrowserRouter>, 
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
