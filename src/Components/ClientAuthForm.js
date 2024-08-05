import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faLock, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Modal, Button } from 'react-bootstrap';

function ClientAuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    navigate('/client');
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        {isSignUp ? 'Sign Up' : 'Log In'}
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? 'Client Sign Up' : 'Client Log In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '8px' }} />
                  <input 
                    placeholder='Full name'
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
              </div>
            )}
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                <input 
                  placeholder='Email'
                  type="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '8px' }} />
                <input 
                  placeholder='Password'
                  type="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>
            {isSignUp && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faLock} style={{ marginRight: '8px' }} />
                  <input 
                    placeholder='Confirm Password'
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>
            )}
            {isSignUp && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px' }} />
                  <input 
                    placeholder='Shipping Address'
                    type="text" 
                    name="shippingAddress" 
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    required 
                  />
                </div>
              </div>
            )}
            <Button type="submit" variant="primary">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Log In' : 'Sign Up'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ClientAuthForm;
