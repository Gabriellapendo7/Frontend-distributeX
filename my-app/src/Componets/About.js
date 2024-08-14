import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Typography, Box } from '@mui/material';
import '../css/about.css'

const About = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Box className="about-content">
                <Typography variant="h3" gutterBottom className="about-title">
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to our Ecommerce app, your number one source for all things commercial. We're dedicated to providing you the very best of the products we offer, with an emphasis on quality, customer service, and uniqueness.
                </Typography>
                <Typography variant="body1" paragraph>
                    Founded in 2020, We come a long way from its beginnings in Prestige plaza. When we first started out, our passion for sales drove us to start our own business.
                </Typography>
                <Typography variant="body1" paragraph>
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </Typography>
                <Typography variant="body1" paragraph>
                    Sincerely,
                </Typography>
                <Typography variant="body1" paragraph>
                    Mohammed, Founder
                </Typography>
            </Box>
            <NavLink className="goback" to={`/`}>
                Back
            </NavLink>
        </Container>
    );
};

export default About;
