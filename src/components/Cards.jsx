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
      <button onClick={prevImage}>Previous</button>
      <div className="images-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'image active' : 'image'}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
