import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            PANDA <span>FITNESS</span>
          </h2>

          <p>
            The premier fitness destination in Jimma, helping people
            build strength, confidence, and healthier lifestyles through
            world-class training and professional coaching.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#facilities">Facilities</a>
          <a href="#plans">Membership</a>
          <a href="#trainers">Trainers</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>

          <p>📍 Merkato, Jimma, Ethiopia</p>
          <p>📞 +251 91 780 0918</p>
          <p>📞 +251 92 854 5888</p>
          <p>⏰ Open Daily Until 10 PM 7/6</p>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>

          <div className="social-row">
            <a href="http://www.instagram.com/panda_fitness_center_jimma?igsh=MTVreWh0dTgyM3Q5cg==">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Telegram</a>
            <a href="https://www.tiktok.com/@panda_fitness_mus?_r=1&_t=ZS-97NPvfdvuOS">TikTok</a>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PANDA Fitness Center.
          All Rights Reserved.
        </p>

        <p>
          Built with ❤️ for fitness excellence.
        </p>
      </div>
    </footer>
  );
}