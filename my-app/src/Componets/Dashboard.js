import React, { useEffect, useState } from 'react';
import './chartconfig'; 
import { Line, Bar } from 'react-chartjs-2';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    CircularProgress
} from '@mui/material';
import Footer from './Footer';
import '../css/DashboardContent.css';

const DashboardContent = () => {
    // Static data for visitors
    const staticVisitorData = [
        { date: '2024-08-01', count: 200 },
        { date: '2024-08-02', count: 300 },
        { date: '2024-08-03', count: 250 },
        { date: '2024-08-04', count: 400 },
        { date: '2024-08-05', count: 350 },
        { date: '2024-08-06', count: 500 }
    ];

    const [visitorData, setVisitorData] = useState({
        labels: staticVisitorData.map(d => d.date),
        datasets: [
            {
                label: 'Visitors',
                data: staticVisitorData.map(d => d.count),
                borderColor: '#17a2b8',
                backgroundColor: 'rgba(23, 162, 184, 0.2)',
            },
        ],
    });
    const [salesData, setSalesData] = useState(null);
    const [productData, setProductData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [salesResponse, productsResponse, reviewsResponse] = await Promise.all([
                    fetch('/api/sales'),
                    fetch('/api/products'),
                    fetch('/api/reviews')
                ]);
    
                if (!salesResponse.ok || !productsResponse.ok || !reviewsResponse.ok) {
                    throw new Error('Failed to fetch data');
                }
    
                const [salesData, productData, reviewData] = await Promise.all([
                    salesResponse.json(),
                    productsResponse.json(),
                    reviewsResponse.json()
                ]);
    
                setSalesData({
                    labels: salesData.map(d => d.sale_date),
                    datasets: [
                        {
                            label: 'Total Sales',
                            data: salesData.map(d => d.total_amount),
                            backgroundColor: '#007bff',
                        },
                    ],
                });
                setProductData(productData);
                setReviewData(reviewData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    return (
        <Box className="dashboard-container">
            {loading ? (
                <Box className="loading-container">
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    {/* Top Stats Section */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className="paper" style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
                            <i class="fa-solid fa-road"></i>
                                <Typography variant="h6">CPU Traffic</Typography>
                                <Typography variant="h4">10%</Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper className="paper" style={{ backgroundColor: '#dc3545', color: '#fff' }}>
                            <i class="fa-regular fa-thumbs-up"></i>
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
                            <i class="fa-solid fa-user"></i>
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
                                <Line data={visitorData} />
                            </Paper>
                        </Grid>
                        {/* Sales Over Time */}
                        <Grid item xs={12} md={6}>
                            <Paper className="paper">
                                <Typography variant="h6" gutterBottom>
                                    Sales
                                </Typography>
                                {salesData ? <Bar data={salesData} /> : <Typography>No sales data available</Typography>}
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
                                            {productData.length ? productData.map((product) => (
                                                <TableRow key={product.id}>
                                                    <TableCell>{product.name}</TableCell>
                                                    <TableCell>{product.price}</TableCell>
                                                    <TableCell>{product.sales}</TableCell>
                                                </TableRow>
                                            )) : (
                                                <TableRow>
                                                    <TableCell colSpan={3}>No products available</TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                        {/* Reviews Table */}
                        <Grid item xs={12} md={6}>
                            <Paper className="paper">
                                <Typography variant="h6" gutterBottom>
                                    Latest Reviews
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
                                            {reviewData.length ? reviewData.map((review) => (
                                                <TableRow key={review.id}>
                                                    <TableCell>{review.user}</TableCell>
                                                    <TableCell>{review.comment}</TableCell>
                                                    <TableCell>{review.rating}</TableCell>
                                                </TableRow>
                                            )) : (
                                                <TableRow>
                                                    <TableCell colSpan={3}>No reviews available</TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            )}
            <Footer />
        </Box>
    );
};

export default DashboardContent;
