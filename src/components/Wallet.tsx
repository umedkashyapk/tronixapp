import { useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import Loader from "./Loader";
import "../assets/wallet.css"; // Assuming you want to style the wallet page separately
import tronIcon from "../assets/tron-icon.png"; // Replace with the actual path to your icon
import BalanceCard from "./BalanceCard"; // Import the BalanceCard component
import { wallet_histroy as fetchWalletHistory } from "../api/wallethistroy"; // Rename the imported function
import { UserContext } from "../context/UserContext";

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
      const response = await fetchWalletHistory(userId);
      console.log("wallet_histroy", response);
      setUser(response.user_details || {});
      setWalletHistory(response.TransactionHistory || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching wallet_histroy:", error);
      setError(error);
      setLoading(false);
    }
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return format(date, "MM-dd");
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
        <h2 className="history">Transaction History</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Coin</th>
                <th>Sum</th>
                <th>Type</th>
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
                    <td className="center">
                      {formatDate(TransactionHistory.created_at)}
                    </td>
                    <td className="center">Trx</td>
                    <td className="center">{TransactionHistory.amount}</td>
                    <td className="center">Referral</td>
                    <td className="center">{"✔️"}</td>
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
