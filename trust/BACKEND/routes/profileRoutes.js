const express = require('express');
const router = express.Router();
const { saveProfile } = require('../controllers/profileController');
const Profile = require('../models/Profile');

// GET profile
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// POST (create or update)
router.post('/', saveProfile);

module.exports = router;
