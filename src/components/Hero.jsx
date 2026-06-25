import React from "react";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <header className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="premium-badge">
          🔥 ELITE FITNESS CENTER IN JIMMA
        </div>

        <h1>
          BUILD YOUR <br />
          <span className="text-gradient">STRONGEST VERSION</span>
        </h1>

        <p>
          Join PANDA Fitness Center and train in a world-class environment
          designed for strength, transformation, and peak performance.
          Professional coaching, premium equipment, and a community that
          pushes you beyond limits.
        </p>

        <div className="hero-ctas">
          <button
  className="btn-premium btn-red"
  onClick={() => navigate("/soon")}
>
  Start Today
</button>
          <button
            className="btn-premium btn-outline"
            onClick={() =>
              document
                .getElementById("membership")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Membership
          </button>
        </div>
      </div>
    </header>
  );
}