import React, { useState } from 'react';
import './card.css'; // Import CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-slider">
      <button className="slider-button prev" onClick={prevImage}>Previous</button>
      <div className="images-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
