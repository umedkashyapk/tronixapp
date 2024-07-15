import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
// import tronIcon from "../assets/tron-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import BalanceCard from './BalanceCard'; // Import the BalanceCard component
import {faUsers,faCheck,faArrowRight,} from "@fortawesome/free-solid-svg-icons";
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
      title: "1 Referral ",
      reward: "1 TRX",
      icon: faUsers,
      completed: true,
    },
    {
      id: 2,
      title: "5 Referral",
      reward: "3 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 3,
      title: "10 Referral",
      reward: "5 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 4,
      title: "25 Referral",
      reward: "10 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 5,
      title: "50 Referral",
      reward: "20 TRX",
      icon: faUsers,
      completed: false,
    },
    
    {
      id: 6,
      title: "100 Referral",
      reward: "40 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 7,
      title: "500 Referral",
      reward: "100 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 8,
      title: "1000 Referral",
      reward: "250 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 9,
      title: "10000 Referral",
      reward: "3000 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 10,
      title: "20000 Referral",
      reward: "7000 TRX",
      icon: faUsers,
      completed: false,
    },
    {
      id: 11,
      title: "100000 Referral",
      reward: "25000 TRX",
      icon: faUsers,
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
          <Link to="/mission"> <th className="task-ref">Task</th></Link>
          <Link to="/task"><th className="task-ref">Ref</th></Link>
           
          </tr>
        </thead>
        </div>
      <div className="balance">
        {missions.map((mission) => (
          <div key={mission.id} className={`userbutton`}>
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
