import React, { useState } from 'react';
import ClientAuthForm from './ClientAuthForm';
import ManufacturerAuthForm from './ManufacturerAuthForm';
import './HomePage.css'; 


function HomePage() {
  const [showClientForm, setShowClientForm] = useState(false);
  const [showManufacturerForm, setShowManufacturerForm] = useState(false);

  return (
    <div className="homepage-container">
      <div className="welcome-section">
        <h1>Welcome to <span>DISTRIBUTE-X</span> </h1>
        <p>We are your trusted partner in delivering high-quality products from top manufacturers to retail shops.
          At DISTRIBUTE-X, we pride ourselves on our efficient distribution network, ensuring that your business always has the goods it needs.
          Explore our wide range of products, manage your orders with ease, and experience seamless service. Thank you for choosing DISTRIBUTE-X – where excellence meets reliability.
        </p>
      </div>
      <div className="auth-section">
        <div className="auth-card1">
        <button className="auth-button" onClick={() => setShowClientForm(!showClientForm)}>Client </button>
          {showClientForm && <ClientAuthForm />}



        <div className='auth-card2'>
        <button className="auth-button" onClick={() => setShowManufacturerForm(!showManufacturerForm)}>Manufacturer</button>
          {showManufacturerForm && <ManufacturerAuthForm />}
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
