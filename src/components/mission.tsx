import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceCard from "./BalanceCard"; // Import the BalanceCard component
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import {
  faHandPaper,
  faComments,
  faBullhorn,
  faBolt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import { task } from "../api/task";
import { TaskClaim } from "../api/taskclaim";

const iconMap = {
  faHandPaper,
  faComments,
  faBullhorn,
  faUsers,
  faBolt,
};

const Mission = () => {
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext); // Use the context
  const [missions, setMissions] = useState([]);

  const [user, setUser] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false); // Add state for button loading
  const [buttonText, setButtonText] = useState("Claim");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegramId) => {
    try {
      const response = await task(telegramId, 1); // Adjust the type as needed
      console.log("API Response:", response);
      setMissions(response.task_deatils || []);
      setUser(response.user || {});
      setLoading(false);
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
      setLoading(false);
    }
  };

  const handleClaim = async (userId, taskId) => {
    setButtonLoading(true); // Set loading to true when the button is clicked
    setButtonText("Loading..."); // Change button text to "Loading..."
    setButtonDisabled(true);
    try {
      const success = await TaskClaim(userId, taskId);
      // Reload the page after 2 seconds
    } catch (error) {
      console.error("Failed to TaskClaim:", error);
      setButtonDisabled(false);
    } finally {
      setButtonLoading(false); // Set loading to false after the action is completed
      setButtonText("Claim"); // Reset button text to "Claim"
    }
  };

  const handleSendClick = () => {
    // Handle send button click
    console.log("Send button clicked");
  };

  return (
    <>
      {
        loading && <Loader /> // Show loader when loading
      }
      <div className="wallet-page ">
        <div className="balance">
          <BalanceCard
            icon={tronIcon}
            title="TRON Balance"
            amount={user.wallet}
            onSendClick={handleSendClick}
            userId={user.id}
          />
        </div>
        <br></br>
        <div className="task-ref-button">
          <thead>
            <tr className="table-th">
              <Link to="">
                {" "}
                <th className="task-ref">Task</th>
              </Link>
              <Link to="/task">
                <th className="task-ref">Ref</th>
              </Link>
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
                  <img src={tronIcon} alt="Shiba" className="shiba-icon" />{" "}
                  {mission.amount}
                </p>
              </div>

              {mission.user_tasks &&
              mission.user_tasks.task_id === mission.id ? (
                <p className="center">✔️</p>
              ) : mission.id == 3 && user.status == 1 ? (
                <button className="claim-button claim" disabled>
                  Claim
                </button>
              ) : (
                <button
                  className="claim-button claim"
                  onClick={() => handleClaim(userContext.user.id, mission.id)}
                  disabled={buttonDisabled}
                >
                  {buttonLoading ? "Loading..." : "Claim"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mission;
