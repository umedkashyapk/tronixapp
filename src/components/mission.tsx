
import "../assets/wallet.css"; 
import tronIcon from "../assets/tron-icon.png"; 
// import tronIcon from "../assets/tron-icon.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faComments, faBullhorn, faUserPlus, faBolt, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import shibaIcon from '../assets/shiba-icon.png'; // Replace with the actual path to your icon


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
    { id: 1, title: 'Welcome bonus', reward: '20,000 SHIB', icon: faHandPaper, completed: true },
    { id: 2, title: 'Join Tronix community', reward: '10,000 SHIB', icon: faComments, completed: false },
    { id: 3, title: 'Subscribe to Tronix announcements', reward: '10,000 SHIB', icon: faBullhorn, completed: false },
    { id: 4, title: 'Invite your first friend', reward: '10,000 SHIB', icon: faUserPlus, completed: false },
    { id: 5, title: 'Rent your first power booster', reward: '200,000 SHIB', icon: faBolt, completed: false },
  ];


  return (

    
    <div className="wallet-page " >
      <div>
        <p className="mission_fomt">5 missions available </p>
        <p className="chaild_font">Complete the missions to get the SHIB</p>
        </div>
      <div className="balance">
      {missions.map((mission) => (
        <div key={mission.id} className={`userbutton ${mission.completed ? 'completed' : ''}`}>
       <FontAwesomeIcon icon={mission.icon} className="mission-icon" />
       <div className="mission-details">
        <p className="mission-title">{mission.title}</p>
        <p className="mission-reward">
          <img src={tronIcon} alt="Shiba" className="shiba-icon" /> {mission.reward}
        </p>
      </div>
      <button className="action-button">
        <FontAwesomeIcon icon={mission.completed ? faCheck : faArrowRight} />
      </button>
    </div>
       
        
        
        
      ))}
        
      </div>
    
    </div>
    
  );
};



{/* <div className="missions-container">
<h2>5 missions available</h2>
<p>Complete the missions to get the SHIB</p>
<div className="missions-list">
  {missions.map((mission) => (
    <div key={mission.id} className={`mission-card ${mission.completed ? 'completed' : ''}`}>
      <FontAwesomeIcon icon={mission.icon} className="mission-icon" />
      <div className="mission-details">
        <p className="mission-title">{mission.title}</p>
        <p className="mission-reward">
          <img src={tronIcon} alt="Shiba" className="shiba-icon" /> {mission.reward}
        </p>
      </div>
      <button className="action-button">
        <FontAwesomeIcon icon={mission.completed ? faCheck : faArrowRight} />
      </button>
    </div>
  ))}
</div> */}
// </div>
export default Mission;
