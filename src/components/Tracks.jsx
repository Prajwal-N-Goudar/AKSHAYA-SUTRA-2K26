export default function Tracks() {
  return (
    <section id="tracks" className="section">

      <h2>🚀 Event Tracks</h2>
      <br>
      </br>
      <br>
      </br>

      <div className="tracks-container">

        {/* Track 1 */}
        <div className="track-card">
          <h3 >🚀 Viksit Bharat Hackathon</h3>
          <br></br>
          <p>
            Build innovative technology solutions supporting the vision of 
            <b> Viksit Bharat</b> 
          </p>
          <br></br>
          <p className="track-date">📅 23 – 24 April 2026</p>
        </div>

        {/* Track 2 */}
        <div className="track-card">
          <h3>💡 Project Showcase</h3>
          <br></br>
          <p>
            Present innovative projects or prototypes demonstrating practical
            applications of technology and transforming ideas into reality.
          </p>
          <br></br>
          <p className="track-date">📅 24 April 2026</p>
        </div>

        {/* Track 3 */}
        <div className="track-card">
          <h3>🗺️ Treasure Hunt</h3>
          <br></br>
          <p>
            An exciting challenge where participants solve clues and tasks
            using logic and teamwork to complete the hunt.
          </p>
          <br></br>
          <p className="track-date">📅 24 April 2026</p>
        </div>

      </div>

    </section>
  );
}