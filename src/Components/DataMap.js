import React from 'react';
// import DropdownFrontPage from './DropdownFrontPage';
import SelectAutoWidth from './SelectAutoWidth';


function DataMap ({ data }) {


    return (
        <div>
            {
                data.map(d => ( 
                                
                    <SelectAutoWidth key={d.id}
                                        restaurant={d.restaurant}
                                        time={d.time} 
                                        />
                                
                ))
            }
        </div>
    )

}


export default DataMap