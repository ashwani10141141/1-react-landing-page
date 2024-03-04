import React from "react";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="hero-text">
        <h1>Your Feet Deserve The Best</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          maxime, sunt maiores nam aliquid ex.
        </p>
        <div className="hero-btn">
          <button className="fst-btn">Shop Now </button>
          <button className="sec-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
