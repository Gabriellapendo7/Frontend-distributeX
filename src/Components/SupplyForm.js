import React, { useState } from 'react';
import './SupplyForm.css';

const SupplyForm = () => {
    const [formData, setFormData] = useState({
        AdminID: '',
        ManufacturerID: '',
        supply_name: '',
        quantity_ordered: '',
        order_date: '',
        ProductID: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5555/api/supply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data); // Handle success response as needed
        } catch (error) {
            console.error('Error:', error); // Handle error as needed
        }
    };

    return (
        <div className="form-container">
            <h2>Supply Form</h2>
            <form onSubmit={handleSubmit} className="supply-form">
                <label htmlFor="AdminID">Admin ID:</label>
                <input
                    type="number"
                    name="AdminID"
                    value={formData.AdminID}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="ManufacturerID">Manufacturer ID:</label>
                <input
                    type="number"
                    name="ManufacturerID"
                    value={formData.ManufacturerID}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="supply_name">Supply Name:</label>
                <input
                    type="text"
                    name="supply_name"
                    value={formData.supply_name}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="quantity_ordered">Quantity Ordered:</label>
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
                
                <label htmlFor="ProductID">Product ID:</label>
                <input
                    type="number"
                    name="ProductID"
                    value={formData.ProductID}
                    onChange={handleChange}
                    required
                />
                
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default SupplyForm;
