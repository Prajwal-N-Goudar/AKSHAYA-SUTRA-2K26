import { useEffect, useState } from "react";

export default function Countdown() {

  const hackathonDate = new Date("April 23, 2026 09:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState(hackathonDate - new Date().getTime());

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(hackathonDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (

    <div className="countdown">

      <div className="time-box">
        <h3>📅 {days}</h3>
        <p>Days</p>
      </div>

      <div className="time-box">
        <h3>⏰ {hours}</h3>
        <p>Hours</p>
      </div>

      <div className="time-box">
        <h3>⏳ {minutes}</h3>
        <p>Minutes</p>
      </div>

      <div className="time-box">
        <h3>⚡ {seconds}</h3>
        <p>Seconds</p>
      </div>

    </div>
  );
}