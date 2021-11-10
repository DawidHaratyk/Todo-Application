import React, { useState, useEffect } from "react";

function TimeAndIcons({ children }) {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const currentTime = `${hours}:${minutes > 9 ? minutes : `0${minutes}`}`;

  useEffect(() => {
    const timeUpdate = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timeUpdate);
  }, [time]);

  return (
    <>
      <div className="time-and-icons">
        <div className="time">{currentTime}</div>
        <div className="icons">
          <i className="fas fa-signal icon"></i>
          <i className="fas fa-wifi icon"></i>
          <i className="fas fa-battery-full icon"></i>
        </div>
      </div>
      {children}
    </>
  );
}

export default TimeAndIcons;
