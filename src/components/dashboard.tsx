import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/Dashboard.css";
import Loader from '../components/loader';
import ReusableModal from "./ReusableModal";
import BalanceCard from "./BalanceCard";
import tronIcon from "../assets/tron-icon.png";
import fanImage from "../assets/fan-image.png";

interface TelegramUser {
  claimable_amt: string;
  is_invested: number;
}

interface DashboardProps {
  user: TelegramUser;
}

const Dashboard = ({ user }: DashboardProps) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [claimableAmt, setClaimableAmt] = useState<number>(
   
    parseFloat(user.claimable_amt),
    
    
  );
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    console.log('dash user' ,user);
    setLoading(false);
    // Update the claimable amount at a fixed rate
    const mining_rate = user.is_invested === 2 ? 100 : 200;
   
        const incrementAmount = 0.000001; // Increment value per interval
    const interval = setInterval(() => {
      setClaimableAmt((prevAmt) => prevAmt + incrementAmount);
      
    }, mining_rate); // Update every 100ms

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
    
  }, [user.is_invested]);

  const openModal = (type: string) => {
    setShowModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const handleSendClick = () => {
    console.log("Send button clicked");
  };

  return (
    <div className="dashboard">
      
      {loading ? (
        <Loader /> // Show loader when loading
      ) : (
        <>
      
      <div className="balances">
        <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount={user.wallet}
          onClick={handleSendClick}
        />
      </div>

      <div className="fan">
        <img src={fanImage} alt="Fan" className="fan-image spin-animation" />
        <p className="trx-amount">{claimableAmt.toFixed(6)} TRX</p>
        <p className="hash-rate">1.0 GH/s ⚡</p>
      </div>

      <div className="actions">
        <button className="action-button1" onClick={() => openModal("claim")}>
          Claim
        </button>
        <button className="action-button1" onClick={() => openModal("boost")}>
          Boost
        </button>
      </div>
      <ReusableModal  show={showModal} userId={user.id}  type={modalType} onClose={closeModal} />
      </>
      )}
    </div>
  );
};

export default Dashboard;
