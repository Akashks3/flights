import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashbroad';
import FlightSearch from './component/Flight';
import Home from './component/Home';
import BookingConfirmation from './component/BookingConfirmation';
import FlightTable from './component/Route';
function App() {
  return (
    <div className="App">
       <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashbroad" element={<Dashboard />} />
                    <Route path="/create" element={<FlightSearch />} />
                    <Route path="/route" element={<FlightTable />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
