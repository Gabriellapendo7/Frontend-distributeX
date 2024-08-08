import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './ClientAuthForm.css';

function ManufacturerAuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/manufacturer');
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn" onClick={() => setShowModal(true)}>
        {isSignUp ? 'Sign Up' : 'Log In'}
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>{isSignUp ? 'Manufacturer Sign Up' : 'Manufacturer Log In'}</h2>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="input-group">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <input 
                    placeholder='Full name'
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
              )}
              <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} />
                <input 
                  placeholder='Email'
                  type="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="input-group">
                <FontAwesomeIcon icon={faLock} />
                <input 
                  placeholder='Password'
                  type="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button className="btn" type="submit">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </form>
            <div className="modal-footer">
              <button className="btn-link" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManufacturerAuthForm;
