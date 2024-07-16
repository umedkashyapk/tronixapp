import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import BalanceCard from './BalanceCard'; // Import the BalanceCard component
import { faUsers, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import { task } from "../api/task";

const Task = () => {
  const userContext = useContext(UserContext); // Use the context
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegramId) => {
    try {
      const response = await task(telegramId, 2); // Adjust the type as needed
      console.log("API Response:", response);
      setMissions(response.task_deatils || []); // Assuming response contains a tasks array
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
    }
  };

  const handleCopyClick = () => {
    if (userContext && userContext.user) {
      const inviteLink = `https://t.me/tronixapp_bot?start=${userContext.user.telegram_id}`;
      navigator.clipboard.writeText(inviteLink);
    }
  };

  const handleSendClick = () => {
    console.log('Send button clicked');
  };

  return (
    <div className="wallet-page">
      <div className="balance">
        <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount="12 Tron"
          onSendClick={handleSendClick}
        />
      </div>
      <br />
      <div className="task-ref-button">
        <thead>
          <tr className="table-th">
            <Link to="/mission"><th className="task-ref">Task</th></Link>
            <Link to="/task"><th className="task-ref">Ref</th></Link>
          </tr>
        </thead>
      </div>
      <div className="balance">
        {missions.map((mission) => (
          <div key={mission.id} className={`userbutton`}>
            <FontAwesomeIcon icon={faUsers} className="mission-icon" />
            <div className="mission-details">
              <p className="mission-title">{mission.description}</p>
              <p className="mission-reward">
                <img src={tronIcon} alt="Shiba" className="shiba-icon" /> {mission.amount}
              </p>
            </div>
            <button className="action-button">
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
