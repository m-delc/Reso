import React from 'react';
// import App from './App'


function DropdownFrontPage({ restaurant }) {

    // // state to toggle the dropdown menu on/off
    // const [isOpen, setIsOpen] = useState(false);
    // // state for storing selection from dropdown
    // const [selectedOption, setSelectedOption] = useState(null)

    console.log(restaurant);
    
    
    return (

            <div>
                
                {/* <label>Where do ya wanna eat?</label> */}
                    <ul name="restaurants">
                        <li value={restaurant}>{restaurant}</li>
                    </ul>

            </div>
    )
}


export default DropdownFrontPage