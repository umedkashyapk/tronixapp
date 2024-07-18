import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Loader from './components/loader';
import Wallet from "./components/Wallet";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Friends from "./components/Friends";
import Task from "./components/Task";
import { UserProvider, UserContext } from "./context/UserContext";
import OrderDetails from "./components/OrderDetails";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardWrapper />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/task" element={<Task />} />
        </Routes>
        <Footer />
      </Router>
      
     </UserProvider>
  
  );
};

export default App;
const DashboardWrapper: React.FC = () => {
  const { user } = useContext(UserContext);
// console.log('data',user);
  if (!user) {
    return <div><Loader /></div>;
  }

  return <Dashboard user={user} />;
};
