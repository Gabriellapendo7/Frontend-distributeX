import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(response.data);
    };

    fetchProducts();
  }, [token]);

  return (
    <div className="products-container">
      <h2>Products</h2>
      <ul className="products-list">
        {products.map(product => (
          <li key={product.product_id} className="product-item">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
