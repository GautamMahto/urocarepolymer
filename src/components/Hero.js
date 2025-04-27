import React, { useState, useEffect } from 'react';

const Hero = ({ images, isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="hero">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div className="overlay">
        <h1>WE BUILD TRUST</h1>
        <p>Custom Machine Manufacturing &amp; Fabrication Excellence</p>
        <a href="#contact">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;
