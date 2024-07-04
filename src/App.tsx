// import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Wallet from './components/Wallet';
import Footer from './components/Footer';
import Mission from './components/mission';
import Friends from './components/friends';
// import Popup from './components/popup';


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
