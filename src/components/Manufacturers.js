import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Manufacturers.css';

function Manufacturers() {
    const [manufacturers, setManufacturers] = useState([]);
    const [newManufacturer, setNewManufacturer] = useState({ name: '', description: '' });

    useEffect(() => {
        const fetchManufacturers = async () => {
            try {
                const response = await axios.get('/manufacturers');
                setManufacturers(response.data);
            } catch (error) {
                console.error('Error fetching manufacturers:', error);
            }
        };

        fetchManufacturers();
    }, []);

    const handleAddManufacturer = async () => {
        try {
            const response = await axios.post('/manufacturers', newManufacturer);
            setManufacturers([...manufacturers, response.data]);
            setNewManufacturer({ name: '', description: '' });
        } catch (error) {
            console.error('Error adding manufacturer:', error);
        }
    };

    return (
        <div>
            <h1>Manufacturers</h1>
            <ul>
                {manufacturers.map((manufacturer) => (
                    <li key={manufacturer.id}>{manufacturer.name} - {manufacturer.description}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newManufacturer.name}
                    onChange={(e) => setNewManufacturer({ ...newManufacturer, name: e.target.value })}
                    placeholder="Manufacturer Name"
                />
                <input
                    type="text"
                    value={newManufacturer.description}
                    onChange={(e) => setNewManufacturer({ ...newManufacturer, description: e.target.value })}
                    placeholder="Description"
                />
                <button onClick={handleAddManufacturer}>Add Manufacturer</button>
            </div>
        </div>
    );
}

export default Manufacturers;
