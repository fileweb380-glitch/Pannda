import React, { useState } from "react";

export default function Gallery() {
  const images = [
    {
      src: "/photo_2026-06-20_16-01-27.jpg",
      title: "Modern Equipment",
    },
    {
      src: "/photo_2026-06-20_16-01-09.jpg",
      title: "Our Team",
    },
    {
      src: "/photo_2026-06-20_22-44-53.jpg",
      title: "Cardio Zone",
    },
    {
      src: "/photo_2026-06-20_16-01-03.jpg",
      title: "Our Trip",
    },
    {
      src: "/photo_2026-06-20_16-01-21.jpg",
      title: "Free Weights",
    },
    {
      src: "/photo_2026-06-20_16-01-15.jpg",
      title: "Our Event",
    },
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-header">
        <span className="section-tag">
          🔥 EXPERIENCE THE ENVIRONMENT
        </span>

        <h2 className="section-title">
          Explore Our <span>Gym</span>
        </h2>

        <p className="section-description">
          Take a look inside PANDA Fitness Center and discover
          the premium atmosphere that helps members achieve results.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setActiveImage(image)}
          >
            <img src={image.src} alt={image.title} />

            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <span>View Image</span>
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="lightbox"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}