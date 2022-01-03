import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

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

  // const newObj = {
  //   "Id": "",
  //   "GuestName": "",
  //   "Restaurant": "",
  //   "Date": "",
  //   "Time": "",
  //   "PartySize": ""
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />``
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
