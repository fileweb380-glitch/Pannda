import React from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-img-box">
          <img
            src="/photo_2026-06-20_16-01-21.jpg"
            alt="PANDA Fitness Center"
          />
          <div className="accent-border"></div>

          <div className="about-badge">
            ⭐ 500+ Happy Members
          </div>
        </div>

        <div className="about-text-box">
          <h5 className="about-subtitle">
            🔥 PANDA FITNESS CENTER • JIMMA
          </h5>

          <h2 className="section-title">
            More Than A Gym.
            <span> A Lifestyle.</span>
          </h2>

          <p>
            PANDA Fitness Center is one of Jimma's leading fitness destinations,
            helping members build strength, confidence, and healthier lifestyles
            in a motivating and professional environment.
          </p>

          <p>
            Whether your goal is weight loss, muscle building, athletic
            performance, or overall wellness, our trainers and modern equipment
            are here to support your journey every step of the way.
          </p>

          <div className="about-features">
            <div>✓ Certified Trainers</div>
            <div>✓ Premium Equipment</div>
            <div>✓ Modern Facility</div>
            <div>✓ Supportive Community</div>
            <div>✓ Flexible Memberships</div>
            <div>✓ Clean Environment</div>
          </div>

          <div className="about-stats">
            <div>
              <h3>150+</h3>
              <span>Members</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Trainers</span>
            </div>

            <div>
              <h3>7+</h3>
              <span>Years</span>
            </div>
          </div>

           <button
  className="btn-premium btn-red"
  onClick={() => navigate("/soon")}
>
 Join The Movement
</button>
          
           
        </div>

      </div>
    </section>
  ); 
}