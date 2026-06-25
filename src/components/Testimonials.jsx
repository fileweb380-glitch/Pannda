import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "PANDA Fitness completely transformed my routine. The equipment is modern, the trainers are supportive, and the atmosphere keeps me motivated every day.",
      author: "Michael B.",
      status: "Member since 2024",
    },
    {
      quote:
        "I lost weight, gained confidence, and built healthy habits. The coaching team helped me stay consistent and achieve results I never thought possible.",
      author: "Selamawit A.",
      status: "Member since 2025",
    },
    {
      quote:
        "The best fitness center in Jimma. Clean facilities, professional trainers, and a welcoming community. Joining PANDA was one of the best decisions I've made.",
      author: "Daniel T.",
      status: "Member since 2023",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <span className="section-tag">
          🔥 REAL MEMBER RESULTS
        </span>

        <h2 className="section-title">
          Success <span>Stories</span>
        </h2>

        <p className="section-description">
          Hear what our members say about their transformation journey
          at PANDA Fitness Center.
        </p>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="stars">★★★★★</div>

            <p className="quote">
              "{review.quote}"
            </p>

            <div className="author-info">
              <h4>{review.author}</h4>
              <span>{review.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}