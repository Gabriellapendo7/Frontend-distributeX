import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Client'); // Default role

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', { username, password, role });
            console.log('User registered:', response.data);
            // Clear form fields
            setUsername('');
            setPassword('');
            setRole('Client');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Admin">Admin</option>
                        <option value="Client">Client</option>
                        <option value="Manufacturer">Manufacturer</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
