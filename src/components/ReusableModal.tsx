// // src/components/ReusableModal.js
// import React from 'react';
// import '../assets/Dashboard.css'; // Ensure you have the relevant CSS
// import '../assets/wallet.css'; // Ensure you have the relevant CSS

// const ReusableModal = ({ show, type, onClose }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="modal" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         {type === 'send' && (
//           <>

//          <div className="modal-overlay" >
//         <div className="modal-content" >
//           <h3 className='color' style={{color:'#000'}}>Enter your personal TRX address</h3>
//           <p className='color1'>This amount will be sent to the TRC20 compatible wallet address</p>
//           <p className='color2'>Minimum send amount is 20 TRX</p>
//           <form>
//             <input type="text" placeholder="Your TRX (TRC20) Address" />
//             <input type="number" placeholder="Amount" />
//             <p className='color1'>Network fee: 2.5 TRX</p>
//             <p className='color3'>Receive amount: 0 TRX</p>
//             <button>Send</button>
//             <button onClick={onClose}>Not yet</button>
//           </form>
//         </div>
            
            
//           </div>
//           </>
//         )}
//         {type === 'boost' && (
//           <>
//             <h2>Boost Your Power</h2>
//             <p>Boost your mining power to earn more TRX.</p>
//             <input type="number" placeholder="Amount to Boost" />
//             <button>Boost</button>
//             <button onClick={onClose}>Cancel</button>
//           </>
//         )}
//         {type === 'claim' && (
//           <>
//             <h2>Claim Your Rewards</h2>
//             <p>Claim your accumulated rewards.</p>
//             <button>Claim</button>
//             <button onClick={onClose}>Cancel</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReusableModal;
