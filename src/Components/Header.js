import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo">
        DISTRIBUTE-X 
        <FontAwesomeIcon icon={faTruckArrowRight} className="logo-icon" />
      </div>
      
      <nav>
        <button onClick={() => handleNavigation('/')}>Home</button>
        <button className="admin-button" onClick={() => handleNavigation('/admin')}>Admin</button>
      </nav>
    </header>
  );
}

export default Header;
