import React from 'react';
// import App from './App'



export default function DropdownFrontPage({ restaurant }) {

    // // state to toggle the dropdown menu on/off
    // const [isOpen, setIsOpen] = useState(false);
    // // state for storing selection from dropdown
    // const [selectedOption, setSelectedOption] = useState(null)


    console.log();


    return (
        <main>
            <label>Which restaurant?</label>

            <select name="Restaurants" id="x" multiple>

                <option value="restaurant">{restaurant}</option>
                    {/* <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option> */}
            </select>

        </main>

    )
}