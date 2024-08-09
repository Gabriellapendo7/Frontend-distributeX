import React, { useState, useEffect } from 'react';
import axios from 'axios';
import'../styles/SupplyOrders.css';

function SupplyOrders() {
    const [supplyOrders, setSupplyOrders] = useState([]);
    const [newSupplyOrder, setNewSupplyOrder] = useState({ supplyId: '', quantity: 1 });

    useEffect(() => {
        const fetchSupplyOrders = async () => {
            try {
                const response = await axios.get('/supply-orders');
                setSupplyOrders(response.data);
            } catch (error) {
                console.error('Error fetching supply orders:', error);
            }
        };

        fetchSupplyOrders();
    }, []);

    const handleAddSupplyOrder = async () => {
        try {
            const response = await axios.post('/supply-orders', newSupplyOrder);
            setSupplyOrders([...supplyOrders, response.data]);
            setNewSupplyOrder({ supplyId: '', quantity: 1 });
        } catch (error) {
            console.error('Error adding supply order:', error);
        }
    };

    return (
        <div>
            <h1>Supply Orders</h1>
            <ul>
                {supplyOrders.map((order) => (
                    <li key={order.id}>Supply ID: {order.supplyId} - Quantity: {order.quantity}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newSupplyOrder.supplyId}
                    onChange={(e) => setNewSupplyOrder({ ...newSupplyOrder, supplyId: e.target.value })}
                    placeholder="Supply ID"
                />
                <input
                    type="number"
                    value={newSupplyOrder.quantity}
                    onChange={(e) => setNewSupplyOrder({ ...newSupplyOrder, quantity: e.target.value })}
                    placeholder="Quantity"
                />
                <button onClick={handleAddSupplyOrder}>Add Supply Order</button>
            </div>
        </div>
    );
}

export default SupplyOrders;
