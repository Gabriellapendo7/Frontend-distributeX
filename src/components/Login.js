import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

function Login({ setToken }) {
  const [Username, setUsername] = useState(''); // Change to lowercase
  const [Password, setPassword] = useState(''); // Change to lowercase

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { Username, Password }); // Change to lowercase
      setToken(response.data.access_token);
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={Username} // Change to lowercase
        onChange={(e) => setUsername(e.target.value)} // Change to lowercase
      />
      <input
        type="password"
        placeholder="Password"
        value={Password} // Change to lowercase
        onChange={(e) => setPassword(e.target.value)} // Change to lowercase
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
