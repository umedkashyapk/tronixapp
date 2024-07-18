import React, { useState, useEffect } from "react";
import "../assets/Dashboard.css";
import "../assets/loader.css"; // Import CSS as a side effect
import ReusableModal from "./ReusableModal";
import BalanceCard from "./BalanceCard";

const Loader = () => {
  return (
    <div className="loadingio-spinner-spinner-nq4q5u6dq7r">
      <div className="ldio-x2uulkbinbj">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;