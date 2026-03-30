export default function About() {
  return (
    <section id="about" className="about-section">

      {/* 🔲 Hackathon Card */}
      <div className="about-card">
        <img 
          src="https://source.unsplash.com/400x300/?hackathon,coding" 
          alt="Hackathon" 
          className="about-img"
        />
        <h2>About Hackathon</h2>
        <p>
          Akshaya Sutra is a national level 24-hour hackathon focused on 
          Viksit Bharat theme where students build innovative solutions 
          for future India.
        </p>
      </div>

      {/* 🔲 AIT Tumkur Card */}
      <div className="about-card">
        <img 
          src="https://source.unsplash.com/400x300/?college,technology" 
          alt="AIT Tumkur" 
          className="about-img"
        />
        <h2>About AIT Tumkur</h2>
        <p>
          AIT Tumkur is a leading engineering institution known for 
          academic excellence, innovation, and research, empowering 
          students to build future technologies.
        </p>
      </div>

    </section>
  );
}