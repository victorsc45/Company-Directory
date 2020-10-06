import React from "react";
import "./style.css";
// page banner with image passed as props from home page
function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}

    </div>
  );
}

export default Hero;
