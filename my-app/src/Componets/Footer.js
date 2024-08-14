import React from 'react';
import { Box, Typography } from '@mui/material';
import '../css/Footer.css';  // Import the CSS file

const Footer = () => {
    return (
        <Box className="footer">
            <Typography variant="body2" align="center">
                © 2024 Ecommerce App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
