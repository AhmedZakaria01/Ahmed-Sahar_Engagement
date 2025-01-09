import React from "react";
import "./Home.css"; // Your styles
import MyCountdown from "./components/MyCountdown";
import OpenGoogleMaps from "./components/Location";

function Home() {
  return (
    <div className="header">
      {/* Countdown Timer */}
      <OpenGoogleMaps />
      {/* <MyCountdown /> */}
    </div>
  );
}
export default Home;
