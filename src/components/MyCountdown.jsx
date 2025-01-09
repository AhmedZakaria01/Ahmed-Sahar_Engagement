import React, { useState } from "react";
import Countdown from "react-countdown";

const MyCountdown = () => {
  const [showCountdown, setShowCountdown] = useState(true);

  const targetDate = new Date("2025-01-24T03:00:00");

  // Renderer with disappearing logic
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setShowCountdown(false); // Hide countdown when completed
      return null;
    } else {
      return (
        <div className="fixed top-0 left-0 right-0 text-white text-center p-4 bg-black/50 rounded-md shadow-lg">
          <div className="text-sm">
            {days}d {hours}h {minutes}m {seconds}s
          </div>
          {/* <div className="text-sm">Until the event!</div> */}
        </div>
      );
    }
  };

  return (
    showCountdown && (
      <div className="fixed left-0 top-0">
        <Countdown date={targetDate} renderer={renderer} />
      </div>
    )
  );
};

export default MyCountdown;
