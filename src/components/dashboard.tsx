import { useState, useEffect } from "react";
import "../assets/Dashboard.css";
import Loader from "./Loader";
import ReusableModal from "./ReusableModal";
import BalanceCard from "./BalanceCard";
import tronIcon from "../assets/tron-icon.png";
import fanImage from "../assets/fan-image.png";
import digitronImages from "../assets/tronix baner.png";
import bolt from "../assets/bolt.gif";

interface DashboardProps {
  user: any;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [animationDuration, setAnimationDuration] = useState<number>(2000);
  const [claimableAmt, setClaimableAmt] = useState<number>(
    parseFloat(user.claimable_amt)
  );

  useEffect(() => {
    console.log("dash user", user);
    setLoading(true);

    setClaimableAmt(parseFloat(user.claimable_amt));
    console.log("claimableAmt", claimableAmt);
    setLoading(false);

    const roiRateAsNumber =
      typeof user.roi_rate === "string"
        ? parseFloat(user.roi_rate)
        : user.roi_rate;

    if (isNaN(roiRateAsNumber)) {
      console.error("Invalid ROI rate value:", user.roi_rate);
      return;
    }

    // Adjust the rate for 10 milliseconds
    const ratePerTenMilliseconds = roiRateAsNumber / 100;
    console.log("roiRateAsNumber", roiRateAsNumber);
    console.log("ratePerTenMilliseconds", ratePerTenMilliseconds);

    const interval = setInterval(() => {
      setClaimableAmt((prevAmt) => {
        const newAmount = prevAmt + ratePerTenMilliseconds;
        return parseFloat(newAmount.toFixed(8));
      });
    }, 10);

    return () => clearInterval(interval);
  }, [user]); // Watching for changes in the user object

  const openModal = (type: string) => {
    setShowModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const handleImageClick = (isSpeedUp: boolean): void => {
    setAnimationDuration(isSpeedUp ? 500 : 1500);
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
            onMouseDown={() => handleImageClick(true)}
            onMouseUp={() => handleImageClick(false)}
            onTouchStart={() => handleImageClick(true)}
            onTouchEnd={() => handleImageClick(false)}
          />
          <p className="trx-amount">{claimableAmt.toFixed(8)} TRX</p>
          <p className="hash-rate">
            {user.totalPower} GH/s{" "}
            <img src={bolt} alt="Mining Power" className="w-8 h-8" />
          </p>
        </div>

        <div className="actions">
          <button className="action-button1" onClick={() => openModal("claim")}>
            Claim
          </button>
          <button className="action-button1" onClick={() => openModal("boost")}>
            Boost
          </button>
        </div>

        <div className="fan">
          <img src={digitronImages} alt="Fan" className="digitron-images" />
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
