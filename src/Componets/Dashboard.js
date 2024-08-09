import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {
    
    Grid,
    Paper,
    Typography,
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';  // Import the missing components
import Footer from './Footer';
import '../css/DashboardContent.css';  // Import the CSS file

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const DashboardContent = () => {
    const visitorData = {
        labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
        datasets: [
            {
                label: 'This Week',
                data: [100, 120, 130, 140, 160, 150, 140],
                fill: false,
                borderColor: '#007bff',
                tension: 0.1
            },
            {
                label: 'Last Week',
                data: [70, 90, 100, 110, 90, 80, 85],
                fill: false,
                borderColor: '#ced4da',
                tension: 0.1
            },
        ],
    };

    const salesData = {
        labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
            {
                label: 'This Year',
                data: [1000, 2000, 1500, 1700, 1800, 1600, 1900],
                backgroundColor: '#007bff',
            },
            {
                label: 'Last Year',
                data: [800, 1500, 1300, 1400, 1600, 1400, 1500],
                backgroundColor: '#ced4da',
            },
        ],
    };

    const productData = [
        { id: 1, name: 'Stainless Steel Lunch Box', price: '$25.99 USD', sales: '1,200 Sold', change: '15%', status: 'up' },
        { id: 2, name: 'Cookware Set', price: '$59.99 USD', sales: '2,300 Sold', change: '-1.5%', status: 'down' },
        { id: 3, name: 'Water Bottle', price: '$9.99 USD', sales: '4,150 Sold', change: '12%', status: 'up' },
        { id: 4, name: 'Dinnerware Set', price: '$39.99 USD', sales: '500 Sold', change: '-0.8%', status: 'down', new: true },
    ];

    const reviewData = [
        { id: 1, user: 'John Doe', comment: 'Great product!', rating: 5 },
        { id: 2, user: 'Jane Smith', comment: 'Good quality and fast shipping.', rating: 4 },
        { id: 3, user: 'Bob Johnson', comment: 'Average experience.', rating: 3 },
    ];

    return (
        <Box className="dashboard-container">
            {/* Top Stats Section */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className="paper" style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
                      <i class="fa-solid fa-road"></i>
                        <Typography variant="h6">CPU Traffic</Typography>
                        <Typography variant="h4">10%</Typography> </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className="paper" style={{ backgroundColor: '#dc3545', color: '#fff' }}>
                    <i class="fa-solid fa-thumbs-up"></i>
                        <Typography variant="h6">Likes</Typography>
                        <Typography variant="h4">41,410</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className="paper" style={{ backgroundColor: '#28a745', color: '#fff' }}>
                    <i class="fa-solid fa-bag-shopping"></i>
                        <Typography variant="h6">Sales</Typography>
                        <Typography variant="h4">760</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className="paper" style={{ backgroundColor: '#ffc107', color: '#fff' }}>
                    <i class="fa-regular fa-user"></i>
                        <Typography variant="h6">New Members</Typography>
                        <Typography variant="h4">2,000</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Visitors Over Time */}
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <Paper className="paper">
                        <Typography variant="h6" gutterBottom>
                            Online Store Visitors
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            820
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            Visitors Over Time
                        </Typography>
                        <Line data={visitorData} />
                    </Paper>
                </Grid>
                {/* Sales Over Time */}
                <Grid item xs={12} md={6}>
                    <Paper className="paper">
                        <Typography variant="h6" gutterBottom>
                            Sales
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            $18,230.00
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            Sales Over Time
                        </Typography>
                        <Bar data={salesData} />
                    </Paper>
                </Grid>
            </Grid>

            {/* Product and Reviews Tables */}
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {/* Product Table */}
                <Grid item xs={12} md={6}>
                    <Paper className="paper">
                        <Typography variant="h6" gutterBottom>
                           Latest Added Products
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Sales</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productData.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.price}</TableCell>
                                            <TableCell>{product.sales}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                {/* Reviews Table */}
                <Grid item xs={12} md={6}>
                    <Paper className="paper">
                        <Typography variant="h6" gutterBottom>
                            Online Store Reviews
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User</TableCell>
                                        <TableCell>Comment</TableCell>
                                        <TableCell>Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {reviewData.map((review) => (
                                        <TableRow key={review.id}>
                                            <TableCell>{review.user}</TableCell>
                                            <TableCell>{review.comment}</TableCell>
                                            <TableCell>{review.rating} / 5</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
            
            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default DashboardContent;