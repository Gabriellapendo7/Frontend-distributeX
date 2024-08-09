import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './ClientAuthForm.css';
import Cookies from 'js-cookie'; 

function ManufacturerAuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SIGN_UP_URL = 'http://localhost:5000/manufacturers';
    const LOGIN_URL = 'http://localhost:5000/manufacturers/login';
    
    const url = isSignUp ? SIGN_UP_URL : LOGIN_URL;

    const signUpBody = {
      username: name,
      email: email,
      password: password,
      companyname: companyName,
      contactinfo: contactInfo
    };

    const loginBody = {
      email: email,
      password: password // Use email for login
    };

    const body = isSignUp ? signUpBody : loginBody;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (response.ok) {
        if (isSignUp) {
          setResponseMessage("Sign Up successful!");
        } else {
          setResponseMessage(`Login successful! Welcome, ${data.username}! Your Manufacturer ID is: ${data.manufacturer_id}`);
          // Set cookies for username and manufacturer ID
          Cookies.set('username', data.username);
          Cookies.set('manufacturer_id', data.manufacturer_id);
        }
        console.log(data);
        navigate('/manufacturer');  
        setShowModal(false);
      } else {
        setResponseMessage(data.error || "An error occurred. Please try again.");
        console.error(data.error); 
      }
    } catch (error) {
      setResponseMessage("An error occurred while processing your request.");
      console.error('Error:', error);
    }
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
                <>
                  <div className="input-group">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <input 
                      placeholder='Full name (Username)'
                      type="text" 
                      name="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <input 
                      placeholder='Company Name'
                      type="text" 
                      name="companyname" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <input 
                      placeholder='Contact Info'
                      type="text" 
                      name="contactinfo" 
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      required 
                    />
                  </div>
                </>
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
            {responseMessage && <p className="response-message">{responseMessage}</p>}
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
