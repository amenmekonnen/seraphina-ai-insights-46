
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const csvWriter = createObjectCsvWriter({
  path: 'waitlist.csv',
  header: [{ id: 'email', title: 'Email' }]
});

app.post('/api/waitlist', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send('Email required');

  await csvWriter.writeRecords([{ email }]);

  // Send confirmation email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

try {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Thanks for joining the waitlist!',
    text: "You're on the list. We'll keep you posted."
  });
} catch (error) {
  console.error('Email failed to send:', error);
  return res.status(500).send('Failed to send confirmation email');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
