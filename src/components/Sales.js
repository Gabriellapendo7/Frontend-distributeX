// sales.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Sales.css';

function Sales() {
  const [sales, setSales] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchSales = async () => {
      const response = await axios.get('http://localhost:5000/sales', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSales(response.data);
    };

    fetchSales();
  }, [token]);

  return (
    <div className="sales-container">
      <h2>Sales</h2>
      <ul className="sales-list">
        {sales.map(sale => (
          <li key={sale.sales_id} className="sales-item">
            {sale.receipt_id} - {sale.total_amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sales;