import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Supply.css';

const Supply = () => {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/supplies');
        setSupplies(response.data);
      } catch (error) {
        console.error('Error fetching supplies:', error);
      }
    };

    fetchSupplies();
  }, []);

  return (
    <div className="supply-container">
      <h2>Supplies</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Manufacturer ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {supplies.map(supply => (
            <tr key={supply.id}>
              <td>{supply.id}</td>
              <td>{supply.manufacturer_id}</td>
              <td>{supply.product_id}</td>
              <td>{supply.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Supply;
