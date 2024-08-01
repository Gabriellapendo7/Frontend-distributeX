import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:5000/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(response.data);
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <ul className="orders-list">
        {orders.map(order => (
          <li key={order.order_id} className="order-item">
            {order.status} - {order.total_amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
