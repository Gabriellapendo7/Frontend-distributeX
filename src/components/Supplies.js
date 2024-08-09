import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Supplies.css';

function Supplies() {
    const [supplies, setSupplies] = useState([]);
    const [newSupply, setNewSupply] = useState({ name: '', description: '' });

    useEffect(() => {
        const fetchSupplies = async () => {
            try {
                const response = await axios.get('/supplies');
                setSupplies(response.data);
            } catch (error) {
                console.error('Error fetching supplies:', error);
            }
        };

        fetchSupplies();
    }, []);

    const handleAddSupply = async () => {
        try {
            const response = await axios.post('/supplies', newSupply);
            setSupplies([...supplies, response.data]);
            setNewSupply({ name: '', description: '' });
        } catch (error) {
            console.error('Error adding supply:', error);
        }
    };

    return (
        <div>
            <h1>Supplies</h1>
            <ul>
                {supplies.map((supply) => (
                    <li key={supply.id}>{supply.name} - {supply.description}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newSupply.name}
                    onChange={(e) => setNewSupply({ ...newSupply, name: e.target.value })}
                    placeholder="Supply Name"
                />
                <input
                    type="text"
                    value={newSupply.description}
                    onChange={(e) => setNewSupply({ ...newSupply, description: e.target.value })}
                    placeholder="Description"
                />
                <button onClick={handleAddSupply}>Add Supply</button>
            </div>
        </div>
    );
}

export default Supplies;
