import React, { useContext, useEffect } from "react";
import Loader from "./Loader";
import Dashboard from "./Dashboard";
import { UserContext } from "../context/UserContext";

const DashboardWrapper: React.FC = () => {
  const context = useContext(UserContext);

  useEffect(() => {
    if (context && context.fetchUserData) {
      context.fetchUserData();
    }
  }, []); // Empty dependency array ensures it only runs once on mount

  if (!context || !context.user) {
    return <Loader />;
  }

  return <Dashboard user={context.user} />;
};

export default DashboardWrapper;
