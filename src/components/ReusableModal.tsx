import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Dashboard.css"; // Ensure you have the relevant CSS
import { Claim } from "../api/claim";
import { withdrow } from "../api/withdrow";
interface ReusableModalProps {
  show: boolean;
  type: string;
  userId: any;
  onClose: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  show,
  type,
  userId,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState(100); // Default value is 100 TRX
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false); // Add state for button loading
  const [buttonText, setButtonText] = useState("Claim");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [trxAddress, setTrxAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    if (value <= 1000000) {
      setInputValue(value);
    }
  };

  const handleAddClick = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/order-details", {
      state: { userId, amount: inputValue },
    });
  };

  const handleClickClaim = async () => {
    setButtonLoading(true); // Set loading to true when the button is clicked
    setButtonText("Loading..."); // Change button text to "Loading..."
    setButtonDisabled(true);
    try {
      const success = await Claim(userId);

      setMessage(success.message);
      setTimeout(() => {
        setMessage(null);
        window.location.reload(); // Reload the page after 2 seconds
      }, 2000);
    } catch (error: any) {
      console.error("Failed to claim claim:", error);
      setButtonDisabled(false);
    } finally {
      setButtonLoading(true); // Set loading to false after the action is completed
      setButtonText("Claim"); // Reset button text to "Claim"
    }
  };

  const handleWithdrawClick = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await withdrow(userId, trxAddress, parseFloat(amount));
      setMessage(response.message);
      onClose();
    } catch (error) {
      console.error("Failed to withdrow:", error);
    }
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

              <button type="submit">Add</button>
              <button type="button" className="cancel-button" onClick={onClose}>
                Back
              </button>
            </form>
          </>
        )}
        {type === "claim" && (
          <>
            <h2 className="claim">Claim TRX to Wallet Balance</h2>
            <p className="claim1">
              Once claimed, the mined TRX will be deducted from your mining
              balance and will be credited to your wallet balance.
            </p>
            <h3 className="claim2">Minimum claim amount is 1 TRX.</h3>

            <button
              className="button-w"
              onClick={handleClickClaim}
              type="submit"
              disabled={buttonDisabled} // Disable button when loading
            >
              {buttonLoading ? "Loading..." : buttonText}{" "}
            </button>
            <br />
            {message && <div className="flash-message">{message}</div>}
            <button className="button-w" onClick={onClose}>
              Not yet
            </button>
          </>
        )}
        {type === "send" && (
          <>
            <h2 className="color2">Enter your personal TRX address</h2>
            <p className="color1">
              This amount will be sent to the TRC20 compatible wallet address
            </p>
            <p className="color2">Minimum send amount is 20 TRX</p>
            <form onSubmit={handleWithdrawClick} style={{ marginTop: "-16" }}>
              <input
                className="inputcolor"
                style={{ marginTop: "-10" }}
                type="text"
                placeholder="Your TRX (TRC20) Address"
                value={trxAddress}
                onChange={(e) => setTrxAddress(e.target.value)}
              />
              <input
                className="inputcolor"
                style={{}}
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <p className="color5">Network fee: 2.5 TRX</p>
              {/* <p className="claim3">Receive amount: 0 TRX</p> */}
              {message && <div className="flash-message">{message}</div>}
              <button style={{ marginTop: "" }} type="submit">
                Send
              </button>
              <br />
              <button
                style={{
                  marginTop: "",
                  color: "#000",
                  backgroundColor: "rgb(234 229 229)",
                }}
                onClick={onClose}
              >
                Not yet
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ReusableModal;
