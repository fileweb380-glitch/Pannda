import React from "react";

export default function Stats() {
  const statsData = [
    { value: "150+", label: "Active Members" },
    { value: "10+", label: "Expert Trainers" },
    { value: "30+", label: "Premium Machines" },
    { value: "7+", label: "Years Experience" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div key={i} className="stat-card">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}