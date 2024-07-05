import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Wallet from './components/Wallet';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Friends from './components/Friends';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
