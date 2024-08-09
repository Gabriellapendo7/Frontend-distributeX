import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CartItems.css';

function CartItems() {
    const [cartItems, setCartItems] = useState([]);
    const [newCartItem, setNewCartItem] = useState({ cartId: '', productId: '', quantity: 1 });

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/cart-items');
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleAddCartItem = async () => {
        try {
            const response = await axios.post('/cart-items', newCartItem);
            setCartItems([...cartItems, response.data]);
            setNewCartItem({ cartId: '', productId: '', quantity: 1 });
        } catch (error) {
            console.error('Error adding cart item:', error);
        }
    };

    return (
        <div>
            <h1>Cart Items</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>{item.productId} - Quantity: {item.quantity}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newCartItem.cartId}
                    onChange={(e) => setNewCartItem({ ...newCartItem, cartId: e.target.value })}
                    placeholder="Cart ID"
                />
                <input
                    type="text"
                    value={newCartItem.productId}
                    onChange={(e) => setNewCartItem({ ...newCartItem, productId: e.target.value })}
                    placeholder="Product ID"
                />
                <input
                    type="number"
                    value={newCartItem.quantity}
                    onChange={(e) => setNewCartItem({ ...newCartItem, quantity: e.target.value })}
                    placeholder="Quantity"
                />
                <button onClick={handleAddCartItem}>Add Item</button>
            </div>
        </div>
    );
}

export default CartItems;
