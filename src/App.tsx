import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Friends from "./components/Friends";
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
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
const DashboardWrapper: React.FC = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <Dashboard user={user} />;
};
