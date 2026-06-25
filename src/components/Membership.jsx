import React from "react";

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "2,000 ETB",
      period: "/month",
      features: [
        "Full Gym Access",
        "Cardio Equipment",
        "Free Weights Area",
        "7/3 Gym Access From morning - Until 10:00PM",
        "Locker Room Access",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "2,500 ETB",
      period: "/month",
      features: [
        "Everything in Basic",
       "7/6 Gym Access From morning - Until 10:00PM",
        "Group Fitness Classes",
        "Trainer Consultation",
        "Priority Support",
      ],
      popular: true,
    },
    
  ];

  return (
    <section className="membership-section" id="membership">
      <div className="section-header">
        <span className="section-tag">🔥 MEMBERSHIP OPTIONS</span>

        <h2 className="section-title">
          Choose Your <span>Plan</span>
        </h2>

        <p className="section-description">
          Flexible membership packages designed for every fitness level,
          from beginners to serious athletes.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              plan.popular ? "popular-card" : ""
            }`}
          >
            {plan.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}

            <h3>{plan.name}</h3>

            <div className="price">
              {plan.price}
              <span>{plan.period}</span>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <button
              className={`btn-premium ${
                plan.popular ? "btn-red" : "btn-outline"
              }`}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}