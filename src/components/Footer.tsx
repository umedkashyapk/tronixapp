// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faGem,
  faWallet,
  faUsers,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGem, faWallet, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";
import "../assets/Dashboard.css";

// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="footer-nav">
        <FontAwesomeIcon icon={faGem} className="footer-icon" />
        <span className="color">Home</span>
      </Link>
      <Link to="/wallet" className="footer-nav">
        <FontAwesomeIcon icon={faWallet} className="footer-icon" />
        <span className="color">Wallet</span>
      </Link>
      <Link to="/friends" className="footer-nav">
        <FontAwesomeIcon icon={faUsers} className="footer-icon" />
        <span className="color">Friends</span>
      </Link>
      <Link to="/mission" className="footer-nav">
        <FontAwesomeIcon icon={faRocket} className="footer-icon" />
        <span className="color">Missions</span>
      </Link>
    </footer>
  );
};

export default Footer;
