import React from "react";

export default function Trainers() {
  const trainers = [
    {
      name: "Faris",
      role: "Strength & Power Specialist",
      img: "/photo_2026-06-21_12-46-28.jpg",
    },
    {
      name: "Lule Meckonnen",
      role: "Cardio & Hybrid Athletics",
      img: "/photo_2026-06-20_22-30-26.jpg",
    },
    {
      name: "Coaches",
      role: "Our Coaches",
      img: "/photo_2026-06-20_22-30-49.jpg",
    },
    {
      name: "bilile",
      role: "girls coach",
      img: "/photo_2026-06-25_14-47-46.jpg",
    },
    {
      name:"Haymi",
      role: "crossFit for girls",
      img: "/photo_2026-06-25_14-55-33.jpg"
    }
  ];

  return (
    <section className="trainers-section" id="trainers">
      <div className="section-header">
        <span className="section-tag">
          🔥 PROFESSIONAL FITNESS EXPERTS
        </span>

        <h2 className="section-title">
          Meet Our <span>Coaches</span>
        </h2>

        <p className="section-description">
          Train with experienced professionals dedicated to helping
          you reach your fitness goals faster and safer.
        </p>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <div className="trainer-image">
              <img src={trainer.img} alt={trainer.name} />
            </div>

            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}