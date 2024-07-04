// import React from 'react';
import React from 'react';
import '../assets/wallet.css'; // Assuming you want to style the wallet page separately
import tronIcon from '../assets/tron-icon.png'; // Replace with the actual path to your icon
import BalanceCard from './BalanceCard'; // Import the BalanceCard component




const Wallet = () => {
  const transactions = [
    {
      date: '2024.06.27 11:38',
      coin: 'shiba',
      sum: '10,000.0',
      type: 'Bonus',
      status: 'Completed',
    },
  ];
  const handleSendClick = () => {
    // Handle send button click
    console.log('Send button clicked');
  };
  return (
    <div className="wallet-page">
      <div className="balance">
      <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount="12 Tron"
          onSendClick={handleSendClick}
        />
      </div><br></br>
      <div className="boost-button">
        <button>Boost</button>
      </div>
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
              <td>{transaction.date}</td>
              <td>{transaction.coin}</td>
              <td>{transaction.sum.toLocaleString()}</td>
              <td>{transaction.type}</td>
              <td>{transaction.status ? '✔️' : '❌'}</td>
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