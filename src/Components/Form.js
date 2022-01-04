import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

function Forms() {
    // state for guest name
    const [name, setName] = useState("")
    // state for guest count
    const [guestCount, setGuestCount] = useState(0)

    console.log(name);
    console.log(guestCount);

    return(
        <form>
            <p>
                <label>Enter your name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
            </p>
            <p>
                <label>Number of Guests:</label>
                    <input
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                    />
            </p>
        </form>
    )
}

export default Forms