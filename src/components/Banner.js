import React from 'react';

function Banner() {
  return (
    <div className="banner">
      <picture>
        {/* Mobile Banner */}
        <source
          media="(max-width: 768px)"
          srcSet="/assets/images/bannerImages/banner-mobile.webp"
        />
        {/* Default Banner (Desktop) */}
        <img
          className="banner-image"
          src="/assets/images/bannerImages/banner.webp"
          alt="Banner"
        />
      </picture>

      <img
        className="laptop-image"
        src="/assets/images/bannerImages/laptop.webp"
        alt="Laptop"
      />

      <div className="banner-content">
        <h1>
          AFFORDABLE & TRUSTED
          <br />
          THAT'S SG!
        </h1>
        <p>Your Partner in Quality Without Compromise!</p>
        <p>
          Hassle-Free 1-Year Warranty
          <br />
          Affordable Prices, No Hidden Costs
          <br />
          Quick Support, Always Ready
        </p>
      </div>

      <div className="banner-button">
        <a className="shop-btn" href="#">
          SHOP NOW
        </a>
        <a className="chat-btn" href="#">
          CHAT NOW
        </a>
      </div>
    </div>
  );
}

export default Banner;
