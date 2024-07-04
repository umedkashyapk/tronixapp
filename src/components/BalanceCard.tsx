import React, { useState } from 'react';
import '../assets/Dashboard.css'; // Make sure to create and style this CSS file
// import Modal from './Modal'; // Assuming Modal component is in the same directory

const BalanceCard = ({ icon, title, amount }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="balance-card">
      <img src={icon} alt={title} className="icon" />
      <div>
        <p className="balance-title">{title}</p>
        <p className="balance-amount">{amount}</p>
      </div>
      <button className="send-button" onClick={openModal}>Send</button>
      {/* <Modal showModal={showModal} closeModal={closeModal} /> */}
    </div>
  );
};

export default BalanceCard;
