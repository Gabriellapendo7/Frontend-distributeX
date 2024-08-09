import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sales from './Sales';
import Products from './Products';
import Orders from './Orders';
import Clients from './Clients';
import Categories from './Categories';
import Register from './Register';
import Supplies from './Supplies';
import Receipts from './Receipts';
import SupplyOrders from './SupplyOrders';
import Carts from './Carts';
import CartItems from './CartItems';
import Manufacturers from './Manufacturers';
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
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/supplies">Supplies</Link></li>
          <li><Link to="/receipts">Receipt</Link></li>
          <li><Link to="/supplyorders">Supply Orders</Link></li>
          <li><Link to="/carts">Carts</Link></li>
          <li><Link to="/cartitems">Cart Items</Link></li>
          <li><Link to="/manufacturers">Manufacturers</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <div className="dashboard-widgets">
          <Routes>
            <Route path="/sales" element={<Sales />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/register" element={<Register />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/supplyorders" element={<SupplyOrders />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/cartitems" element={<CartItems />} />
            <Route path="/manufacturers" element={<Manufacturers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;