import { useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import Loader from "./Loader";
import "../assets/wallet.css"; // Assuming you want to style the wallet page separately
import tronIcon from "../assets/tron-icon.png"; // Replace with the actual path to your icon
import BalanceCard from "./BalanceCard"; // Import the BalanceCard component
import { Bost_history as Bost_history } from "../api/bost"; // Rename the imported function
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";

const Wallet = () => {
  const [TransactionHistory, setWalletHistory] = useState<any>([]); // Rename the state variable
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const userContext = useContext<any>(UserContext);
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.id) {
      fetchTransactions(userContext.user.id);
    }
  }, [userContext]);

  const fetchTransactions = async (userId: any) => {
    try {
      const response = await Bost_history(userId);
      console.log("Bost_history", response);
      setUser(response.user_details || {});
      setWalletHistory(response.bost || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Bost_history:", error);
      setError(error);
      setLoading(false);
    }
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return format(date, "dd-MM-yyyy HH:mm");
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        <div className="actions">
          <Link to="/wallet">
            <button className="action-button1">Transaction</button>
          </Link>
          <Link to="/transaction">
            <button className="action-button1">Booster</button>
          </Link>
        </div>
        <h3 className="history">Your Investment </h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Boost</th>
                <th>Date</th>
                <th>Sum</th>
                <th>Status</th>
              </tr>
              <tr className="thead-underline">
                <td colSpan={5}></td> {/* Add an empty row for underline */}
              </tr>
            </thead>
            <tbody>
              {TransactionHistory?.map(
                (TransactionHistory: any, index: any) => (
                  <tr key={index}>
                    <td className="center">{index + 1}</td>{" "}
                    <td className="center date-fontsize">
                      {formatDate(TransactionHistory.created_at)}
                    </td>
                    <td className="center">{TransactionHistory.amount}</td>
                    <td className="center">
                      {TransactionHistory.status == 1 ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : TransactionHistory.status == 2 ? (
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#1de61d" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faTimes}
                          style={{ color: "red" }}
                        />
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wallet;
