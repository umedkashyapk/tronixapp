import React, { useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import Loader from "../components/loader";
import "../assets/wallet.css"; // Assuming you want to style the wallet page separately
import tronIcon from "../assets/tron-icon.png"; // Replace with the actual path to your icon
import BalanceCard from "./BalanceCard"; // Import the BalanceCard component
import { wallet_histroy as fetchWalletHistory } from "../api/wallethistroy"; // Rename the imported function
import { UserContext } from "../context/UserContext";

const Wallet = () => {
  const [walletHistory, setwalletHistory] = useState([]); // Rename the state variable
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userContext = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.id) {
      fetchTransactions(userContext.user.id);
    }
  }, [userContext]);

  const fetchTransactions = async (userId) => {
    try {
      const response = await fetchWalletHistory(userId); // Use the renamed function
      setwalletHistory(response.wallet_history[0]); // Assuming the transactions are in response.data
      setLoading(false);
      console.log("wallet_histroy", response.wallet_history[0]);
    } catch (error) {
      console.error("Error fetching wallet_histroy:", error);
      setError(error);
      setLoading(false);
    }
  };

  const handleSendClick = () => {
    // Handle send button click
    console.log("Send button clicked");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const transactionHistory = Array.isArray(walletHistory.transaction_history)
    ? walletHistory.transaction_history
    : [];

  // Get current rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = transactionHistory.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total pages
  const totalPages = Math.ceil(transactionHistory.length / rowsPerPage);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "yy-MM-dd");
  };

  return (
    <div className="wallet-page">
      {loading ? (
        <Loader /> // Show loader when loading
      ) : (
        <>
          <div className="balance">
            <BalanceCard
              icon={tronIcon}
              title="TRON Balance"
              amount={userContext.user.wallet}
              onSendClick={handleSendClick}
            />
          </div>
          <br />
          <h2 className="histroy">Transaction History</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Coin</th>
                  <th>Sum</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <div className="thadeunderline"></div>
              <tbody>
                {walletHistory.transaction_history.map((transaction, index) => (
                  <tr key={index}>
                    <td className="center">
                      {formatDate(transaction.created_at)}
                    </td>
                    <td className="center">Trx</td>
                    <td className="center">{transaction.amount}</td>
                    <td className="center">Referral</td>
                    <td className="center">{"✔️"}</td>
                  </tr>
                ))}
                {walletHistory.claim_histories.map((claim, index) => (
                  <tr key={index}>
                    <td className="center">{formatDate(claim.created_at)}</td>
                    <td className="center">Trx</td>
                    <td className="center">{claim.amount}</td>
                    <td className="center">Claim</td>
                    <td className="center">{"✔️"}</td>
                  </tr>
                ))}
                {walletHistory.user_task.map((task, index) => (
                  <tr key={index}>
                    <td className="center">{formatDate(task.created_at)}</td>
                    <td className="center">Trx</td>
                    <td className="center">{task.amount}</td>
                    <td className="center">Task</td>
                    <td className="center">{"✔️"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <span
              onClick={() => handlePageChange(1)}
              className="pagination-button"
            >
              First
            </span>
            {[Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={i + 1 === currentPage ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
            <span
              onClick={() => handlePageChange(totalPages)}
              className="pagination-button"
            >
              Last
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Wallet;
