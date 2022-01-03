import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Forms() {
    const [name, setName] = useState("")
    console.log(name);

    return(
        <form>
            <label>Enter your name:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </form>
    )
}

export default Forms