import React, { useState } from 'react';
import './SupplyForm.css';

const SupplyForm = () => {
    const [formData, setFormData] = useState({
        supply_name: '',
        quantity_ordered: '',
        order_date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
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
                
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default SupplyForm;
