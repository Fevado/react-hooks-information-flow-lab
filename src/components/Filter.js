import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <div>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default Filter;