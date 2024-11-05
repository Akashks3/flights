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

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { username, email, password } = formData;
        if (!username || !email || !password) {
            setError('All fields are required.');
            return false;
        }
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post('https://flight-xtfp.onrender.com/register', formData);
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 500); 
        } catch (err) {
            setError('Registration failed, please try again.');
        }
    };

    const handleCloseSnackbar = () => {
        setError('');
        setSuccess(false);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleRegister}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    type="email"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                    type="password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Register
                </Button>
            </form>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Registration successful! Redirecting to login...
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Register;
