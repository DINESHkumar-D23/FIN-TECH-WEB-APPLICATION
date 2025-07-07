const Profile = require('../models/Profile');

const saveProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (!profile) {
      // Create new profile if it doesn't exist
      profile = new Profile(req.body);
      await profile.save();
      return res.status(201).json(profile);
    }

    // Update existing profile
    Object.assign(profile, req.body);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save profile' });
  }
};

module.exports = { saveProfile };
