import React, { useState } from 'react';  
import { useLocation } from 'react-router-dom';
import { Typography, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import jsPDF from 'jspdf';

const BookingConfirmation = () => {
    const location = useLocation();
    const { flight, seats } = location.state || {};

    const [totalAmount, setTotalAmount] = useState(0);
    const [confirmPaymentDialogOpen, setConfirmPaymentDialogOpen] = useState(false);
    
    if (!flight) {
        return <Typography variant="h6">No booking details available.</Typography>;
    }

    const pricePerPassenger = flight.economyPrice;
    const totalPassengers = seats.length;
    const calculatedTotalAmount = (pricePerPassenger * totalPassengers).toFixed(2);

    const downloadTicket = () => {
        const doc = new jsPDF();

        doc.setFillColor(240, 248, 255); 
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

        doc.setFontSize(24);
        doc.setTextColor(0, 51, 102); 
        doc.text('Booking Confirmation', 20, 20);

        doc.setDrawColor(0, 51, 102); 
        doc.line(20, 25, 190, 25);

        const details = [
            `Airline: ${flight.airline}`,
            `From: ${flight.departure}`,
            `To: ${flight.arrival}`,
            `Departure Time: ${new Date(flight.departureTime).toLocaleString()}`,
            `Arrival Time: ${new Date(flight.arrivalTime).toLocaleString()}`,
            `Price per Passenger: $${pricePerPassenger}`,
            `Total Passengers: ${totalPassengers}`,
            `Selected Seats: ${seats.join(', ')}`,
            `Total Amount: $${calculatedTotalAmount}`,
        ];

        let yPosition = 40;
        doc.setFontSize(14);
        details.forEach((detail) => {
            doc.text(detail, 20, yPosition);
            yPosition += 10; 
        });

        doc.line(20, yPosition, 190, yPosition);
        
        doc.setFontSize(10);
        doc.text('Thank you for choosing our airline!', 20, yPosition + 10);
        doc.text('Safe travels!', 20, yPosition + 20);
        
        doc.save('ticket.pdf');
    };


    const handlePayment = () => {
       
        setTotalAmount(calculatedTotalAmount);
        setConfirmPaymentDialogOpen(true);
    };

    
    const handleConfirmPayment = () => {
        
        alert('Payment processing is initiated!'); 

        setConfirmPaymentDialogOpen(false);
        downloadTicket();
    };

    return (
        <div style={{ padding: '16px' }}>
            <Typography variant="h4" gutterBottom>
                Booking Confirmation
            </Typography>
            <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6">Flight Details</Typography>
                <Typography variant="body1">Airline: {flight.airline}</Typography>
                <Typography variant="body1">From: {flight.departure}</Typography>
                <Typography variant="body1">To: {flight.arrival}</Typography>
                <Typography variant="body1">
                    Departure Time: {new Date(flight.departureTime).toLocaleString()}
                </Typography>
                <Typography variant="body1">
                    Arrival Time: {new Date(flight.arrivalTime).toLocaleString()}
                </Typography>
                <Typography variant="body1">
                    Price per Passenger: ${pricePerPassenger}
                </Typography>
                <Typography variant="body1">
                    Total Passengers: {totalPassengers}
                </Typography>
                <Typography variant="body1">Selected Seats: {seats.join(', ')}</Typography>
                <Typography variant="body1">
                    Total Amount: ${calculatedTotalAmount}
                </Typography>
            </Paper>
            <Button 
                variant="contained" 
                color="secondary" 
                style={{ marginTop: '16px' }} 
                onClick={handlePayment} 
            >
                Pay Now
            </Button>

            <Dialog open={confirmPaymentDialogOpen} onClose={() => setConfirmPaymentDialogOpen(false)}>
                <DialogTitle>Confirm Payment</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to pay ${totalAmount}?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmPayment} color="primary">
                        Yes, Pay Now
                    </Button>
                    <Button onClick={() => setConfirmPaymentDialogOpen(false)} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BookingConfirmation;
