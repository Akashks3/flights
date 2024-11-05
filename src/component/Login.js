import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert
} from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://flight-xtfp.onrender.com/login', { email, password });
            localStorage.setItem('token', response.data.token);
            setSuccess(true);    
            setTimeout(() => {
                navigate('/dashbroad'); 
            }, 500); 
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    const handleCloseSnackbar = () => {
        setError('');
        setSuccess(false);
    };

    return (
        <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            {error && (
                <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
            )}
            <form onSubmit={handleLogin} style={{ width: '100%', backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '16px' }}
                >
                    Login
                </Button>
            </form>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Login successful! Redirecting...
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Login;
