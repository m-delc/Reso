import React from 'react';
// import RestaurantList from './RestaurantList';
import { Link, useNavigate } from "react-router-dom"


function DataMap ({ data }) {

    const navigate = useNavigate()

    return (
        <div>
            <nav>
                <select onChange={() => navigate('./Form')}>
                    <option value="which-restaurant">Where do you wanna eat?</option>
                    {data.map(d => ( 
                        <option key={d.id}>{d.restaurant}</option>
                    ))}
                </select>
            </nav>
        </div>
    )
}


export default DataMap