// import React from 'react';

// const Contact = ({ contactInfo, isDarkMode }) => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container contact-container">
//         <h2>Contact Us</h2>
//         <p>Email: {contactInfo.email}</p>
//         <p>Phone: {contactInfo.phone}</p>
//         <p>Address: {contactInfo.address}</p>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React from 'react';

// const Contact = ({ contactInfo, isDarkMode }) => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container contact-container">
//         {/* Left side: Embedded Map */}
//         <div className="contact-left">
//           <iframe
//             title="Location Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.756124206287!2d72.62506067513856!3d22.95920697921827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e88b9f9cd615d%3A0x6cd7f2b97a19b13!2sRaghuveer%20Industrial%20Park%2C%202%2C%20Dibiyapur%2C%20Vatva%20GIDC%2C%20Ahmedabad%2C%20Gujarat%20382445!5e0!3m2!1sen!2sin!4v1742736821420!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>

//         {/* Right side: Contact Content */}
//         <div className="contact-right">
//           <h2>Contact Us</h2>
//           <p>Email: {contactInfo.email}</p>
//           <p>Phone: {contactInfo.phone}</p>
//           <p>Address: {contactInfo.address}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';

const Contact = ({ contactInfo }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        {/* Left side: Map */}
        <div className="contact-left">
          <iframe
            title="Raghuveer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.756124206287!2d72.62506067513856!3d22.95920697921827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e88b9f9cd615d%3A0x6cd7f2b97a19b13!2sRaghuveer%20Industrial%20Park%2C%202%2C%20Dibiyapur%2C%20Vatva%20GIDC%2C%20Ahmedabad%2C%20Gujarat%20382445!5e0!3m2!1sen!2sin!4v1742736821420!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right side: Contact info */}
        <div className="contact-right">
          <h2>Contact Us</h2>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          <p>Address: {contactInfo.address}</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
