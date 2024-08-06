import React from 'react';
import './Category.css';

const Category = ({ title, products }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="collection-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              {product.img ? <img src={product.img} alt={`Product ${index}`} /> : <div>No Image Available</div>}
            </div>
            <div className="card-info">
              <p className="text-title">{product.description}</p>
              <p className="text-body">{product.price}</p>
            </div>
            <div className="card-footer">
              <span className="text-title">{product.price}</span>
              <div className="card-button">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  {/* SVG icon content */}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
