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
                    Welcome to DistributeX, your premier source for wholesale distribution. We're committed to providing you with the highest quality products, exceptional customer service, and a unique selection tailored to your needs.
                </Typography>
                <Typography variant="body1" paragraph>
                    Founded in 2020, DistributeX has grown from its humble beginnings in Prestige Plaza. Our passion for distribution and sales inspired us to create a business that prioritizes our customers' success.
                </Typography>
                <Typography variant="body1" paragraph>
                    We hope you find our products as valuable as we do. If you have any questions or comments, please don't hesitate to reach out to us.
                </Typography>
                <Typography variant="body1" paragraph>
                    Sincerely,
                </Typography>
                <Typography variant="body1" paragraph>
                    Timon, Founder
                </Typography>
            </Box>
            <NavLink className="goback" to={`/`}>
                Back
            </NavLink>
        </Container>
    );
};

export default About;
