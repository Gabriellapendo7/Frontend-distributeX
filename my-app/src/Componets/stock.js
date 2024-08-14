import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../css/stock.css';

const StockSearch = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <div className="stock-container">
      <input
        type="text"
        placeholder="Search items in stock..."
        value={searchTerm}
        onChange={handleSearch}
        className="stock-search-bar"
      />
      <ul className="stock-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="stock-list-item">
            {item.name} - {item.stock} in stock
          </li>
        ))}
      </ul>
    </div>
    <NavLink className="goback" to={`/`}>
                Back
            </NavLink>
    </>
  );
};

export default StockSearch;
