import React, { useEffect, useState } from 'react';
import './ManufacturerPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function ManufacturerPage() {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/supply');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the data to check its structure
        setSupplies(data.supplies || data); // Adjust based on the actual structure
      } catch (error) {
        console.error('Error fetching supplies:', error);
      }
    };

    fetchSupplies();
  }, []);

  return (
    <div className="manufacturer-container">
      <aside className="side-menu">
        <h2>Manufacturer Menu</h2>
        <ul>
          <li><a href="/"><FontAwesomeIcon icon={faBox} /> Orders From Admin</a></li>
          <li><a href="/supply-form"><FontAwesomeIcon icon={faBox} /> Add a new Product</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faChartLine} /> Dashboard</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
        </ul>
      </aside>
      <div className="main-content">
        <div className="supply-container">
          {supplies.length > 0 ? (
            supplies.map((supply) => (
              <div className="supply-card" key={supply.ID}>
                <h3 className="supply-name">{supply.supply_name}</h3>
                <p className="quantity-ordered">Quantity Ordered: {supply.quantity_ordered}</p>
                <p className="order-date">Order Date: {new Date(supply.order_date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No Orders From Admin available.</p> 
          )}
        </div>
      </div>
    </div>
  );
}

export default ManufacturerPage;
