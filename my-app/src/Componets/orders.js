import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Box,
    Typography,
} from '@mui/material';

const Orders = () => {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/orders');
                const data = await response.json();
                setOrdersData(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Shipped':
                return 'green';
            case 'Pending':
                return 'orange';
            case 'Delivered':
                return 'red';
            case 'Processing':
                return 'blue';
            default:
                return 'grey';
        }
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#6d96d4', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
                Latest Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Order ID</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Client ID</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Order Date</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Status</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordersData.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <a href={`#${order.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                                        {order.id}
                                    </a>
                                </TableCell>
                                <TableCell>{order.client_id}</TableCell>
                                <TableCell>{order.order_date}</TableCell>
                                <TableCell>
                                    <span style={{
                                        color: '#fff',
                                        backgroundColor: getStatusColor(order.status),
                                        padding: '3px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                    }}>
                                        {order.status}
                                    </span>
                                </TableCell>
                                <TableCell>{order.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <NavLink className="goback" to="/">
                Back
            </NavLink>
        </Box>
    );
};

export default Orders;
