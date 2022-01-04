import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import DropdownFrontPage from './DropdownFrontPage'
import DataMap from './DataMap'
import FloatingActionButtonSize from './FloatingActionButtonSize'
// import { v4 } from 'uuid'



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
        <FloatingActionButtonSize />
        <DropdownFrontPage />
        <DataMap data={data} />
          <nav>
            <p>
              <Link to="./Form">Form Test</Link>
            </p>
            <p>
              <Link to="./ConfirmReservation">Confirm Reso (Link Test)</Link>
            </p>
          </nav>
      </header>
    </div>
  );
}

export default App;
