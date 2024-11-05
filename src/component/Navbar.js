import React from 'react';  
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        console.log('User logged out');
        navigate('/');
    };

    const email = localStorage.getItem('email');

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Typography variant="h6" color="blue" component="div" sx={{ flexGrow: 1 }}>
                    FBS
                </Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link to="/route" style={{ textDecoration: 'none' }}>
                    <Button color="inherit">FlightRoute</Button>
                </Link>
                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <Button color="inherit">SearchFlight&Bookings</Button>
                </Link>
                {email && ( 
                    <Box display="flex" alignItems="center">
                        <Typography
                            variant="h6"
                            color="blue"
                            sx={{
                                marginLeft: 2,
                                backgroundColor: '',
                                borderRadius: '50%',
                                width: 30,
                                height: 30,
                                color: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {email.charAt(0).toUpperCase()} 
                        </Typography>
                        <Typography variant="body1" sx={{ marginLeft: 1, color: 'gray' }}>
                            {email}
                        </Typography>
                    </Box>
                )}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button color="inherit">Login</Button>
                </Link>
                <Button 
                    color="primary" 
                    onClick={handleLogout} 
                    sx={{ marginLeft: 2 }}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
