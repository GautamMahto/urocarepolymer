// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Create Nodemailer transporter using environment variables
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
//   port: process.env.SMTP_PORT, // e.g., 465 for SSL
//   secure: process.env.SMTP_PORT == 465, // true for port 465, false otherwise
//   auth: {
//     user: process.env.EMAIL_USER, // Your Gmail address
//     pass: process.env.EMAIL_PASS, // Your App Password
//   },
// });

// // Route to send email
// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER, // Sender address (your email)
//     to: email, // Recipient email
//     subject: `New message from ${name}`,
//     text: message,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);
//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, message: "Failed to send email." });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "rajafabricator11@gmail.com", // Change this to your recipient email
    subject: `New Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = process.env.PORT_EMAIL || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
