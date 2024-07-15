import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
// import tronIcon from "../assets/tron-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceCard from './BalanceCard'; // Import the BalanceCard component
import { Link } from 'react-router-dom';
import {
  faHandPaper,
  faComments,
  faBullhorn,
  faBolt,
  faUsers,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import shibaIcon from "../assets/shiba-icon.png"; // Replace with the actual path to your icon

const Mission = () => {
  const transactions = [
    {
      date: "2024.06.27 11:38",
      coin: "shiba",
      sum: "10,000.0",
      type: "Bonus",
      status: "Completed",
    },
  ];
  const inviteLink = "https://t.me/tronixapp_bot?start=5327419313";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  const missions = [
    {
      id: 1,
      title: "Welcome bonus",
      reward: "1 TRX",
      icon: faHandPaper,
      completed: true,
    },
    {
      id: 2,
      title: "Join Chat Group / Page",
      reward: "1 TRX",
      icon: faComments,
      completed: false,
    },
    {
      id: 3,
      title: "Rent Your First Miner Booster",
      reward: "5 TRX",
      icon: faBullhorn,
      completed: false,
    },
    {
      id: 4,
      title: "Invite your first friend",
      reward: "10 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 5,
      title: "Follow Tronix Twitter",
      reward: "1 TRX",
      icon: faBolt,
      completed: false,
    },
  ];
  const handleSendClick = () => {
    // Handle send button click
    console.log('Send button clicked');
  };

  return (
    <div className="wallet-page ">
      <div className="balance">
      <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount="12 Tron"
          onSendClick={handleSendClick}
        />
      </div><br></br>
      <div className="task-ref-button">
      <thead>
          <tr className="table-th">
          <Link to=""> <th className="task-ref">Task</th></Link>
          <Link to="/task"><th className="task-ref">Ref</th></Link>
           
          </tr>
        </thead>
        </div>
      <div className="balance">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className={`userbutton ${mission.completed ? "completed" : ""}`}
          >
            <FontAwesomeIcon icon={mission.icon} className="mission-icon" />
            <div className="mission-details">
              <p className="mission-title">{mission.title}</p>
              <p className="mission-reward">
                <img src={tronIcon} alt="Shiba" className="shiba-icon" />{" "}
                {mission.reward}
              </p>
            </div>
            <button className="action-button">
              <FontAwesomeIcon
                icon={mission.completed ? faCheck : faArrowRight}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Mission;
