import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from '@mui/material';
import '../css/Clients.css';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('/api/clients');
                if (!response.ok) throw new Error('Failed to fetch clients');
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    return (
        <Box className="clients-container">
            {loading ? (
                <Box className="loading-container">
                    <CircularProgress />
                </Box>
            ) : (
                <Paper className="clients-paper">
                    <Typography variant="h6" gutterBottom>
                        Clients List
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Shipping Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clients.length ? clients.map(client => (
                                    <TableRow key={client.id}>
                                        <TableCell>{client.username}</TableCell>
                                        <TableCell>{client.email}</TableCell>
                                        <TableCell>{client.shipping_address || 'N/A'}</TableCell>
                                    </TableRow>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={3}>No clients available</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            )}
        </Box>
    );
};

export default Clients;
