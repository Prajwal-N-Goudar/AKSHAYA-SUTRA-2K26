import { useState } from "react";

export default function Timeline() {

  const [day, setDay] = useState(1);

  return (
    <section id="timeline" className="timeline-section">

      <h2 className="timeline-title">⏳ Event Timeline</h2>

      {/* DAY SWITCH BUTTON */}
      <div className="day-toggle">
        <button
          className={day === 1 ? "active" : ""}
          onClick={() => setDay(1)}
        >
          April 23
        </button>

        <button
          className={day === 2 ? "active" : ""}
          onClick={() => setDay(2)}
        >
          April 24
        </button>
      </div>

      {/* DAY 1 EVENTS */}
      {day === 1 && (
        <div className="schedule">

          <div className="event-card">
            <span>09:30 AM</span>
            <p>📍 Reporting</p>
          </div>

          <div className="event-card">
            <span>10:00 AM</span>
            <p>📝 Registration</p>
          </div>

          <div className="event-card">
            <span>10:30 AM</span>
            <p>🎤 Inauguration</p>
          </div>

          <div className="event-card">
            <span>11:00 AM</span>
            <p>💻 Coding Begins</p>
          </div>

          <div className="event-card">
            <span>02:00 PM</span>
            <p>🍱 Lunch</p>
          </div>

          <div className="event-card">
            <span>04:30 PM</span>
            <p>☕ Tea Break</p>
          </div>

          <div className="event-card">
            <span>06:00 PM</span>
            <p>🏆 1st Round Observation</p>
          </div>

          <div className="event-card">
            <span>08:30 PM</span>
            <p>🍽 Dinner</p>
          </div>

        </div>
      )}

      {/* DAY 2 EVENTS */}
      {day === 2 && (
        <div className="schedule">

          <div className="event-card">
            <span>01:00 AM</span>
            <p>🎮 Fun Events</p>
          </div>

          <div className="event-card">
            <span>03:00 AM</span>
            <p>🌙 Midnight Tea</p>
          </div>

          <div className="event-card">
            <span>04:00 AM</span>
            <p>🍪 Snacks</p>
          </div>

          <div className="event-card">
            <span>06:00 AM</span>
            <p>☀️ Morning Tea</p>
          </div>

          <div className="event-card">
            <span>08:00 AM</span>
            <p>🍳 Breakfast</p>
          </div>

          <div className="event-card">
            <span>11:00 AM</span>
            <p>🥇 Final Round</p>
          </div>

          <div className="event-card">
            <span>12:30 PM</span>
            <p>🏆 Winner Announcement</p>
          </div>

        </div>
      )}

    </section>
  );
}