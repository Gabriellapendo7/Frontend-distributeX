import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientAuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, we just navigate to the Client page
    navigate('/client');
  };

  return (
    <div>
      <h2>{isSignUp ? 'Client Sign Up' : 'Client Log In'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
      </button>
    </div>
  );
}

export default ClientAuthForm;
