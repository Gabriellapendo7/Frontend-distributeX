import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [shippingAddress, setShippingAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const data = {
      username,
      email,
      password,
      role,
    };
  
    // Add additional fields based on the selected role
    if (role === 'Client') {
      data.shipping_address = shippingAddress;
    } else if (role === 'Manufacturer') {
      data.company_name = companyName;
      data.contact_info = contactInfo;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/register', data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Registration failed');
    }
  };
  
  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Client">Client</option>
            <option value="Manufacturer">Manufacturer</option>
          </select>
        </div>

        {/* Conditional fields based on the role */}
        {role === 'Client' && (
          <div>
            <label>Shipping Address:</label>
            <input
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
          </div>
        )}

        {role === 'Manufacturer' && (
          <>
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div>
              <label>Contact Info:</label>
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>
          </>
        )}

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
