import React, { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Paper,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Snackbar,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlightTable from './Route';

const flightsData = [
    {
        flightId: "AI202",
        airline: "Air India",
        departure: "Delhi (DEL)",
        arrival: "Mumbai (BOM)",
        departureTime: "2024-11-15T10:30:00",
        arrivalTime: "2024-11-15T12:00:00",
        availableSeats: 25,
        economyPrice: 4500,
        businessPrice: 8500,
        firstClassPrice: 15000,
    },
    {
        flightId: "6E105",
        airline: "IndiGo",
        departure: "Mumbai (BOM)",
        arrival: "Bangalore (BLR)",
        departureTime: "2024-11-15T15:00:00",
        arrivalTime: "2024-11-15T16:30:00",
        availableSeats: 10,
        economyPrice: 3500,
        businessPrice: 7500,
        firstClassPrice: 14000,
    },
    {
        flightId: "SG504",
        airline: "SpiceJet",
        departure: "Bangalore (BLR)",
        arrival: "Chennai (MAA)",
        departureTime: "2024-11-16T07:00:00",
        arrivalTime: "2024-11-16T08:15:00",
        availableSeats: 30,
        economyPrice: 2200,
        businessPrice: 5200,
        firstClassPrice: 9000,
    },
    {
        flightId: "UK456",
        airline: "Vistara",
        departure: "Chennai (MAA)",
        arrival: "Kolkata (CCU)",
        departureTime: "2024-11-16T11:45:00",
        arrivalTime: "2024-11-16T13:55:00",
        availableSeats: 15,
        economyPrice: 4800,
        businessPrice: 8900,
        firstClassPrice: 12500,
    },
    {
        flightId: "AI203",
        airline: "Air India",
        departure: "Kolkata (CCU)",
        arrival: "Delhi (DEL)",
        departureTime: "2024-11-17T05:30:00",
        arrivalTime: "2024-11-17T08:00:00",
        availableSeats: 20,
        economyPrice: 5300,
        businessPrice: 9800,
        firstClassPrice: 17000,
    },
    {
        flightId: "6E204",
        airline: "IndiGo",
        departure: "Hyderabad (HYD)",
        arrival: "Pune (PNQ)",
        departureTime: "2024-11-18T12:15:00",
        arrivalTime: "2024-11-18T13:45:00",
        availableSeats: 18,
        economyPrice: 2900,
        businessPrice: 6900,
        firstClassPrice: 11000,
    },
    {
        flightId: "AI205",
        airline: "Air India",
        departure: "Pune (PNQ)",
        arrival: "Goa (GOI)",
        departureTime: "2024-11-18T09:00:00",
        arrivalTime: "2024-11-18T10:00:00",
        availableSeats: 22,
        economyPrice: 3100,
        businessPrice: 7100,
        firstClassPrice: 9500,
    },
    {
        flightId: "SG506",
        airline: "SpiceJet",
        departure: "Goa (GOI)",
        arrival: "Mumbai (BOM)",
        departureTime: "2024-11-18T14:30:00",
        arrivalTime: "2024-11-18T15:45:00",
        availableSeats: 12,
        economyPrice: 2600,
        businessPrice: 6300,
        firstClassPrice: 10500,
    },
    {
        flightId: "UK457",
        airline: "Vistara",
        departure: "Jaipur (JAI)",
        arrival: "Ahmedabad (AMD)",
        departureTime: "2024-11-19T16:00:00",
        arrivalTime: "2024-11-19T17:15:00",
        availableSeats: 20,
        economyPrice: 2400,
        businessPrice: 5600,
        firstClassPrice: 8800,
    },
    {
        flightId: "AI206",
        airline: "Air India",
        departure: "Lucknow (LKO)",
        arrival: "Delhi (DEL)",
        departureTime: "2024-11-20T06:45:00",
        arrivalTime: "2024-11-20T08:15:00",
        availableSeats: 17,
        economyPrice: 4100,
        businessPrice: 7900,
        firstClassPrice: 12000,
    },
    {
        flightId: "6E207",
        airline: "IndiGo",
        departure: "Kochi (COK)",
        arrival: "Hyderabad (HYD)",
        departureTime: "2024-11-21T18:00:00",
        arrivalTime: "2024-11-21T19:45:00",
        availableSeats: 25,
        economyPrice: 3000,
        businessPrice: 6700,
        firstClassPrice: 11500,
    },
    {
        flightId: "UK458",
        airline: "Vistara",
        departure: "Indore (IDR)",
        arrival: "Bangalore (BLR)",
        departureTime: "2024-11-22T08:30:00",
        arrivalTime: "2024-11-22T10:15:00",
        availableSeats: 18,
        economyPrice: 3200,
        businessPrice: 7200,
        firstClassPrice: 10500,
    },
    {
        flightId: "AI208",
        airline: "Air India",
        departure: "Delhi (DEL)",
        arrival: "Chennai (MAA)",
        departureTime: "2024-11-23T11:00:00",
        arrivalTime: "2024-11-23T13:30:00",
        availableSeats: 22,
        economyPrice: 5100,
        businessPrice: 8700,
        firstClassPrice: 15500,
    },
    {
        flightId: "6E109",
        airline: "IndiGo",
        departure: "Mumbai (BOM)",
        arrival: "Kolkata (CCU)",
        departureTime: "2024-11-23T20:00:00",
        arrivalTime: "2024-11-23T23:15:00",
        availableSeats: 15,
        economyPrice: 5200,
        businessPrice: 8200,
        firstClassPrice: 13500,
    },
    {
        flightId: "SG509",
        airline: "SpiceJet",
        departure: "Bangalore (BLR)",
        arrival: "Jaipur (JAI)",
        departureTime: "2024-11-24T06:00:00",
        arrivalTime: "2024-11-24T08:30:00",
        availableSeats: 28,
        economyPrice: 4400,
        businessPrice: 7800,
        firstClassPrice: 13000,
    },
    {
        flightId: "UK459",
        airline: "Vistara",
        departure: "Kolkata (CCU)",
        arrival: "Goa (GOI)",
        departureTime: "2024-11-24T14:00:00",
        arrivalTime: "2024-11-24T17:00:00",
        availableSeats: 30,
        economyPrice: 5800,
        businessPrice: 9300,
        firstClassPrice: 14000,
    },
    {
        flightId: "AI209",
        airline: "Air India",
        departure: "Ahmedabad (AMD)",
        arrival: "Lucknow (LKO)",
        departureTime: "2024-11-25T13:30:00",
        arrivalTime: "2024-11-25T15:30:00",
        availableSeats: 14,
        economyPrice: 3600,
        businessPrice: 7300,
        firstClassPrice: 11800,
    },
    {
        flightId: "6E210",
        airline: "IndiGo",
        departure: "Goa (GOI)",
        arrival: "Pune (PNQ)",
        departureTime: "2024-11-25T17:00:00",
        arrivalTime: "2024-11-25T18:15:00",
        availableSeats: 20,
        economyPrice: 3300,
        businessPrice: 7100,
        firstClassPrice: 10500,
    },
    {
        flightId: "SG511",
        airline: "SpiceJet",
        departure: "Pune (PNQ)",
        arrival: "Hyderabad (HYD)",
        departureTime: "2024-11-26T08:00:00",
        arrivalTime: "2024-11-26T09:15:00",
        availableSeats: 30,
        economyPrice: 2500,
        businessPrice: 6100,
        firstClassPrice: 9000,
    },
    {
        flightId: "UK460",
        airline: "Vistara",
        departure: "Hyderabad (HYD)",
        arrival: "Delhi (DEL)",
        departureTime: "2024-11-26T11:30:00",
        arrivalTime: "2024-11-26T13:30:00",
        availableSeats: 15,
        economyPrice: 4200,
        businessPrice: 8200,
        firstClassPrice: 14000,
    },

];

const locations = [
    { label: 'Delhi', value: 'DEL' },
    { label: 'Mumbai', value: 'BOM' },
    { label: 'Bangalore', value: 'BLR' },
    { label: 'Chennai', value: 'MAA' },
    { label: 'Kolkata', value: 'CCU' },
    { label: 'Hyderabad', value: 'HYD' },
    { label: 'Ahmedabad', value: 'AMD' },
    { label: 'Pune', value: 'PNQ' },
    { label: 'Goa', value: 'GOI' },
    { label: 'Jaipur', value: 'JAI' },
    { label: 'Lucknow', value: 'LKO' },
    { label: 'Kochi', value: 'COK' },
    { label: 'Indore', value: 'IDR' },
];

const FlightSearch = () => {
    const [searchParams, setSearchParams] = useState({
        departure: 'DEL',
        arrival: 'BOM',
        date: '',
    });
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [rememberSeats, setRememberSeats] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const savedSeats = localStorage.getItem('selectedSeats');
        if (savedSeats) {
            setSelectedSeats(JSON.parse(savedSeats));
        }
    }, []);

    useEffect(() => {
        if (rememberSeats) {
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        }
    }, [selectedSeats, rememberSeats]);

    const searchFlights = () => {
        const { departure, arrival, date } = searchParams;

        if (date && new Date(date) < new Date()) {
            alert('Please select a valid future date.');
            return;
        }

        const results = flightsData.filter(flight =>
            flight.departure.includes(departure) &&
            flight.arrival.includes(arrival) &&
            (date ? flight.departureTime.startsWith(date) : true)
        );
        setFilteredFlights(results);
    };

    const handleBooking = (flight) => {
        setSelectedFlight(flight);
        setSelectedSeats([]); // Reset selected seats
        setOpenDialog(true);
    };

    const handleSeatSelection = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats((prevSeats) => prevSeats.filter(s => s !== seat));
        } else {

            setSelectedSeats((prevSeats) => [...prevSeats, seat]);
        }
    };

    const handleConfirmBooking = async () => {
        const passengerCount = selectedSeats.length;


        if (selectedFlight.availableSeats < passengerCount) {
            alert('Not enough seats available!');
            return;
        }

        const bookingDetails = {
            flightId: selectedFlight.flightId,
            selectedSeats: selectedSeats,
        };

        try {
            fetch("https://flight-xtfp.onrender.com/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    flightId: "yourFlightId",
                    selectedSeats: ["A1", "A2"]
                })
            })
            const response = await fetch('https://flight-xtfp.onrender.com/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });
            console.log(bookingDetails)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Booking successful:', data);
            const updatedFlight = {
                ...selectedFlight,
                availableSeats: selectedFlight.availableSeats - passengerCount,
            };

            setFilteredFlights(filteredFlights.map(flight =>
                flight.flightId === updatedFlight.flightId ? updatedFlight : flight
            ));

            setSnackbarOpen(true);

            setOpenDialog(false);
            setSelectedSeats([]);

            navigate('/booking-confirmation', {
                state: { flight: updatedFlight, seats: selectedSeats },
            });
        } catch (error) {
            console.error('Error during booking:', error);
        }
    };

    return (
        <div style={{ padding: '16px' }}>


            <Typography variant="h4" gutterBottom>
                Flight Search
            </Typography>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            select
                            fullWidth
                            label="Departure"
                            variant="outlined"
                            value={searchParams.departure}
                            onChange={(e) => setSearchParams({ ...searchParams, departure: e.target.value })}
                        >
                            {locations.map((location) => (
                                <MenuItem key={location.value} value={location.value}>
                                    {location.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            select
                            fullWidth
                            label="Arrival"
                            variant="outlined"
                            value={searchParams.arrival}
                            onChange={(e) => setSearchParams({ ...searchParams, arrival: e.target.value })}
                        >
                            {locations.map((location) => (
                                <MenuItem key={location.value} value={location.value}>
                                    {location.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={searchFlights}
                    style={{ marginTop: '16px' }}
                >
                    Search Flights
                </Button>
            </Paper>

            <div style={{ marginTop: '16px' }}>
                {filteredFlights.length > 0 ? (
                    filteredFlights.map((flight) => (
                        <Paper key={flight.flightId} elevation={1} style={{ padding: '8px', marginBottom: '8px' }}>
                            <Typography variant="body1">
                                {flight.airline} - ${flight.economyPrice}
                            </Typography>
                            <Typography variant="body2">
                                Departure: {flight.departure} at {new Date(flight.departureTime).toLocaleString()}
                            </Typography>
                            <Typography variant="body2">
                                Arrival: {flight.arrival} at {new Date(flight.arrivalTime).toLocaleString()}
                            </Typography>
                            <Typography variant="body2">
                                Available Seats: {flight.availableSeats}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleBooking(flight)}
                                style={{ marginTop: '8px' }}
                            >
                                Book Now
                            </Button>
                        </Paper>
                    ))
                ) : (
                    <Typography variant="body1">No flights found for the selected criteria.</Typography>
                )}
            </div>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirm Booking</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Flight: {selectedFlight?.airline} - {selectedFlight?.departure} to {selectedFlight?.arrival}
                    </Typography>
                    <Typography variant="body2">
                        Price per Passenger: ${selectedFlight?.economyPrice}
                    </Typography>

                    <Typography variant="body2" style={{ marginTop: '16px' }}>
                        Select Seats:
                    </Typography>
                    <Grid container spacing={1}>
                        {Array.from({ length: selectedFlight?.availableSeats }, (_, index) => {
                            const seatNumber = index + 1;
                            return (
                                <Grid item xs={2} key={seatNumber}>
                                    <Button
                                        variant="outlined"
                                        style={{
                                            width: '100%',
                                            backgroundColor: selectedSeats.includes(seatNumber) ? 'lightblue' : 'white',
                                        }}
                                        onClick={() => handleSeatSelection(seatNumber)}
                                    >
                                        {seatNumber}
                                    </Button>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Typography variant="body2" style={{ marginTop: '16px' }}>
                        Selected Seats: {selectedSeats.join(', ') || 'None'}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberSeats}
                                onChange={() => setRememberSeats(!rememberSeats)}
                            />
                        }
                        label="Remember my seat selection"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">Cancel</Button>
                    <Button onClick={handleConfirmBooking} color="primary">Confirm</Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                message="Booking successful!"
            />
            <FlightTable />
        </div>
    );
};

export default FlightSearch;
