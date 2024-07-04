import React, { useState } from 'react';
import '../assets/Dashboard.css';
import tronIcon from '../assets/tron-icon.png';
import fanImage from '../assets/fan-image.png';


const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="dashboard">
      <div className="balances">
        <div className="balance-card">
          <img src={tronIcon} alt="Tron" className="icon" />
          <div>
            <p className="balance-title">TRON Balance</p>
            <p className="balance-amount">12 Tron</p>
          </div>
          <button className="send-button" onClick={openModal}>Send</button>
        </div>
      </div>

      <div className="fan">
        <img src={fanImage} alt="Fan" className="fan-image spin-animation" />
        <p className="trx-amount">0.263928 TRX</p>
        <p className="hash-rate">1.0 GH/s ⚡</p>
      </div>

      <div className="actions">
        <button className="action-button">Claim</button>
        <button className="action-button">Boost</button>
      </div>

     
    </div>
  );
}

export default Dashboard;
