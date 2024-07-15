// import React from 'react';
// import React from 'react';
import '../assets/wallet.css'; // Assuming you want to style the wallet page separately
import tronIcon from '../assets/tron-icon.png'; // Replace with the actual path to your icon
// import BalanceCard from './BalanceCard'; // Import the BalanceCard component
import { transactionsHistory } from "../api/transactions";




const Friends = () => {
  const transactions = [
    {
      date: '2024.06.27 11:38',
      coin: 'TRX',
      sum: '10,000.0',
      type: 'Referrer',
      status: 'Completed',
    },
  ];
  const inviteLink = "https://t.me/tronixapp_bot?start=5327419313";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(inviteLink);
    
  };
  
  return (
    <div className="wallet-page">
      <div className="balance">
      <div className="userref" >
        <p className='font'>Invite friends and recive 250 SHIBA for evvery frend<br/>registration. You can also receive bonuess for <br/>complited by your friends </p>
          
          
        </div>
      </div><br></br>
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
      <div className="boost-button" style={{marginTop:'20px'}}>
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


export default Friends;