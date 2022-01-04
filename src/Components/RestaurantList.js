import React from 'react';
import { Link } from 'react-router-dom'

function RestaurantList ({ restaurant, time }) {


        console.log(restaurant, time);

    return (
        <div>
            {/* <nav> */}
            <ul>
                <li component={Link} to="./Form">{restaurant}</li>
            </ul>

            {/* </nav> */}

        </div>
    )

}

export default RestaurantList;