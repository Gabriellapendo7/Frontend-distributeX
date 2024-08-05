import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AdminPage from './Components/AdminPage';
import ClientAuthForm from './Components/ClientAuthForm';
import ClientPage from './Components/ClientPage';
import ManufacturerAuthForm from './Components/ManufacturerAuthForm';
import ManufacturerPage from './Components/ManufacturerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/client-auth" element={<ClientAuthForm />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/manufacturer-auth" element={<ManufacturerAuthForm />} />
        <Route path="/manufacturer" element={<ManufacturerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
