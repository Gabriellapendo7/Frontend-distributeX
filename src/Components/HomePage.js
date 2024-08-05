import React, { useState } from 'react';
import ClientAuthForm from './ClientAuthForm';
import ManufacturerAuthForm from './ManufacturerAuthForm';

function HomePage() {
  const [showClientForm, setShowClientForm] = useState(false);
  const [showManufacturerForm, setShowManufacturerForm] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>
      <p>We are your trusted partner in delivering high-quality products from top manufacturers to retail shops.
        At DISTRIBUTE-X, we pride ourselves on our efficient distribution network, ensuring that your business always has the goods it needs. 
        Explore our wide range of products, manage your orders with ease, and experience seamless service. Thank you for choosing DISTRIBUTE-X – where excellence meets reliability.
      </p>
      <button onClick={() => setShowClientForm(!showClientForm)}>Client Sign Up/Log In</button>
      <button onClick={() => setShowManufacturerForm(!showManufacturerForm)}>Manufacturer Sign Up/Log In</button>
      
      {showClientForm && <ClientAuthForm />}
      {showManufacturerForm && <ManufacturerAuthForm />}
    </div>
  );
}

export default HomePage;
