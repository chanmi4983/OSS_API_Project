import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Digital Art Platform</h1>
        <p>Online Exhibition & Art Work Shop</p>
        <button className="info-button">INFO +</button>
      </div>
      <div className="banner-image">
        <img src="https://via.placeholder.com/800x400" alt="Art Exhibition" />
      </div>
    </section>
  );
}

export default Banner;
