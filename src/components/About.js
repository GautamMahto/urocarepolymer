import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            <strong>Medical-Grade Urine Bag Manufacturing:</strong>{' '}
            We specialize in producing sterile, high-quality urine drainage bags for hospitals, clinics, and home care.
          </p>
          <p>
            <strong>Premium, Biocompatible Materials:</strong>{' '}
            Our bags are made from top-grade, medical-safe PVC, ensuring durability, leak-proof performance, and patient comfort.
          </p>
          <p>
            <strong>Strict Quality &amp; Compliance:</strong>{' '}
            Every batch undergoes rigorous testing and adheres to international standards to guarantee safety and reliability.
          </p>
          <p>
            <strong>Customized Solutions:</strong>{' '}
            From sizing and capacity to integrated anti-reflux valves, we tailor each design to meet specific clinical and patient needs.
          </p>
          <a href="#products">Explore Our Products</a>
        </div>
        <div className="about-image">
          <img src="aboutus.png" alt="Our Urine Bags" />
        </div>
      </div>
    </section>
  );
};

export default About;
