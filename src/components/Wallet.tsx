
import React, { useContext, useState, useEffect } from 'react';
import '../assets/wallet.css'; // Assuming you want to style the wallet page separately
import tronIcon from '../assets/tron-icon.png'; // Replace with the actual path to your icon
import BalanceCard from './BalanceCard'; // Import the BalanceCard component
import { wallet_histroy as fetchWalletHistory } from "../api/wallethistroy"; // Rename the imported function
import { UserContext } from "../context/UserContext";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]); // Rename the state variable
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userContext = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.id) {
      fetchTransactions(userContext.user.id);
    }
  }, [userContext]);

  const fetchTransactions = async (userId) => {
    try {
      const response = await fetchWalletHistory(userId); // Use the renamed function
      setTransactions(response.data); // Assuming the transactions are in response.data
      setLoading(false);
      console.log('wallet_histroy', response.data);
    } catch (error) {
      console.error("Error fetching wallet_histroy:", error);
      setError(error);
      setLoading(false);
    }
  };

  const handleSendClick = () => {
    // Handle send button click
    console.log('Send button clicked');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="wallet-page">
      <div className="balance">
      <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount="12 tron"
          onSendClick={handleSendClick}
        />
      </div><br></br>
      {/* <div className="boost-button">
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
              <td className='center'>{transaction.created_at}</td>
              <td className='center'>Trx</td>
              <td className='center'>{transaction.amount}</td>
              <td className='center'>reffrell</td>
              <td className='center'>{transaction.status ? '✔️' : '❌'}</td>
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


export default Wallet;