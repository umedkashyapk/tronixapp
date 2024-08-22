import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { earn_by_facebook } from "../api/FbPopup";
import { RequestFbPopup } from "../api/RequestFbPopup";

const FbPopup = () => {
  const userContext = useContext<any>(UserContext); // Ensure UserContext type is correct
  const [missions, setMissions] = useState<any>([]);
  const [link, setLink] = useState<any>("");
  const [message, setMessage] = useState<string | null>(null);
  console.log("text texttexttext:", missions);
  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegram_id: any) => {
    console.log("earn_by_facebook telegram_id:", telegram_id);
    try {
      const response = await earn_by_facebook(); // Ensure this function returns expected data
      console.log("earn_by_facebook Response:", response.data);
      setMissions(response.data.LinkVerify || []);
    } catch (error) {
      console.error("Error fetching earn_by_facebook:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let telegram_id = userContext.user.telegram_id;

      const success = await RequestFbPopup(telegram_id, link);
      console.log("RequestLinkVerify:", success);
      setMessage(success.message);
      setTimeout(() => {
        setMessage(null);
        window.history.back(); // Go back to previous page
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
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
            position: relative;
          }
          .closebutton {
            position: absolute;
            right: 20px;
            top: -10px;
            font-size: 36px;
            color: black;
            cursor: pointer;
          }
          h3 {
            text-align: left;
            margin-bottom: 20px;
          }
          .form-group {
            margin-bottom: 15px;
          }
          textarea {
            width: 100%;
            padding: 0px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            height: 164px;
          }
          button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          button:hover {
            background-color: #0056b3;
          }
          .flash-message {
            margin-top: 10px;
            color: green;
            font-weight: bold;
            background-color: #5c5b5b00;
          }
          .copytext {
            display: contents;
          }
          input[type="radio"] {
            margin-right: 10px;
          }
          input[type="checkbox"] {
            margin-right: 10px;
          }
          input[type="text"] {
            width: 90%;
            padding: 15px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          
          .fontsie {
            font-size: smaller;
          }
        `}
      </style>
      <h3>Add a link to verify</h3>
      <Link to="/special">
        <p className="closebutton">×</p>
      </Link>

      <div className="form-group">
        {missions.map((mission: any, index: number) => (
          <label key={mission.id} className="textbolt">
            {index + 1}. {mission.description}
            <br />
          </label>
        ))}
      </div>
      <div className="form-group">
        <label className="textbolt">
          Leave the link to your post in the box below.
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Post link here...."
          />
        </div>

        {message && <div className="flash-message">{message}</div>}
        <button type="submit">Submit</button>
      </form>

      <div className="form-group">
        <label>
          <ul className="fontsize">
            <li>Earn 2 to 10 Tron on each sharing of the link</li>
            <li>
              Tron will be credited to your account after it is verified by the
              admin
            </li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default FbPopup;
