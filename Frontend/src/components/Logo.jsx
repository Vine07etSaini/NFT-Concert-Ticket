import React from 'react';
import Spline from '@splinetool/react-spline';
import './Logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <Spline
        scene="https://prod.spline.design/9skJqcg85iJyc4li/scene.splinecode" 
      />
      {/* Uncomment if you want to add overlay text and button */}
      {/* 
      <div className="overlay-text">
        Your Future Ticket System
        <br />
        <button className="explore-btn">Explore Now</button>
      </div> 
      */}
    </div>
  );
}

export default Logo;
