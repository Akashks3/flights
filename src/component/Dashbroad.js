import React, { useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import Navbar from './Navbar'; 
import FlightTable from './Route';

const Dashboard = () => {
    const [bookingStats] = useState({
        totalBookings: 0,
        mostPopularRoute: '',
        averageBookingValue: 0,
        trends: [] 
    });


    return (
        <div style={{ padding: '16px' }}>
            <Navbar /> 
            <Typography variant="h4" gutterBottom>
             Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Total Bookings</Typography>
                        <Typography variant="h4">{bookingStats.totalBookings}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
          
            <Typography variant="h6">Most Popular Route 
            <FlightTable />
            </Typography>
                        <Typography variant="h4">{bookingStats.mostPopularRoute}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Average Booking Value</Typography>
                        <Typography variant="h4">${bookingStats.averageBookingValue}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
