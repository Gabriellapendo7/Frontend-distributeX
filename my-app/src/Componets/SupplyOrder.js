import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/SupplyOrder.css';

const SupplyOrder = () => {
  const [supplyOrders, setSupplyOrders] = useState([]);

  useEffect(() => {
    const fetchSupplyOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/supply_orders');
        setSupplyOrders(response.data);
      } catch (error) {
        console.error('Error fetching supply orders:', error);
      }
    };

    fetchSupplyOrders();
  }, []);

  return (
    <div className="supply-order-container">
      <h2>Supply Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Supply ID</th>
            <th>Order Date</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {supplyOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.supply_id}</td>
              <td>{order.order_date}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyOrder;
