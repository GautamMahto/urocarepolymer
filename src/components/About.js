import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    // <section id="about" className="about">
    //   <div className="container about-container">
    //     <div className="about-text">
    //       <h2>About Us</h2>
    //       <p>
    //         We specialize in building machines and fabricating metal structures tailored to client specifications across diverse industries. Our comprehensive engineering services include steel fabrication, welding, machining, and designing complex mechanical systems.
    //       </p>
    //       <p>
    //         Backed by experienced engineers and fabricators, we ensure innovative and precise solutions, delivering reliable, cost-effective, and high-quality products from concept to completion.
    //       </p>
    //       <a href="#products">Explore Our Products</a>
    //     </div>
    //     <div className="about-image">
    //       <img src="C:\Users\GAURAV\OneDrive\Documents\Gautam\my-app\public\OIP (3).jpeg" alt="About Us" />
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="about">
  <div className="container about-container">
    <div className="about-text">
      <h2>About Us</h2>
      <p>
        <strong>Custom Machine Manufacturing &amp; Fabrication:</strong> 
        We specialize in building machines and fabricating metal structures tailored to client specifications across diverse industries.
      </p>
      <p>
        <strong>Comprehensive Engineering Services:</strong> 
        We offer steel fabrication, welding, machining, and design of complex mechanical systems.
      </p>
      <p>
        <strong>Skilled Engineering Team:</strong> 
        Our experienced engineers and fabricators ensure innovative and precise solutions.
      </p>
      <p>
        <strong>Client-Centric Solutions:</strong> 
        We deliver reliable, cost-effective, and high-quality products from concept to completion.
      </p>
      <a href="#products">Explore Our Products</a>
    </div>
    <div className="about-image">
      <img src="circle_cropped_image.png" alt="About Us" />
    </div>
  </div>
</section>

);
};
export default About;
