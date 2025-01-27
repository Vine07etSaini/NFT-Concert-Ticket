import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import EventCardGrid from './components/EventCardGrid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import Admin from './components/Admin';
import User from './components/User';
import AdminPanel from './components/AdminPanel';
import PurchasedTickets from './components/PurchasedTickets';
import Prices from './components/Prices';
import Ticket from './components/Ticket';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Logo />
          <EventCardGrid />
        </>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/yourTickets" element={<PurchasedTickets />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
