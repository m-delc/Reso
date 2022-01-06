import React from "react";

function Filter({selectedRestaurant, handleFilter}) {
    return(
    <div className="filter">
      <select 
      name="filter" 
      value={selectedRestaurant}
      onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="None">Select Restaurant</option>
        <option value="The Stake">The Stake</option>
        <option value="Grits All Day">Grits All Day</option>
        <option value="La Cucina">La Cucina</option>
        <option value="Stew You">Stew You</option>
        <option value="Fried 'N' Tied">Fried 'N' Tied</option>
        <option value="Brine">Brine</option>
      </select>
    </div>
    )
}

export default Filter