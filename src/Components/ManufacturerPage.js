import React, { useState } from 'react';
import './ManufacturerPage.css'; // For styling

function ManufacturerPage() {
  return (
    <div className="manufacturer-container">
      <aside className="side-menu">
        <h2>Manufacturer Menu</h2>
        <ul>
          <li><a href="#">Orders From Admin</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Manufacturer Dashboard</h1>
      </main>
    </div>
  );
}

export default ManufacturerPage;
