// src/components/ReusableModal.js
import React from 'react';
import '../assets/Dashboard.css'; // Ensure you have the relevant CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faBolt,

} from "@fortawesome/free-solid-svg-icons";
const ReusableModal = ({ show, type, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content " conClick={(e) => e.stopPropagation()}>
        {type === 'send' && (
          <>
            <h2 className='color' >Enter your personal TRX address</h2>
            <p className='color1'>This amount will be sent to the TRC20 compatible wallet address</p>
        <p className='color2'>Minimum send amount is 20 TRX</p>
        <form style={{ marginTop:'-16'}}>
          <input className="inputcolor" style={{ marginTop:'-10'}} type="text" placeholder="Your TRX (TRC20) Address" />
          <input className="inputcolor" style={{ }} type="text" placeholder="Amount" />
          
          <p className='color5'>Network fee: 2.5 TRX</p>
           <p className='claim3'>Receive amount: 0 TRX</p>
           <button style={{marginTop:''}} type="submit">Send</button>
           <button  style={{marginTop:'',color:'#000' ,backgroundColor:"rgb(234 229 229)"}} onClick={onClose}>Not yet</button>
         </form>
            
          </>
        )}
        {type === 'boost' && (
          <>
            <h2 className='boost' >Mining Power</h2>
            <p className='boost1'>Here you can rent mining power for 30 days.
            The investment profitability is 4.4928% per day and 134.784% for 30 days.</p>
            <p className="add1">⚡ 10.0 GH/s </p>
            <p className="boost1">Total Profit : ~ 134.784 TRX</p>
            <p className="boost1">Daily Profit : ~ 4.49 TRX</p>
        <form style={{ marginTop:'-2'}}>
          <input className="inputcolor" type="text" placeholder="100 TRX" />
           <p className='boost3'> Minimum amount 100 TRX</p>
           <button style={{marginTop:'-3px'}} type="submit">Add</button>
           <button  style={{color:'#000' ,backgroundColor:"rgb(234 229 229)"}} onClick={onClose}>Back</button>
         </form>
          </>
        )}
        {type === 'claim' && (
          < >
          
            <h2 className='claim' >Claim TRX to Wallet Balance</h2>
            <p className='claim1'>Once claimed, the mined TRX will be deducted from your mining balance and will be credited to your wallet balance.</p>
        <h3 className='claim2'>Minimum claim amount is 1 TRX.</h3>
        
           <button className='button-w' type="submit">Claim</button><br/>
           <button className='button-w' onClick={onClose}>Not yet</button>
           </>
         
        )}
      </div>
      
    </div>
  );
};

export default ReusableModal;
