import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import DataMap from './DataMap'
import GroupSizesColors from './GroupSizesColors'
// import Button from '@material-ui/core/Button';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';

import Header from "./Header"

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



  return (
    <div className="App">
        <GroupSizesColors />
      <header className="App-header">
        <Header />

        {/* <Button 
          component={Link} to="./Form"
          variant="contained"
          color="secondary"
          >
          CLICK
        </Button> */}
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
