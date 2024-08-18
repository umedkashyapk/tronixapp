import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LinkVerify } from "../api/linkverify";
import { RequestLinkVerify } from "../api/requeslLinkverify";

const VerificationForm = () => {
  const userContext = useContext<any>(UserContext); // Use the context
  const [selectedViews, setSelectedViews] = useState<any>();
  const [link, setLink] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [missions, setMissions] = useState<any>([]);
  const [confirmViews, setConfirmViews] = useState(false);
  const [inviteConfirmation, setInviteConfirmation] = useState<any>(false);
  const [dataConfirmation, setDataConfirmation] = useState(false);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegram_id: any) => {
    console.log("LinkVerify telegram_id:", telegram_id);
    try {
      const response = await LinkVerify(); // Adjust the type as needed
      console.log("LinkVerify API Response:", response.data.LinkVerify);
      setMissions(response.data.LinkVerify || []);
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const success = await RequestLinkVerify(
        selectedViews,
        inviteConfirmation,
        link
      );
      console.log("RequestLinkVerify:", success);
      setMessage(success.message);
      setTimeout(() => {
        setMessage(null);
        window.history.back();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedViews(e.target.value);
  };

  return (
    <div className="form-container">
      <style>
        {`
        .w-7 {
          width: 1.75rem;
        }
        .h-7 {
          height: 1.75rem;
        }
        .form-container {
          width: 300px;
          margin: 20px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          height: 100%;
          color: #000;
        }
        .closebutton {
          position: absolute;
          right: 80px;
          top: 10px;
          font-size: 36px;
          color: black;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        input[type="text"] {
          width: 80%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .radio-group {
          display: flex;
          flex-direction: column;
        }
        .radio-option {
          margin: 5px 0;
          color: #000;
        }
        input[type="radio"] {
          margin-right: 10px;
        }
        input[type="checkbox"] {
          margin-right: 10px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}
      </style>
      <h3>Add a link to verify</h3>
      <Link to="/special">
        <p className="closebutton">×</p>
      </Link>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="link">Link to your content</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label>Number of views</label>
          <div className="radio-group">
            {missions.map((mission: any) => (
              <label key={mission.id} className="radio-option">
                <input
                  type="radio"
                  name="views"
                  value={mission.id}
                  checked={selectedViews === mission.id.toString()}
                  onChange={handleChange}
                />
                {mission.description}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={confirmViews}
              onChange={() => setConfirmViews(!confirmViews)}
            />
            I confirm that the number of views is correct
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={inviteConfirmation === userContext.user.telegram_id}
              onChange={() =>
                setInviteConfirmation(
                  inviteConfirmation === userContext.user.telegram_id
                    ? false
                    : userContext.user.telegram_id
                )
              }
            />
            My invite link or my ID {userContext.user.telegram_id} is indicated
            under the video
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={dataConfirmation}
              onChange={() => setDataConfirmation(!dataConfirmation)}
            />
            I understand that if I provide incorrect data, I will lose access to
            this functionality
          </label>
        </div>

        {message && <div className="flash-message">{message}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerificationForm;
