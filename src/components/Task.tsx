import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import BalanceCard from './BalanceCard'; // Import the BalanceCard component
import { faUsers, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import Loader from '../components/loader';
import { task } from "../api/task";
import {TaskClaim} from "../api/taskclaim";

const Task = () => {
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext); // Use the context
  const [missions, setMissions] = useState([]);
  const [userTotalDirect, setUserTotalDirect] = useState(0);
  // const [claimedTasks, setClaimedTasks] = useState(new Set());
 

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegramId) => {
    try {
      const response = await task(telegramId, 2); // Adjust the type as needed
      console.log("API Response:", response);
      setMissions(response.task_deatils || []);
      setUserTotalDirect(response.user_Total_Direct || 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
      setLoading(false);
    }
  };
  const handleClaim = async (userId, taskId) => {
    try {
      const success = await TaskClaim(userId, taskId);
      if (success) {
        // setClaimedTasks((prevClaimedTasks) => new Set(prevClaimedTasks).add(taskId));
      }
    } catch (error) {
      console.error("Failed to TaskClaim:", error);
    }
  };

  const handleSendClick = () => {
    console.log('Send button clicked');
  };

  return (
    <div className="wallet-page">
      {loading ? (
        <Loader /> // Show loader when loading
      ) : (
        <>
      <div className="balance">
        <BalanceCard
          icon={tronIcon}
          title="TRON Balance"
          amount={userContext.user.wallet}
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
          
            {mission.direct <= userTotalDirect ? (
      mission.user_tasks && mission.user_tasks.task_id === mission.id ? (
        <button className="action-button claimed">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button className="claim-button claim" 
        onClick={() => handleClaim(userContext.user.id, mission.id)}>
          Claim
        </button>
      )
    ) : (
      <button className="claim-button claim" disabled>
        Claim
      </button>
    )}
           
          </div>
        ))}
      </div>
      </>
    )}
    </div>
  );
};

export default Task;
