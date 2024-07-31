import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BalanceCard from "./BalanceCard"; // Import the BalanceCard component
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import Loader from "./Loader";
import { task } from "../api/task";
import { TaskClaim } from "../api/taskclaim";

const Task = () => {
  const [loading, setLoading] = useState(true);
  const userContext = useContext<any>(UserContext); // Use the context
  const [missions, setMissions] = useState<any>([]);
  const [userTotalDirect, setUserTotalDirect] = useState<any>(0);
  const [buttonLoading, setButtonLoading] = useState<any>({});
  const [buttonDisabled, setButtonDisabled] = useState<any>({});
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegramId: any) => {
    try {
      const response = await task(telegramId, 2); // Adjust the type as needed
      console.log("API Response:", response);
      setMissions(response.task_deatils || []);
      setUser(response.user || {});
      setUserTotalDirect(response.user_Total_Direct || 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
      setLoading(false);
    }
  };
  const handleClaim = async (userId: any, taskId: any) => {
    setButtonLoading((prev: any) => ({ ...prev, [taskId]: true }));
    setButtonDisabled((prev: any) => ({ ...prev, [taskId]: true }));
    try {
      const success = await TaskClaim(userId, taskId);
      // Reload the page after 2 seconds
      console.log("TaskClaim:", success);
    } catch (error) {
      console.error("Failed to TaskClaim:", error);
      setButtonDisabled((prev: any) => ({ ...prev, [taskId]: false }));
    } finally {
      setButtonLoading((prev: any) => ({ ...prev, [taskId]: false }));
    }
  };

  return (
    <>
      {
        loading && <Loader /> // Show loader when loading
      }
      <div className="wallet-page">
        <div className="balance">
          <BalanceCard
            icon={tronIcon}
            title="TRON Balance"
            amount={user.wallet}
            userId={user.id}
          />
        </div>
        <br />
        <div className="task-ref-button">
          <thead>
            <tr className="table-th">
              <Link to="/mission">
                <th className="task-ref">Task</th>
              </Link>
              <Link to="/task">
                <th className="task-ref">Ref</th>
              </Link>
            </tr>
          </thead>
        </div>
        <div className="balance">
          {missions.map((mission: any) => (
            <div key={mission.id} className={`userbutton`}>
              <FontAwesomeIcon icon={faUsers} className="mission-icon" />
              <div className="mission-details">
                <p className="mission-title">{mission.description}</p>
                <p className="mission-reward">
                  <img src={tronIcon} alt="Shiba" className="shiba-icon" />{" "}
                  {mission.amount}
                </p>
              </div>

              {mission.direct <= userTotalDirect ? (
                mission.user_tasks &&
                mission.user_tasks.task_id === mission.id ? (
                  <p className="center">✔️</p>
                ) : (
                  <button
                    className="claim-button claim"
                    onClick={() => handleClaim(userContext.user.id, mission.id)}
                    disabled={buttonDisabled[mission.id] || false}
                  >
                    {buttonLoading[mission.id] ? "Loading..." : "Claim"}
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
      </div>
    </>
  );
};

export default Task;
