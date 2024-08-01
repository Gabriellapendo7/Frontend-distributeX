import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sales from './Sales';
import Products from './Products';
import Orders from './Orders';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
        </div>
        <ul>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <div className="dashboard-widgets">
          <Routes>
            <Route path="/sales" element={<Sales />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
