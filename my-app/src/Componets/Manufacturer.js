import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Manufacturer.css';

const Manufacturer = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/manufacturers');
        setManufacturers(response.data);
      } catch (error) {
        console.error('Error fetching manufacturers:', error);
      }
    };

    fetchManufacturers();
  }, []);

  return (
    <div className="manufacturer-container">
      <h2>Manufacturers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map(manufacturer => (
            <tr key={manufacturer.id}>
              <td>{manufacturer.id}</td>
              <td>{manufacturer.name}</td>
              <td>{manufacturer.contact_info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manufacturer;
