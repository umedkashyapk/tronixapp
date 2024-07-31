import Home from "../assets/home.webp";
import Wallet from "../assets/wallet.png";
import Users from "../assets/invite.png";
import Rocket from "../assets/Rocket.webp";
import { Link } from "react-router-dom";
import "../assets/Dashboard.css";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3 fixed-bottom">
      <div className="container d-flex justify-content-around">
        <Link to="/" className="footer-nav text-decoration-none  text-center">
          <img src={Home} className="icon-images" />
          <span className="color d-block">Home</span>
        </Link>
        <Link
          to="/wallet"
          className="footer-nav text-decoration-none  text-center"
        >
          <img src={Wallet} className="icon-images" />
          <span className="color d-block">Wallet</span>
        </Link>
        <Link
          to="/friends"
          className="footer-nav text-decoration-none  text-center"
        >
          <img src={Users} className="icon-images" />
          <span className="color d-block">Friends</span>
        </Link>
        <Link
          to="/mission"
          className="footer-nav text-decoration-none  text-center"
        >
          <img src={Rocket} className="icon-images" />
          <span className="color d-block">Mission</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
