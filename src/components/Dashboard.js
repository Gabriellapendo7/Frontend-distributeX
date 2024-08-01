import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sales from './Sales';
import Products from './Products';
import Orders from './Orders';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
