import React, { useState } from 'react';

function ManufacturerAuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      <h2>{isSignUp ? 'Manufacturer Sign Up' : 'Manufacturer Log In'}</h2>
      <form>
        {isSignUp && (
          <div>
            <label>Company Name:</label>
            <input type="text" name="companyName" required />
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

export default ManufacturerAuthForm;
