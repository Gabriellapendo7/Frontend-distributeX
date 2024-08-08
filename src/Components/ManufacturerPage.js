import React, { useState } from 'react';
import './ManufacturerPage.css'; // For styling

function ManufacturerPage() {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="manufacturer-container"><br />
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuVisible ? 'Hide Menu' : 'Show Menu'}
      </button>
      {menuVisible && (
        <aside className="side-menu">
            <br /><br />
          <h2>Manufacturer Menu</h2>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Orders From Admin</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </aside>
      )}
      <main className="main-content">
        <h1>Manufacturer Dashboard</h1>


      </main>
    </div>
  );
}

export default ManufacturerPage;
