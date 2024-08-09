import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Clients.css';

function Clients() {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState('');

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('/clients');
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);

    const handleAddClient = async () => {
        try {
            const response = await axios.post('/clients', { name: newClient });
            setClients([...clients, response.data]);
            setNewClient('');
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    placeholder="New Client"
                />
                <button onClick={handleAddClient}>Add Client</button>
            </div>
        </div>
    );
}

export default Clients;
