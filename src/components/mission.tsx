import "../assets/wallet.css";
import tronIcon from "../assets/tron-icon.png";
import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceCard from "./BalanceCard"; // Import the BalanceCard component
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { faUsers, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import { task } from "../api/task";
import { TaskClaim } from "../api/taskclaim";

const Mission = () => {
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext); // Use the context
  const [missions, setMissions] = useState<any>([]);
  const [inviteFirstFriend, setInviteFirstFriend] = useState<boolean | null>(
    null
  );
  const [user, setUser] = useState<any>({});
  const [buttonLoading, setButtonLoading] = useState<any>({});
  const [buttonDisabled, setButtonDisabled] = useState<any>({});

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegramId: any) => {
    try {
      const response = await task(telegramId, 1); // Adjust the type as needed
      console.log("API task Response:", response);
      setMissions(response.task_deatils || []);
      setUser(response.user || {});
      setInviteFirstFriend(response.Invite_first_friend);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
      setLoading(false);
    }
  };
  console.log("inviteFirstFriend", inviteFirstFriend);

  const handleClaim = async (userId: any, taskId: any) => {
    setButtonLoading((prev: any) => ({ ...prev, [taskId]: true }));
    setButtonDisabled((prev: any) => ({ ...prev, [taskId]: true }));
    try {
      const success = await TaskClaim(userId, taskId);
      console.log("takclaim success respone", success);

      setMissions((prevMissions: any) =>
        prevMissions.map((mission: any) =>
          mission.id === taskId
            ? { ...mission, user_tasks: { task_id: taskId } } // Adjust according to your response
            : mission
        )
      );
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
      <div className="wallet-page ">
        <div className="balance">
          <BalanceCard
            icon={tronIcon}
            title="TRON Balance"
            amount={user.wallet}
            userId={user.id}
          />
        </div>
        <br></br>
        <div className="task-ref-button">
          <thead>
            <tr className="table-th">
              <Link to="/mission">
                <th className="task-ref">Task</th>
              </Link>
              <Link to="/task">
                <th className="task-ref">Ref</th>
              </Link>
              <Link to="/special">
                <th className="task-ref">Content</th>
              </Link>
              <Link to="/fbpopup">
                <th className="task-ref">Earn by FB</th>
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

              {mission.user_tasks &&
              mission.user_tasks.task_id === mission.id ? (
                <p className="center">✔️</p>
              ) : mission.id == 2 && user.status == 1 ? (
                <button className="claim-button claim" disabled>
                  Claim
                </button>
              ) : mission.id == 3 && inviteFirstFriend == null ? (
                <button className="claim-button claim" disabled>
                  Claim
                </button>
              ) : (
                <button
                  className="claim-button claim"
                  onClick={() => handleClaim(user.id, mission.id)}
                  disabled={buttonDisabled[mission.id] || false}
                >
                  {buttonLoading[mission.id] ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    "Claim"
                  )}
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
