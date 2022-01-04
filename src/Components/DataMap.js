import React from 'react';
// import App from './App'
import DropdownFrontPage from './DropdownFrontPage';

function DataMap ({ data }) {

    console.log(data);
    return (
        <div>
            {
                data.map(d => (
                    <DropdownFrontPage key={d.id}
                                        restaurant={d.restaurant} />
                ))
            }
        </div>
    )

}

export default DataMap