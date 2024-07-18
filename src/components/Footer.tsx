// Footer.js
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faGem, faWallet, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
import "../assets/Dashboard.css";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3 fixed-bottom">
      <div className="container d-flex justify-content-around">
        <Link to="/" className="footer-nav text-decoration-none  text-center">
          <FontAwesomeIcon icon={faGem} className="footer-icon" />
          <span className="color d-block">Home</span>
        </Link>
        <Link to="/wallet" className="footer-nav text-decoration-none  text-center">
          <FontAwesomeIcon icon={faWallet} className="footer-icon" />
          <span className="color d-block">Wallet</span>
        </Link>
        <Link to="/friends" className="footer-nav text-decoration-none  text-center">
          <FontAwesomeIcon icon={faUsers} className="footer-icon" />
          <span className="color d-block">Friends</span>
        </Link>
        <Link to="/mission" className="footer-nav text-decoration-none  text-center">
          <FontAwesomeIcon icon={faRocket} className="footer-icon" />
          <span className="color d-block">Missions</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
