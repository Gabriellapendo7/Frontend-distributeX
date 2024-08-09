import React from 'react';
import './ManufacturerPage.css'; // For styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function ManufacturerPage() {
  return (
    <div className="manufacturer-container">
      <aside className="side-menu">
        <h2>Manufacturer Menu</h2>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faBox} /> Orders From Admin</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faChartLine} /> Dashboard</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Manufacturer Dashboard</h1>
        <div className="stats-overview">
          <h2>Statistics Overview</h2>
          <div className="stat-item">
            <h3>Total Orders</h3>
            <p>150</p>
          </div>
          <div className="stat-item">
            <h3>Total Revenue</h3>
            <p>$12,000</p>
          </div>
          <div className="stat-item">
            <h3>Pending Orders</h3>
            <p>5</p>
          </div>
        </div>
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Product A</td>
                <td>Shipped</td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Product B</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product-list">
          <h2>Product List</h2>
          <button>Add New Product</button>
        </div>
        <div className="notifications">
          <h2>Notifications</h2>
          <p>No new notifications.</p>
        </div>
        <div className="sales-chart">
          <h2>Sales Chart</h2>
          <div className="chart-placeholder">[Sales Chart Placeholder]</div>
        </div>
      </main>
    </div>
  );
}

export default ManufacturerPage;
