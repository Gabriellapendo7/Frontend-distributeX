import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Receipts.css';

function Receipts() {
    const [receipts, setReceipts] = useState([]);
    const [newReceipt, setNewReceipt] = useState({ orderId: '', totalAmount: 0 });

    useEffect(() => {
        const fetchReceipts = async () => {
            try {
                const response = await axios.get('/receipts');
                setReceipts(response.data);
            } catch (error) {
                console.error('Error fetching receipts:', error);
            }
        };

        fetchReceipts();
    }, []);

    const handleAddReceipt = async () => {
        try {
            const response = await axios.post('/receipts', newReceipt);
            setReceipts([...receipts, response.data]);
            setNewReceipt({ orderId: '', totalAmount: 0 });
        } catch (error) {
            console.error('Error adding receipt:', error);
        }
    };

    return (
        <div>
            <h1>Receipts</h1>
            <ul>
                {receipts.map((receipt) => (
                    <li key={receipt.id}>Order ID: {receipt.orderId} - Total Amount: {receipt.totalAmount}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newReceipt.orderId}
                    onChange={(e) => setNewReceipt({ ...newReceipt, orderId: e.target.value })}
                    placeholder="Order ID"
                />
                <input
                    type="number"
                    value={newReceipt.totalAmount}
                    onChange={(e) => setNewReceipt({ ...newReceipt, totalAmount: e.target.value })}
                    placeholder="Total Amount"
                />
                <button onClick={handleAddReceipt}>Add Receipt</button>
            </div>
        </div>
    );
}

export default Receipts;
