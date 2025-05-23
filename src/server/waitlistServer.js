
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Path to CSV file
const csvFilePath = path.join(__dirname, 'waitlist.csv');

// Initialize CSV file if it doesn't exist
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, 'email,timestamp\n');
}

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your actual email
    pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Use app password for Gmail
  },
});

app.post('/api/waitlist', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Add to CSV
    const timestamp = new Date().toISOString();
    fs.appendFileSync(csvFilePath, `${email},${timestamp}\n`);

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Welcome to Seraphina Beta Waitlist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7e3af2;">Thank you for joining Seraphina Beta Waitlist!</h2>
          <p>We're thrilled to have you join our waitlist for Seraphina, the revolutionary thermal sensing technology for early breast cancer detection.</p>
          <p>You'll be among the first to know when our beta version becomes available in mid-July 2025.</p>
          <p>In the meantime, here's what you can expect:</p>
          <ul>
            <li>AI scan reports and thermal analysis</li>
            <li>Fitness tracking integration</li>
            <li>Access to our exclusive wellness community</li>
            <li>Thermal wellness tips</li>
            <li>Opportunity to provide feedback on our technology</li>
          </ul>
          <p>If you have any questions, feel free to reach out to us.</p>
          <p>Best regards,<br>The Seraphina Team</p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
