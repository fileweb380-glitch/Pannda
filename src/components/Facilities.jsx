import React from "react";

export default function Facilities() {
  const facilities = [
    {
      title: "Dam Zone",
      desc: "Modern treadmills, bikes, and cardio equipment designed to improve endurance and burn calories efficiently.",
      img: "/photo_2026-06-20_16-01-27.jpg",
    },
    {
      title: "Strength Training",
      desc: "Professional strength machines and resistance systems for building power and muscle.",
      img: "/photo_2026-06-20_16-00-41.jpg",
    },
    {
      title: "Free Weights Area",
      desc: "Complete range of dumbbells, barbells, benches, and lifting stations.",
      img: "/photo_2026-06-20_16-01-21.jpg",
    },
    {
      title: "Personal Coaches",
      desc: "Expert trainers providing personalized workout plans and guidance.",
      img: "/photo_2026-06-20_22-30-49.jpg",
    },
    {
      title: "Group Fitness",
      desc: "Energetic classes that keep you motivated and accountable.",
      img: "/photo_2026-06-20_16-01-09.jpg",
    },
  ];

  return (
    <section className="facilities-section" id="facilities">
      <div className="section-header">
        <span className="section-tag">🔥 WORLD-CLASS EQUIPMENT</span>

        <h2 className="section-title">
          Elite <span>Facilities</span>
        </h2>

        <p className="section-description">
          Everything you need to build strength, improve fitness,
          and achieve your goals in one premium training environment.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-image">
              <img src={facility.img} alt={facility.title} />
            </div>

            <div className="facility-content">
              <h3>{facility.title}</h3>
              <p>{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}