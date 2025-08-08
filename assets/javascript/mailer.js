const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
// so i don't leak my password :P
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// Mkae the transporter!
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Handle POST request from frontend
app.post('/', (req, res) => {
  const { email, subject, body } = req.body;

  const mailOptions = {
    from: email,
    to: 'jennakazim2027@u.northwestern.edu',
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email.");
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send("Email sent successfully.");
    }
  });
});

// !!!!START SERVER!!!!
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});