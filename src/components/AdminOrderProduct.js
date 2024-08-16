import React, { useState } from 'react';
import './AdminOrderProduct.css';
import { useNavigate } from 'react-router-dom';

function AdminOrderProduct() {
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        itemQuantity: '',
        contactInfo: '',
        manufacturer_id: '1'
    });

    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5555/api/admin/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSuccessMessage('Product added successfully!');
                setTimeout(() => {
                    navigate('/admin');
                }, 1500);
            } else {
                const errorData = await response.json();
                setSuccessMessage(`Error: ${errorData.message || 'An error occurred.'}`);
            }
        } catch (error) {
            setSuccessMessage('Error: Failed to reach the server.');
        }
    };

    return (
        <div className="form-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="itemQuantity">Item Quantity:</label>
                <input
                    type="number"
                    id="itemQuantity"
                    name="itemQuantity"
                    value={formData.itemQuantity}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="contactInfo">My Contact Info:</label>
                <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="hidden"
                    name="manufacturer_id"
                    value={formData.manufacturer_id}
                />
                <button type="submit">Submit</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
        </div>
    );
}

export default AdminOrderProduct;
