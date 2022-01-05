import React, { useState, useEffect } from 'react';
import DataMap from './DataMap'

export default function Body () {

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
        <div>
            <DataMap data={data} />
        </div>
    )

}