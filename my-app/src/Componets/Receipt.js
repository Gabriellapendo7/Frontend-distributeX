import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Receipt.css';

const Receipt = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/receipts');
        setReceipts(response.data);
      } catch (error) {
        console.error('Error fetching receipts:', error);
      }
    };

    fetchReceipts();
  }, []);

  return (
    <div className="receipt-container">
      <h2>Receipts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Receipt Date</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map(receipt => (
            <tr key={receipt.id}>
              <td>{receipt.id}</td>
              <td>{receipt.order_id}</td>
              <td>{receipt.amount}</td>
              <td>{receipt.receipt_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;
