import React from 'react';
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
    const ordersData = [
        { id: 'OR1001', item: 'Stainless Steel Lunch Box', status: 'Shipped', price: '$25.99' },
        { id: 'OR1002', item: 'Plastic Lunch Box', status: 'Pending', price: '$15.99' },
        { id: 'OR1003', item: 'Silicone Lunch Box', status: 'Delivered', price: '$19.99' },
        { id: 'OR1004', item: 'Wheat Straw Lunch Box', status: 'Processing', price: '$12.99' },
        { id: 'OR1005', item: 'Cookware Set', status: 'Pending', price: '$59.99' },
        { id: 'OR1006', item: 'Water Bottle', status: 'Shipped', price: '$9.99' },
        { id: 'OR1007', item: 'Cutlery', status: 'Delivered', price: '$8.99' },
        { id: 'OR1008', item: 'Mug', status: 'Processing', price: '$7.99' },
        { id: 'OR1009', item: 'Dinnerware Set', status: 'Shipped', price: '$39.99' },
        { id: 'OR1010', item: 'Kitchenware', status: 'Pending', price: '$49.99' },
        { id: 'OR1011', item: 'Camping Pot', status: 'Delivered', price: '$29.99' },
        { id: 'OR1012', item: 'Tray', status: 'Processing', price: '$14.99' },
        { id: 'OR1013', item: 'Lunch Box Bag', status: 'Shipped', price: '$11.99' },
    ];

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
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Item</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Status</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Price</TableCell>
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
                                <TableCell>{order.item}</TableCell>
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
                                <TableCell>{order.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <NavLink className="goback" to={`/`}>
                Back
            </NavLink>
        </Box>
    );
};

export default Orders;