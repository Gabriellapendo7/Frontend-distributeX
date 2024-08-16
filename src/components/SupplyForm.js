import React, { useState } from 'react';
import './SupplyForm.css';

const SupplyForm = () => {
    const [formData, setFormData] = useState({
        supply_name: '',
        quantity_ordered: '',
        order_date: '',
        manufacturer_id: 1 // Set default value
    });
    
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'quantity_ordered' ? parseInt(value) : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await fetch('http://localhost:5555/api/supply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setMessage('Supply added successfully!');

            setFormData({
                supply_name: '',
                quantity_ordered: '',
                order_date: '',
                manufacturer_id: 1 // Reset default value
            });
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while adding the supply.');
        }
    };

    return (
        <div className="form-container">
            <h2>Supply Form</h2>
            <form onSubmit={handleSubmit} className="supply-form">
                <label htmlFor="supply_name">Supply Name:</label>
                <input
                    type="text"
                    name="supply_name"
                    value={formData.supply_name}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="quantity_ordered">Quantity to add:</label>
                <input
                    type="number"
                    name="quantity_ordered"
                    value={formData.quantity_ordered}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="order_date">Order Date:</label>
                <input
                    type="date"
                    name="order_date"
                    value={formData.order_date}
                    onChange={handleChange}
                    required
                />

                {/* Hidden field for manufacturer_id */}
                <input
                    type="hidden"
                    name="manufacturer_id"
                    value={formData.manufacturer_id}
                />
                
                <button type="submit" className="submit-button">Submit</button>
            </form>

            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default SupplyForm;
