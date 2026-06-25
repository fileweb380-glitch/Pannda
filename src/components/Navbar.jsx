import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-container">
        
       <a href="#home" className="nav-logo">
  <img
    src="/photo_2026-06-20_22-30-40.jpg"
    alt="PANDA Fitness Logo"
    className="logo-img"
  />

  <span className="logo-text">
    PANDA<span>.</span>
  </span>
</a>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#plans" onClick={() => setMenuOpen(false)}>Membership</a>
          <a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a>
          <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>


<a className="nav-cta"
  onClick={() => navigate("/soon")}

 >Join Now</a>
 
      </div>
    </nav>
  );
}