import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {Typography} from '@mui/material';
const columns = [
    { field: 'flightId', headerName: 'Flight ID', width: 100 },
    { field: 'airline', headerName: 'Airline', width: 150 },
    { field: 'departure', headerName: 'Departure', width: 200 },
    { field: 'arrival', headerName: 'Arrival', width: 200 }
];

const flightsData = [
    { flightId: "AI202", airline: "Air India", departure: "Delhi (DEL)", arrival: "Mumbai (BOM)" },
    { flightId: "6E105", airline: "IndiGo", departure: "Mumbai (BOM)", arrival: "Bangalore (BLR)" },
    { flightId: "SG504", airline: "SpiceJet", departure: "Bangalore (BLR)", arrival: "Chennai (MAA)" },
    { flightId: "UK456", airline: "Vistara", departure: "Chennai (MAA)", arrival: "Kolkata (CCU)" },
    { flightId: "AI203", airline: "Air India", departure: "Kolkata (CCU)", arrival: "Delhi (DEL)" },
    { flightId: "6E204", airline: "IndiGo", departure: "Hyderabad (HYD)", arrival: "Pune (PNQ)" },
    { flightId: "AI205", airline: "Air India", departure: "Pune (PNQ)", arrival: "Goa (GOI)" },
    { flightId: "SG506", airline: "SpiceJet", departure: "Goa (GOI)", arrival: "Mumbai (BOM)" },
    { flightId: "UK457", airline: "Vistara", departure: "Jaipur (JAI)", arrival: "Ahmedabad (AMD)" },
    { flightId: "AI206", airline: "Air India", departure: "Lucknow (LKO)", arrival: "Delhi (DEL)" },
    { flightId: "6E207", airline: "IndiGo", departure: "Kochi (COK)", arrival: "Hyderabad (HYD)" },
    { flightId: "UK458", airline: "Vistara", departure: "Indore (IDR)", arrival: "Bangalore (BLR)" },
    { flightId: "AI208", airline: "Air India", departure: "Delhi (DEL)", arrival: "Chennai (MAA)" },
    { flightId: "6E109", airline: "IndiGo", departure: "Mumbai (BOM)", arrival: "Kolkata (CCU)" },
    { flightId: "SG509", airline: "SpiceJet", departure: "Bangalore (BLR)", arrival: "Jaipur (JAI)" },
    { flightId: "UK459", airline: "Vistara", departure: "Kolkata (CCU)", arrival: "Goa (GOI)" },
    { flightId: "AI209", airline: "Air India", departure: "Ahmedabad (AMD)", arrival: "Lucknow (LKO)" },
    { flightId: "6E210", airline: "IndiGo", departure: "Goa (GOI)", arrival: "Pune (PNQ)" },
    { flightId: "SG511", airline: "SpiceJet", departure: "Pune (PNQ)", arrival: "Hyderabad (HYD)" },
    { flightId: "UK460", airline: "Vistara", departure: "Hyderabad (HYD)", arrival: "Delhi (DEL)" }
];

const FlightTable = () => {
    return (
        <Box sx={{ height: 600, width: '100%' }}>
             <Typography variant="h4" gutterBottom>
        Route  
        </Typography>
            <DataGrid
                rows={flightsData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                getRowId={(row) => row.flightId} 
                checkboxSelection 
            />
        </Box>
    );
};

export default FlightTable;
