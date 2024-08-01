// app.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSetToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  return (
    <Router>
      <div className="App">
        {!token ? (
          <Login setToken={handleSetToken} />
        ) : (
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
