// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const saved = await ContactMessage.create({ name, email, message });
    console.log('Saved contact message:', saved);
    res.status(200).json({ message: 'Message sent successfully', data: saved });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ message: 'Error sending message' });
  }
});

module.exports = router;
