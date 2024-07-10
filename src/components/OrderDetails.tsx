import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import "../assets/OrderDetails.css"; // Ensure you have the relevant CSS
import { fetchMiningDetails } from "../api/mining";
import { confirmPayment } from "../api/payment";

interface OrderDetailsProps {
  userId: number;
  telegramID: number;
  amount: number;
  onClose: () => void;
}

const OrderDetails: React.FC = () => {
  const location = useLocation();
  const { userId, telegramID, amount } = location.state || {
    userId: null,
    telegramID: null,
    amount: 100,
  };
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchMiningDetails(userId, telegramID, amount);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch mining details:", error);
        setLoading(false);
      }
    };
    getData();
  }, [userId, telegramID, amount]);

  const handleConfirmClick = async () => {
    try {
      const success = await confirmPayment(
        userId,
        telegramID,
        data.paymentAddress,
        amount
      );
      if (success) {
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Failed to confirm payment:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="order-details">
      <div className="order-details-container">
        <h2>Order Details</h2>
        <div className="order-details-content">
          <p>Mining Power: {data.miningPower} GH/s</p>
          <p>Rent Period: {data.rentPeriod} days</p>
          <p>Total Profit: ~{data.totalProfit} TRX</p>
          <p>Daily Profit: ~{data.dailyProfit} TRX</p>
          <p>Price: {data.price} TRX</p>
          <button
            className="cancel-button"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
        <h2>Payment</h2>
        <div className="payment-content">
          <p>
            Please ensure that you are sending only TRON (TRX) to the provided
            deposit address. Sending any other type of cryptocurrency or asset
            to this address will result in a loss of those funds, as they cannot
            be recovered.
          </p>
          <div className="payment-info">
            <QRCode value={data.paymentAddress} />
            <p className="price">{data.price} TRX</p>
            <p>Send {data.price} TRX to this address:</p>
            <p className="payment-address">{data.paymentAddress}</p>
          </div>
        </div>
        <div className="confirm-payment">
          <p>If you have made the payment, please click confirm.</p>
          <button className="confirm-button" onClick={handleConfirmClick}>
            Confirm
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Payment Confirmation</h2>
            <p>We will process your request soon.</p>
            <button onClick={() => navigate("/")} className="dashboard-button">
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
