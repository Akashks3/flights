import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url('https://i.pinimg.com/originals/13/df/99/13df99d0e541b9d1fc20039354d2866f.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={backgroundImageStyle}>
            <div className="" align="center">
                    <Typography variant="h3" component="h1" align="center" gutterBottom>
                        Welcome to <br></br>Flight Booking System
                    </Typography>
                    <div className="flex space-x-4 justify-center mt-4">
                        <Button
                            component={Link}
                            to="/login"
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: 1 }}
                        >
                            Login
                        </Button>
                        <Button
                            component={Link}
                            to="/register"
                            variant="contained"
                            color="success"
                        >
                            Register
                        </Button>
                    </div>
                
            </div>
        </div>
    );
};

export default Home;
