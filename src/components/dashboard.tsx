import React, { useState } from 'react';
import '../assets/Dashboard.css';
import ReusableModal from './ReusableModal';
import BalanceCard from './BalanceCard'; 

import tronIcon from '../assets/tron-icon.png';
import fanImage from '../assets/fan-image.png';


const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
  
    const openModal = (type) => {
      setShowModal(true);
      setModalType(type);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setModalType('');
    };
    const handleSendClick = () => {
        // Handle send button click
        console.log('Send button clicked');
      };
  return (
    <div className="dashboard">
      <div className="balances">
      <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount="12 Tron"
          onSendClick={handleSendClick}
        />
      </div>

      <div className="fan">
        <img src={fanImage} alt="Fan" className="fan-image spin-animation" />
        <p className="trx-amount">0.263928 TRX</p>
        <p className="hash-rate">1.0 GH/s ⚡</p>
      </div>

      <div className="actions">
        <button className="action-button1" onClick={() => openModal('claim')}>Claim</button>
        <button className="action-button1" onClick={() => openModal('boost')}>Boost</button>
      </div>
      <ReusableModal show={showModal} type={modalType} onClose={closeModal} />

     
    </div>
  );
}

export default Dashboard;
