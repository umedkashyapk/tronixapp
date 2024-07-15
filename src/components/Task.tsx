import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
import BalanceCard from "./BalanceCard";
// import tronIcon from "../assets/tron-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPaper,
  faComments,
  faBullhorn,
  faUserPlus,
  faBolt,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import shibaIcon from "../assets/shiba-icon.png"; // Replace with the actual path to your icon

const Tesk = () => {
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
  const handleSendClick = () => {
    // Handle send button click
    console.log('Send button clicked');
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
      icon: faUserPlus,
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


export default Tesk;
