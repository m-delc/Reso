import React from 'react';
import '../App.css';
import Header from "./Header"
import Body from "./Body"
// import { Link } from "react-router-dom";
// import DataMap from './DataMap'
// import Button from '@material-ui/core/Button';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import { v4 } from 'uuid'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body /> 
      </header>
    </div>
  );
}

export default App;


        {/* <Button 
          component={Link} to="./Form"
          variant="contained"
          color="secondary"
          >
          CLICK
        </Button> */}


        // <Link to="./ConfirmReservation">Confirm Reso (Link Test)</Link>