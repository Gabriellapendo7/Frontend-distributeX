import React from 'react';
import { Link } from 'react-router-dom';

function ClientPage() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    // Add more products as needed
  ];

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/client">Client</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <h1>Client Page</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPage;
