import React from 'react';
import '../assets/Dashboard.css';

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3 className='color' style={{color:'#000'}}>Enter your personal TRX address</h3>
        <p className='color1'>This amount will be sent to the TRC20 compatible wallet address</p>
        <p className='color2'>Minimum send amount is 20 TRX</p>
        <form>
          <input className="inputcolor" type="text" placeholder="Your TRX (TRC20) Address" />
          <input className="inputcolor" type="text" placeholder="Amount" />
          <p className='color5'>Network fee: 2.5 TRX</p>
          <p className='color3'>Receive amount: 0 TRX</p>
          <button type="submit">Send</button>
          <button type="button" onClick={closeModal}>Not yet</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
