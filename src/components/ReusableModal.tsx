import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Dashboard.css"; // Ensure you have the relevant CSS

interface ReusableModalProps {
  show: boolean;
  type: string;
  onClose: () => void;
  userId: number;
  telegramID: number;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  show,
  type,
  onClose,
  userId,
  telegramID,
}) => {
  const [inputValue, setInputValue] = useState(100); // Default value is 100 TRX
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    if (value <= 1000000) {
      setInputValue(value);
    }
  };

  const handleAddClick = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/order-details", {
      state: { userId, telegramID, amount: inputValue },
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {type === "boost" && (
          <>
            <h2 className="boost">Mining Power</h2>
            <p className="boost1">
              Here you can rent mining power for 30 days. The investment
              profitability is 5% per day and 150% for 30 days.
            </p>
            <p className="add1">⚡ {inputValue / 10} GH/s</p>
            <form className="modal-form" onSubmit={handleAddClick}>
              <input
                className="inputcolor"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="100 TRX"
              />
              <p className="boost3">Minimum amount 100 TRX</p>
              <p className="boost3">Maximum amount 1,000,000 TRX</p>
              <div className="modal-buttons">
                <button type="submit">Add</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={onClose}
                >
                  Back
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ReusableModal;
