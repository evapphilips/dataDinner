// Require libraries and files
const express = require('express')
const path = require('path');
const router = express.Router()

// Show Facilitators page
router.get('/', async (req, res) => {
    res.sendFile('facilitator.html', { root: path.join(__dirname, '../public') });
  })

  module.exports = router