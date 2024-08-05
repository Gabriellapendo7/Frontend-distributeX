import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <button onClick={() => handleNavigation('/')}>Home</button>
      <button onClick={() => handleNavigation('/admin')}>Admin</button>
    </nav>
  );
}

export default Header;
