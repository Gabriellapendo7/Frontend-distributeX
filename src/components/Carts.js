import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Carts.css';

function Carts() {
    const [carts, setCarts] = useState([]);
    const [newCart, setNewCart] = useState({ clientId: '', items: [] });

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await axios.get('/carts');
                setCarts(response.data);
            } catch (error) {
                console.error('Error fetching carts:', error);
            }
        };

        fetchCarts();
    }, []);

    const handleAddCart = async () => {
        try {
            const response = await axios.post('/carts', newCart);
            setCarts([...carts, response.data]);
            setNewCart({ clientId: '', items: [] });
        } catch (error) {
            console.error('Error adding cart:', error);
        }
    };

    return (
        <div>
            <h1>Carts</h1>
            <ul>
                {carts.map((cart) => (
                    <li key={cart.id}>{cart.clientId} - {cart.items.length} items</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newCart.clientId}
                    onChange={(e) => setNewCart({ ...newCart, clientId: e.target.value })}
                    placeholder="Client ID"
                />
                <button onClick={handleAddCart}>Add Cart</button>
            </div>
        </div>
    );
}

export default Carts;
