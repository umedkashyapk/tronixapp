import React, { useState, useEffect } from 'react';
import '../assets/wallet.css'; // Assuming you want to style the wallet page separately
import { transactionsHistory } from "../api/transactions";

const Friends = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 1; // Replace with the actual user ID
  const type = 2; // Replace with the actual type

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await transactionsHistory(userId, type);
        setTransactions(response); // Adjust this based on the structure of your API response
        console.log('transactionsHistory', response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);
 
  const inviteLink = "https://t.me/tronixapp_bot?start=5327419313";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="wallet-page">
      <div className="balance">
        <div className="userref">
          <p className='font'>
            Invite friends and receive 250 SHIBA for every friend registration.
            You can also receive bonuses for completed transactions by your friends.
          </p>
        </div>
      </div>
      <br />
      <div className="invite-link-container">
        <p className="invite-link-title">Your Invite Link</p>
        <div className="invite-link-box">
          <span className="invite-link">{inviteLink}</span>
          <button className="copy-button" onClick={handleCopyClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 9H17V4H8V2H17C18.1 2 19 2.9 19 4V9M15 7V11H8V20H4V9H6V4H2V20C2 21.1 2.9 22 4 22H15C16.1 22 17 21.1 17 20V11C17 9.9 16.1 9 15 9H9V7H15Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="boost-button" style={{ marginTop: '20px' }}>
        <button>Boost</button>
      </div> */}
      <h2>Transaction History</h2>
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
        <div className='thadeunderline'></div>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.created_at}</td>
              <td>TRX</td>
              <td>{parseFloat(transaction.amount).toLocaleString()}</td>
              <td>{transaction.type === '2' ? 'Referrer' : 'Other'}</td>
              <td>✔️</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>First</span>
        <button>1</button>
        <span>Last</span>
      </div>
    </div>
  );
};

export default Friends;
