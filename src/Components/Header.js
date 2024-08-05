import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'



function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header"> {/* Applying the header class */}
      <div className="logo">DISTRIBUTE-X</div> 
      
      <nav>
        <button onClick={() => handleNavigation('/')}>Home</button>
        <button className="admin-button" onClick={() => handleNavigation('/admin')}>Admin</button> {/* Applying the admin-button class */}
      </nav>
    </header>
  );
}
  
export default Header;
