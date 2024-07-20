// src/components/Loader.js
import React from "react";
import fanImage from "../assets/fan-image.png";
import "../assets/loader.css"; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className="overlay">
      <div className="loader">
        <img
          src={fanImage}
          alt="Loading..."
          className="fan-image spin-animation1"
        />
      </div>
    </div>
  );
};

export default Loader;
