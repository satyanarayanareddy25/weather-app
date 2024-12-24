import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every 1 second

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  // Format the time as HH:MM:SS AM/PM
  const hours = time.getHours() % 12 || 12; // Convert 24-hour format to 12-hour format
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const amPm = time.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM or PM

  // Get the full date (day, month, year)
  const dayOfWeek = time.toLocaleString('default', { weekday: 'long' });
  const month = time.toLocaleString('default', { month: 'long' });
  const dayOfMonth = time.getDate();

  return (
    <div className="digital-clock">
      <div className="date">
        <p>{`${dayOfWeek}, ${month} ${dayOfMonth}`}</p>
      </div>
      <div className="time">
        <h2>{`${hours}:${minutes}:${seconds} ${amPm}`}</h2>
      </div>
    </div>
  );
};

export default DigitalClock;
