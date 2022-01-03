import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { v4 } from 'uuid'
import Form from './Form'
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'


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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <nav>
          <Link to="./Form">Form Test</Link>
          <p>
          <Link to="./ConfirmReservation">Conform Reso (Link Test)</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}

export default App;
