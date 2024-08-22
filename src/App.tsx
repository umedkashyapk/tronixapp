import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transaction";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Friends from "./components/Friends";
import Task from "./components/Task";
import Special from "./components/Special";
import Friends_List from "./components/Friends_List";
import VerificationForm from "./components/VerificationForm";
import FbPopup from "./components/FbPopup";
import { UserProvider } from "./context/UserContext";
import OrderDetails from "./components/OrderDetails";
import DashboardWrapper from "./components/DashboardWrapper";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardWrapper />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/task" element={<Task />} />
          <Route path="/fbpopup" element={<FbPopup />} />
          <Route path="/special" element={<Special />} />
          <Route path="/friendslist" element={<Friends_List />} />
          <Route path="/verificationForm" element={<VerificationForm />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;

// const DashboardWrapper: React.FC = () => {
//   console.log("dashboard wrapper");
//   const context: any = useContext(UserContext);
//   if (!context) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     ); // Or some other fallback UI
//   }
//   // const { user } = useContext(UserContext);
//   // console.log('data',user);
//   const { user } = context;
//   if (!user) {
//     return <Loader />;
//   }
//   return <Dashboard user={user as TelegramUser} />;
// };
