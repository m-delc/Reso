import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { v4 } from 'uuid'
import Form from './Form'
import { Link } from "react-router-dom";


function App() {

  // state for JSON
  const [data, setData] = useState([])

  // fetch function
  const fetchData = async () =>  {
    const r = await fetch ('http://localhost:3000/resos/')
    const s = await r.json()
    setData(s)
  }

  // fetch from JSON
  useEffect(() => {
    fetchData();
  }, [])

  console.log(data);

  // template for adding new reservation to db.json
  // const newObj = {
  //   "Id": v4(),
  //   "GuestName":
  //   "Restaurant":
  //   "Date":
  //   "Time":
  //   "PartySize":
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="./Form">Form Test</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
