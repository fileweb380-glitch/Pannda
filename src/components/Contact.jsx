import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Your request has been received. Our team will contact you shortly."
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <span className="section-tag">
          🔥 START YOUR FITNESS JOURNEY
        </span>

        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <p className="section-description">
          Ready to transform your body and lifestyle? Contact us today
          and become part of the PANDA Fitness family.
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-info-panel">
          <h3>PANDA Fitness Center</h3>

          <div className="contact-details">
            <div className="contact-item">
              <span>📍</span>
              <p>Merkato, Jimma, Ethiopia</p>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <p>+251 91 780 0918</p>
               Or
                 <p>📞 +251 92 854 5888</p>
            </div>

            <div className="contact-item">
              <span>⏰</span>
              <p>Open Daily • Until 10:00 PM</p>
            </div>

            <div className="contact-item">
              <span>⭐</span>
              <p>Rated 5.0 by Members</p>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="PANDA Fitness Location"
              src="https://maps.google.com/maps?q=Merkato,%20Jimma,%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{
                border: 0,
                borderRadius: "15px",
              }}
              loading="lazy"
            />
          </div>
        </div>

        <form className="contact-form-panel" onSubmit={handleSubmit}>
          <h3>Book A Consultation</h3>

          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>


          <div className="form-group">
            <textarea
              rows="5"
              placeholder="Tell us about your fitness goals..."
            />
          </div>

          <button
            type="submit"
            className="btn-premium btn-red"
          >
            Submit Request
          </button>
        </form>

      </div>
    </section>
  );
}