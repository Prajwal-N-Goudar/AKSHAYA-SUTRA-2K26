import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img src="/aitlogo.png" alt="AIT logo" className="nav-logo"/>
        <img src="/Aitlogo.jpeg" alt="Hackhton logo" className="nav-logo"/>
      </div>

      

      {/* Hamburger Menu */}
      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navbar Links */}
     <ul className={menuOpen ? "nav-links active" : "nav-links"}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#prizes" onClick={() => setMenuOpen(false)}>Prizes</a></li>
  <li><a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a></li>
  <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  <li>
  <a 
    href="https://docs.google.com/forms/d/1sOFi3SVXA1Wob6RCCc1PGf3uJpyckhJqVRF-GQ3KCng/viewform"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setMenuOpen(false)}
  >
    Apply
  </a>
</li>
</ul>

    </nav>
  );
}