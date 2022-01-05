import React, { useState  } from 'react';
import AddReservation from './AddReservation'

// import RestaurantList from './RestaurantList';
import { useNavigate } from "react-router-dom"


function DataMap ({ data }) {

    const [restaurant, setRestaurant] = useState([])
    const navigate = useNavigate()

    const handleClick = (e) => {
        setRestaurant(e.target.value)
        navigate('./AddReservation')
    }

    console.log(restaurant);

    return (
        <div>
            <nav>
                <select onChange={e => handleClick(e)}>
                    <option value="which-restaurant">Where do you wanna eat?</option>
                    {data.map(d => ( 
                        <option key={d.id}>{d.restaurant}</option>
                        ))}
                </select>
            </nav>
                        <AddReservation restaurant={restaurant} 
                                        data={data} />
        
        </div>
    )
}


export default DataMap