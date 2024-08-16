import React, { useState, useEffect } from 'react';
import './AdminPage.css';

function AdminPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [manufacturers, setManufacturers] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5555/admin/manufacturers')  
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setManufacturers(data))
            .catch(error => console.error('Error fetching manufacturers:', error));

        fetch('http://localhost:5555/api/clients') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setClients(data))
            .catch(error => console.error('Error fetching clients:', error));
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="admin-page">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                    <button className="close-btn" onClick={toggleSidebar}>×</button>
                </div>
                <ul className="sidebar-links">
                    <li><a href="/admin/order-product">Order Product from Manufacturer</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/admin/manage-stock-products">Manage Stock Products</a></li>
                </ul>
            </div>
            <div className="content">
                <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                <h1>Manufacturers</h1>
                <div className="manufacturer-list">
                    {manufacturers.length > 0 ? (
                        manufacturers.map(manufacturer => (
                            <div className="manufacturer-card" key={manufacturer.id}>
                                <h3>{manufacturer.companyname}</h3>
                                <p>ID: {manufacturer.id}</p>
                                <p>Contact: {manufacturer.contactinfo}</p>
                            </div>
                        ))
                    ) : (
                        <p>No manufacturers found.</p>
                    )}
                </div>
                <h1>Clients</h1>
                <div className="manufacturer-list">
                    {clients.length > 0 ? (
                        clients.map(client => (
                            <div className="manufacturer-card" key={client.id}>
                                <h3>{client.companyname}</h3>
                                <p>ID: {client.id}</p>
                                <p>Contact: {client.contactinfo}</p>
                            </div>
                        ))
                    ) : (
                        <p>No clients found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
