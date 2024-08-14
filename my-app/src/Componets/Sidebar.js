import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import '../css/Sidebar.css';  // Import the CSS file

const Sidebar = () => {
    return (
        <Paper className="sidebar">
            <Typography variant="h6" gutterBottom>
                Sidebar
            </Typography>
            <Box>
                <Typography variant="body1">Link 1</Typography>
                <Typography variant="body1">Link 2</Typography>
                <Typography variant="body1">Link 3</Typography>
            </Box>
        </Paper>
    );
};

export default Sidebar;
