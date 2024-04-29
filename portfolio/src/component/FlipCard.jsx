// FlipCard.jsx

import React, { useState } from 'react';
// import './FlipCard.css'; // Import the CSS for the flip card

function FlipCard({ photos }) {
 const [currentIndex, setCurrentIndex] = useState(0);

 const nextPhoto = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
 };

 const prevPhoto = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
 };

 return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={photos[currentIndex]} alt="Current" />
          <button onClick={prevPhoto}>Previous</button>
          <button onClick={nextPhoto}>Next</button>
        </div>
        <div className="flip-card-back">
          <img src={photos[currentIndex]} alt="Current" />
          <button onClick={prevPhoto}>Previous</button>
          <button onClick={nextPhoto}>Next</button>
        </div>
      </div>
    </div>
 );
}

export default FlipCard;