import { useState, useEffect } from "react";
import "../assets/Dashboard.css";
import Loader from "./Loader";
import ReusableModal from "./ReusableModal";
import BalanceCard from "./BalanceCard";
import tronIcon from "../assets/tron-icon.png";
import fanImage from "../assets/fan-image.png";

// interface TelegramUser {
//   id: string;
//   claimable_amt: string;
//   is_invested: number;
//   wallet: number;
//   userId: any;
// }

interface DashboardProps {
  user: any;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [loading, setLoading] = useState<any>(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const animationDuration = 1500;

  const [claimableAmt, setClaimableAmt] = useState<number>(
    parseFloat(user.claimable_amt)
  );

  useEffect(() => {
    console.log("dash user", user);
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

  const handleImageClick = () => {
    const rotatingImage = document.querySelector(
      ".fan-image"
    ) as HTMLElement | null;

    if (rotatingImage) {
      rotatingImage.addEventListener("mousedown", function () {
        rotatingImage.style.animationDuration = "400ms"; // Increase speed to 0.4s
      });

      document.addEventListener("mouseup", function () {
        rotatingImage.style.animationDuration = "1500ms"; // Default speed
      });
    } else {
      console.error("rotatingImage element not found");
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="dashboard">
        <div className="balances">
          <BalanceCard
            icon={tronIcon}
            title="TRON Balance"
            amount={user.wallet}
            userId={user.id}
          />
        </div>

        <div className="fan">
          <img
            src={fanImage}
            alt="Fan"
            className="fan-image"
            style={{ animation: `spin ${animationDuration}ms linear infinite` }}
            onMouseDown={handleImageClick}
            onMouseUp={handleImageClick}
          />
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
        <ReusableModal
          show={showModal}
          userId={user.id}
          type={modalType}
          onClose={closeModal}
        />
      </div>
    </>
  );
};

export default Dashboard;
