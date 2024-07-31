import React, { useState } from "react";
import "../assets/Dashboard.css";
import ReusableModal from "../components/ReusableModal";

interface BalanceCardProps {
  icon: any; // Use 'any' temporarily
  title: any; // Use 'any' temporarily
  amount: any; // Use 'any' temporarily
  userId: any; // Use 'any' temporarily
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  icon,
  title,
  amount,
  userId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type: any) => {
    setShowModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  return (
    <div className="balance-card">
      {/* <h1>hii</h1> */}
      <img src={icon} alt={title} className="icon" />
      <div>
        <p className="balance-title">{title}</p>
        <p className="balance-amount">{amount}</p>
      </div>
      <button className="send-button" onClick={() => openModal("send")}>
        Send
      </button>
      <ReusableModal
        show={showModal}
        userId={userId}
        type={modalType}
        onClose={closeModal}
      />
    </div>
  );
};

export default BalanceCard;
