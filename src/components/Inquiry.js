
import React, { useState } from 'react';

const Inquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inquiry = { name, email, message };

    try {
      const response = await fetch(process.env.BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiry),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error('Email sending failed:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="inquiry" className="inquiry">
      <div className="container">
        <h2>Inquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitted && <p className="success-message">Inquiry submitted successfully!</p>}
      </div>
    </section>
  );
};

export default Inquiry;





// import React, { useState } from "react";
// import nodemailer from "nodemailer";

// const Inquiry = () => {
//   const [name, setName] = useState("");
//   const [company, setCompany] = useState("");
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const sendEmail = async (name, company, message) => {
//     const transporter = nodemailer.createTransport({
//       host: process.env.REACT_APP_SMTP_HOST, // e.g., smtp.gmail.com
//       port: process.env.REACT_APP_SMTP_PORT, // e.g., 465
//       secure: process.env.REACT_APP_SMTP_PORT === "465", // true for 465
//       auth: {
//         user: process.env.REACT_APP_EMAIL_USER, // Email address
//         pass: process.env.REACT_APP_EMAIL_PASS, // App password
//       },
//     });

//     const mailOptions = {
//       from: process.env.REACT_APP_EMAIL_USER,
//       to: "rajafabricator11@gmail.com", // Replace with recipient email
//       subject: `New Inquiry from ${name}`,
//       text: `Name: ${name}\nCompany: ${company}\nMessage: ${message}\n`,
//     };

//     try {
//       const info = await transporter.sendMail(mailOptions);
//       console.log("Email sent: " + info.response);
//       return { success: true, message: "Email sent successfully!" };
//     } catch (error) {
//       console.error("Error sending email:", error);
//       return { success: false, message: "Failed to send email." };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await sendEmail(name, company, message);
    
//     if (response.success) {
//       setSubmitted(true);
//       setName("");
//       setCompany("");
//       setMessage("");
//       setTimeout(() => setSubmitted(false), 3000);
//     } else {
//       setError(response.message);
//     }
//   };

//   return (
//     <section id="inquiry" className="inquiry">
//       <div className="container">
//         <h2>Inquiry Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="company">Company Name</label>
//             <input
//               type="text"
//               id="company"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         {submitted && <p className="success-message">Inquiry submitted successfully!</p>}
//         {error && <p className="error-message">{error}</p>}
//       </div>
//     </section>
//   );
// };

// export default Inquiry;
