import { useContext, useState, useEffect } from "react";
import "../assets/wallet.css"; // Assuming you want to style the wallet page separately
import { transactionsHistory } from "../api/transactions";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";

const Friends_List = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const [Response, setResponse] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const userContext = useContext<any>(UserContext);

  useEffect(() => {
    if (userContext && userContext.user && userContext.user.id) {
      fetchTransactions(userContext.user.id);
    }
  }, [userContext]);

  const fetchTransactions = async (userId: any) => {
    try {
      const response = await transactionsHistory(userId, 2); // Adjust the type as needed
      setTransactions(response.transactions || []);
      setResponse(response);
      console.log("response", response);
      console.log("Friends_List", transactions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Friends_List:", error);
      setError(error);
      setLoading(false);
    }
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {
        loading && <Loader /> // Show loader when loading
      }

      <div className="wallet-page">
        <h2>Friends ({Response.total_referral || 0})</h2>
        <div className="task-ref-button">
          <thead>
            <tr className="table-th">
              <th className="task-ref1">
                Level 1<br></br>
                {Response.level1count || 0}
              </th>

              <th className="task-ref1">
                Level 2 <br></br>
                {Response.level2count || 0}
              </th>

              <th className="task-ref1">
                Level 3<br></br>
                {Response.level3count || 0}
              </th>
            </tr>
          </thead>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Lv.</th>
                <th>Name</th>
                <th>Sum</th>
                <th>Status</th>
              </tr>
            </thead>
            <div className="thadeunderline"></div>
            <tbody>
              {transactions.map((transaction: any, index: any) => (
                <tr key={index}>
                  <td className="date-fontsize">{transaction.level}</td>
                  <td>{transaction.first_name}</td>
                  <td>{transaction.total_profit}</td>
                  <td>
                    {transaction.status == 1 ? (
                      <td>✔️</td>
                    ) : (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#1de61d" }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Friends_List;
