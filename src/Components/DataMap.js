import React from 'react';
import RestaurantList from './RestaurantList';


function DataMap ({ data }) {


    return (
        <div>
            {
                data.map(d => ( 
                                
                    <RestaurantList key={d.id}
                                        restaurant={d.restaurant}
                                        time={d.time} 
                                        />
                                
                ))
            }
        </div>
    )

}


export default DataMap