import React, { useEffect, useState } from "react";

import pma3 from "../Images/PMA 3.jpeg";
import pma4 from "../Images/PMA 4.jpeg";
import pma5 from "../Images/PMA 5.jpeg";
import pma10 from "../Images/PMA 10.jpeg";
import pma8 from "../Images/PMA 8.jpeg";

const images = [pma3, pma4, pma5, pma10, pma8];

const Hero = () => {

const [currentImage, setCurrentImage] = useState(0);

/* =========================
⭐ Auto Slideshow
========================= */
useEffect(() => {


const interval = setInterval(() => {
  setCurrentImage((prev) => (prev + 1) % images.length);
}, 2500);

return () => clearInterval(interval);


}, []);

/* =========================
⭐ WhatsApp Handler
========================= */
function openWhatsApp() {


const phone = "918939255485";

const message =
  "Hello! I have a requirement for my business and would like to connect with PMA Engineering Solution. Can we schedule a call?";

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");


}

return ( <header className="hero-root" id="home">


  {/* ================= HERO ================= */}
  <div className="hero-container">

    {/* LEFT */}
    <div className="hero-left">

      <span className="pill">
        • Customized Manufacturing Experts
      </span>

      <h1 className="hero-title">
        Precision Engineering <br />
        For Modern Manufacturing.
      </h1>

      <p className="hero-copy">
        PMA Engineering Solution is India’s trusted jig and fixture
        manufacturer based in Chennai, South India. We specialize in
        customized fixtures, pallets, and industrial automation solutions
        for electronics, medical, and manufacturing industries.
      </p>

      <div className="hero-actions">
        <button
          className="btn-primary large"
          onClick={openWhatsApp}
        >
          Request Quote →
        </button>
      </div>

      <div className="metrics">

        <div className="metric">
          <div className="metric-value">120+</div>
          <div className="metric-label">
            Projects Completed
          </div>
        </div>

        <div className="divider" />

        <div className="metric">
          <div className="metric-value">99%</div>
          <div className="metric-label">
            On-Time Delivery
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT */}
    <div className="hero-right">

      <div className="card-shadow" />

      <div className="revenue-card video-card">

        {/* IMAGE SLIDER */}
        <img
          src={images[currentImage]}
          alt="PMA Engineering"
          className="hero-slider-image"
        />

        {/* STATS */}
        <div className="rev-stats">

          <div>
            <div className="stat-label">
              Fixtures Built
            </div>

            <div className="stat-value">
              500+
            </div>
          </div>

          <div>
            <div className="stat-label">
              Client Satisfaction
            </div>

            <div className="stat-value">
              99%
            </div>
          </div>

          <div>
            <div className="stat-label">
              Manufacturing Quality
            </div>

            <div className="stat-value">
              High Precision
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</header>


);
};

export default Hero;
